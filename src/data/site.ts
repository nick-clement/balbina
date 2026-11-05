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

  // The address is already public on Google Maps. Her current site does not show it.
  // While this is false, the address stays out of the page text AND the structured
  // data, so the two always match. Confirm with Balbina, then flip to true.
  showAddress: false,
  address: {
    street: '33 Gay Street',
    locality: 'Bath',
    postcode: 'BA1 2NT',
    region: 'Bath and North East Somerset',
    country: 'GB',
  },
  geo: { lat: 51.3844909, lng: -2.3632195 },

  freeCall: 'Book a free 15-minute call',

  // Add fees here when she has agreed them, e.g.
  // fees: [{ label: 'Initial consultation (90 minutes)', price: '£000' }]
  fees: null as null | { label: string; price: string }[],
};
