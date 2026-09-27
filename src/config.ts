import { bookingRazlog } from './lib/booking';

export const SITE = 'https://maliorl.com';

/** Live path checked 27 Sep 2026: https://drmarjanovickavanagh.com/kontakt returns 200. */
export const CONTACT_URL = 'https://drmarjanovickavanagh.com/kontakt';

export const DOCTOR_URL = 'https://drmarjanovickavanagh.com/';

export const SINUS_URL = 'https://centarzasinuse.com/';

/**
 * GTM is the only sender. The container ID was supplied for this site.
 * Leave GA4_MEASUREMENT_ID empty so this repo does not also load gtag.js.
 * Tags inside the container are configured in Google Tag Manager, not here.
 *
 * ANALYTICS_CONSENT gates the snippet in BaseLayout. It is on so the
 * supplied container loads. There is no cookie banner on this site.
 */
export const GA4_MEASUREMENT_ID = '';
export const GTM_CONTAINER_ID = 'GTM-5BH2ZN54';
export const ANALYTICS_CONSENT = true;

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
