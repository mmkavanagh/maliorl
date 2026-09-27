export const SITE = 'https://maliorl.com';

// <!-- PROVJERITI --> da putanja /kontakt postoji
export const CONTACT_URL = 'https://drmarjanovickavanagh.com/kontakt';

export const DOCTOR_URL = 'https://drmarjanovickavanagh.com/';

export function bookingUrl(opts: { page: string; position: string; razlog?: string }) {
  const url = new URL(CONTACT_URL);
  url.searchParams.set('utm_source', 'maliorl');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', opts.page);
  url.searchParams.set('utm_content', opts.position);
  if (opts.razlog) url.searchParams.set('razlog', opts.razlog);
  return url.toString();
}

/** Profile link on the doctor site, with the same campaign tags as the homepage template. */
export function doctorUrl(page: string) {
  const url = new URL(DOCTOR_URL);
  url.searchParams.set('utm_source', 'maliorl');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', page);
  return url.toString();
}
