// Single source of truth for business details. Change them here and every page,
// the footer and the structured data update together.

export const site = {
  url: 'https://www.balbinagarzapsychotherapy.com',
  name: 'Balbina Garza Delgado',
  practice: 'Child and Adolescent Psychotherapy',
  descriptor: 'Child & Adolescent Psychotherapist, Bath',
  phone: '07471 096245',
  phoneIntl: '+447471096245',
  email: 'balbina.garza.psychotherapy@gmail.com',
  linkedin: 'https://www.linkedin.com/in/balbina-garza-delgado-20729851/',

  // Balbina confirmed she is happy for the address to appear on the site and on Google Maps.
  // While this is true the address shows in the page text AND the structured data.
  showAddress: true,
  address: {
    street: '33 Gay Street',
    locality: 'Bath',
    postcode: 'BA1 2NT',
    region: 'Bath and North East Somerset',
    country: 'GB',
  },
  geo: { lat: 51.3844909, lng: -2.3632195 },
  // Opens Google Maps on the address. Swap for her Google Business Profile link when she shares it.
  mapUrl: 'https://www.google.com/maps/search/?api=1&query=33+Gay+Street%2C+Bath+BA1+2NT',

  ico: '00012182897',
  years: 27,
  languages: ['English', 'Spanish'],

  freeCall: 'Book a free 15-minute call',

  // Working hours, matching her Google Business Profile. Times are 24-hour for the structured data.
  hours: [
    { day: 'Monday', label: '9am to 5pm', opens: '09:00', closes: '17:00' },
    { day: 'Tuesday', label: '9am to 7pm', opens: '09:00', closes: '19:00' },
    { day: 'Wednesday', label: '9am to 7pm', opens: '09:00', closes: '19:00' },
    { day: 'Thursday', label: '9am to 6pm', opens: '09:00', closes: '18:00' },
  ],

  // Add fees here when she has agreed them, e.g.
  // fees: [{ label: 'Initial consultation (90 minutes)', price: '£000' }]
  fees: null as null | { label: string; price: string }[],
  // Fees are on a sliding scale and are not published. This line replaces a price list.
  feesNote: 'Fees are on a sliding scale, and I am happy to talk them through on our first call.',
};
