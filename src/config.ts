import { bookingRazlog } from './lib/booking';

export const SITE = 'https://maliorl.com';

/** Live path checked 27 Sep 2026: https://drmarjanovickavanagh.com/kontakt returns 200. */
export const CONTACT_URL = 'https://drmarjanovickavanagh.com/kontakt';

export const DOCTOR_URL = 'https://drmarjanovickavanagh.com/';

export const SINUS_URL = 'https://centarzasinuse.com/';

/**
 * Optional analytics. All of these stay empty or false until a real ID and
 * a matching consent choice exist. Do not invent a measurement ID.
 * Measurement is inactive while ANALYTICS_CONSENT is false.
 *
 * If GTM_CONTAINER_ID is set, GTM is the only sender. Do not also set a GA4
 * tag in code, or the same event is sent twice.
 */
export const GA4_MEASUREMENT_ID = '';
export const GTM_CONTAINER_ID = '';
export const ANALYTICS_CONSENT = false;

/** Cookie-free analytics (Plausible or Umami). Used only when GA4 and GTM are empty. */
export const ANALYTICS_DOMAIN = '';
export const ANALYTICS_SRC = '';

export function bookingUrl(opts: { page: string; position: string }) {
  const url = new URL(CONTACT_URL);
  url.searchParams.set('utm_source', 'maliorl');
  url.searchParams.set('utm_medium', 'referral');
  url.searchParams.set('utm_campaign', opts.page);
  url.searchParams.set('utm_content', opts.position);
  url.searchParams.set('razlog', bookingRazlog(opts.page));
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

/** Sister site about sinuses and allergy. Not a booking link. */
export function sinusUrl() {
  const url = new URL(SINUS_URL);
  url.searchParams.set('utm_source', 'maliorl');
  url.searchParams.set('utm_medium', 'referral');
  return url.toString();
}
