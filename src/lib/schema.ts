import { site } from '../data/site';

const base = site.url;
export const businessId = `${base}/#practice`;
export const personId = `${base}/#balbina`;

export function businessSchema() {
  const address: Record<string, string> = {
    '@type': 'PostalAddress',
    addressLocality: 'Bath',
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  };
  if (site.showAddress) {
    address.streetAddress = site.address.street;
    address.postalCode = site.address.postcode;
  }

  const data: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': ['ProfessionalService', 'MedicalBusiness'],
    '@id': businessId,
    name: `${site.name}, ${site.practice}`,
    url: base,
    description:
      'Highly specialist child and adolescent psychotherapy, in person in Bath and North East Somerset and online with families across the UK.',
    telephone: site.phoneIntl,
    email: site.email,
    address,
    areaServed: [
      { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    founder: { '@id': personId },
    sameAs: [site.linkedin],
  };
  if (site.showAddress) {
    data.geo = { '@type': 'GeoCoordinates', latitude: site.geo.lat, longitude: site.geo.lng };
  }
  return data;
}

export function personSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': personId,
    name: site.name,
    jobTitle: 'Child and Adolescent Psychotherapist',
    url: `${base}/about`,
    worksFor: { '@id': businessId },
    memberOf: { '@type': 'Organization', name: 'Association of Child Psychotherapists' },
    sameAs: [site.linkedin],
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((i) => ({
      '@type': 'Question',
      name: i.q,
      acceptedAnswer: { '@type': 'Answer', text: i.a },
    })),
  };
}

export function serviceSchema(name: string, description: string, path: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    url: `${base}${path}`,
    provider: { '@id': businessId },
    areaServed: { '@type': 'AdministrativeArea', name: 'Bath and North East Somerset' },
  };
}

export function articleSchema(title: string, description: string, path: string, date: Date) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: title,
    description,
    datePublished: date.toISOString(),
    mainEntityOfPage: `${base}${path}`,
    author: { '@id': personId },
    publisher: { '@id': businessId },
  };
}

export function breadcrumbSchema(crumbs: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: c.name,
      item: `${base}${c.path}`,
    })),
  };
}
