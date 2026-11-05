# Balbina Garza Delgado: website

Astro static site. Content lives in plain files, so there is no database and no CMS to maintain.
A CMS (Keystatic) can be added later if Balbina wants to edit herself.

## Run it

    npm install
    npm run dev      # local preview
    npm run build    # builds to dist/

## Where things live

| To change | Edit |
| --- | --- |
| Phone, email, address, fees, free-call wording | `src/data/site.ts` |
| FAQ questions and answers (also feeds the FAQ structured data) | `src/data/faqs.ts` |
| A service page | `src/content/services/*.md` |
| Add a journal article | new file in `src/content/journal/`, set `draft: false` |
| Home, About, First session, Contact copy | `src/pages/*.astro` |
| Colours, fonts, spacing | tokens at the top of `src/styles/global.css` |

The journal link, page and sitemap entry stay hidden until the first article has `draft: false`.

## Deploy (Vercel)

1. Import the project. Framework preset: Astro.
2. Add environment variables for the contact form (`api/contact.js` emails enquiries through Resend):
   - `RESEND_API_KEY`
   - `CONTACT_TO` (where enquiries go)
   - `CONTACT_FROM` (a verified sender, e.g. `Website <hello@balbinagarzapsychotherapy.com>`)
3. Point the domain from Wix to Vercel. The four old URLs (`/`, `/about`, `/services`, `/contact`) are kept, so no redirects are needed.

## Remove before launch

`vercel.json` sends `X-Robots-Tag: noindex, nofollow` on every page so the public preview
address cannot be indexed by Google. **Delete that header line when the site goes live on
balbinagarzapsychotherapy.com**, or the real site will never rank.

## Before launch: confirm with Balbina

Search for `REVIEW` in `src/pages/privacy.astro`, and check each item below.

- Whether the address (33 Gay Street, BA1 2NT) shows on the site. It is already public on Google Maps.
  `showAddress` in `src/data/site.ts` controls the page text and the structured data together.
- Fees. Add them to `fees` in `src/data/site.ts` and they appear on the First session page.
- "More than 20 years" vs "about 25 years". Her current About page uses both.
- The professional body's name. Her Services page says "Association of Child and Adolescent Psychotherapists"; her About page says "Association of Child Psychotherapists". The site uses the second.
- Her Services page cites the Data Protection Act 1998, which has been replaced. The new privacy page avoids it. Add her ICO registration number and how long she keeps enquiry emails.
- Whether to add "limits of confidentiality" wording (safeguarding). The current copy says "strictly confidential", as her old site does.
- Spanish-language sessions? If yes, it is a real differentiator.
- Every line of rewritten copy in `src/content/services/` and the home page statement needs her approval.
- Photography: a portrait, her room and the building entrance. Add an `og:image` once there is one.
- Ask whether she can log in to her Google Business Profile, and agree one business name to use everywhere.

## Later

- Area pages (Keynsham, Bradford on Avon and so on), only where she genuinely sees families.
- Journal: the outline for "Child psychotherapist, counsellor or CAMHS?" is in `src/content/journal/` as a draft.
- Keystatic, if she wants to edit pages herself.
