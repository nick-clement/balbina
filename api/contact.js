// Vercel function: receives the contact form and emails it to Balbina through Resend.
// Needs three environment variables in the Vercel project:
//   RESEND_API_KEY  an API key from resend.com
//   CONTACT_TO      where enquiries go (her email)
//   CONTACT_FROM    a verified sender, e.g. "Website <hello@balbinagarzapsychotherapy.com>"
// Nothing is logged, because enquiries can contain sensitive information.

const clean = (v, max) => String(v ?? '').replace(/\r/g, '').trim().slice(0, max);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).send('Method not allowed');
  }

  const body =
    typeof req.body === 'string' ? Object.fromEntries(new URLSearchParams(req.body)) : req.body || {};

  // Hidden field that real people leave empty. Bots fill it in.
  if (clean(body.website, 200)) return res.redirect(303, '/contact?sent=1');

  const first = clean(body.first_name, 80);
  const last = clean(body.last_name, 80);
  const email = clean(body.email, 200);
  const phone = clean(body.phone, 40);
  const forWhom = clean(body.for, 60);
  const message = clean(body.message, 4000);

  const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!first || !last || !emailOk || !body.consent) return res.redirect(303, '/contact?error=1');

  const { RESEND_API_KEY, CONTACT_TO, CONTACT_FROM } = process.env;
  if (!RESEND_API_KEY || !CONTACT_TO || !CONTACT_FROM) return res.redirect(303, '/contact?error=1');

  const details = [
    `Name: ${first} ${last}`,
    `Email: ${email}`,
    phone && `Phone: ${phone}`,
    forWhom && `Enquiry is for: ${forWhom}`,
  ].filter(Boolean);
  const text = `${details.join('\n')}\n\n${message || '(No message)'}`;

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { Authorization: `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO],
        reply_to: email,
        subject: `Web enquiry from ${first} ${last}`,
        text,
      }),
    });
    return res.redirect(303, r.ok ? '/contact?sent=1' : '/contact?error=1');
  } catch {
    return res.redirect(303, '/contact?error=1');
  }
}
