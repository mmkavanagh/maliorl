/**
 * Visit reason sent as `razlog` on the booking URL.
 * Slugs are lowercase ASCII so the contact form can match them after toLowerCase().
 * Labels the destination select should show:
 * - djecji-orl-pregled → Dječji ORL pregled
 * - treci-krajnik → Treći krajnik
 * - ventilacijske-cjevcice → Ventilacijske cjevčice
 * - frenulum → Frenulum
 * - ostali-zahvati → Ostali zahvati
 */
export const RAZLOG_PREGLED = "djecji-orl-pregled";
export const RAZLOG_TRECI = "treci-krajnik";
export const RAZLOG_CJEVCICE = "ventilacijske-cjevcice";
export const RAZLOG_FRENULUM = "frenulum";
export const RAZLOG_OSTALI = "ostali-zahvati";

const TRECI = new Set(["adenoidektomija", "treci-krajnik"]);
const CJEVCICE = new Set(["ventilacijske-cjevcice", "ponavljajuce-upale-uha", "tekucina-iza-bubnjica"]);
const FRENULUM = new Set(["frenulotomija", "kratka-podjezicna-resica"]);
const OSTALI = new Set([
  "vadenje-krajnika",
  "tonzilotomija",
  "kombinirani-zahvati",
  "zahvati-u-ordinaciji",
  "strano-tijelo-nos-uho",
  "endoskopska-kirurgija-sinusa",
  "redukcija-nosnih-skoljki",
  "polipi-i-nosne-skoljke",
  "otoplastika-kod-djece",
  "kauterizacija-nosa",
]);

/** One of the five booking reasons for this page id (article slug or static page name). */
export function bookingRazlog(page: string): string {
  if (TRECI.has(page)) return RAZLOG_TRECI;
  if (CJEVCICE.has(page)) return RAZLOG_CJEVCICE;
  if (FRENULUM.has(page)) return RAZLOG_FRENULUM;
  if (OSTALI.has(page)) return RAZLOG_OSTALI;
  return RAZLOG_PREGLED;
}
