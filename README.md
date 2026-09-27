# Mali ORL

Static site for maliorl.com, a Croatian guide for parents about children's ear, nose and throat care. Published pages are the homepage, the endoscopy page, the parent page at `/za-roditelje/`, the symptom check, the hubs, the articles in `src/content`, the FAQ page, the doctor page, the privacy page, and the 404 page. A new article is a Markdown file in `src/content/simptomi`, `src/content/stanja`, or `src/content/zahvati`. Do not link a page that is not in `src/lib/published.ts`. Booking happens on drmarjanovickavanagh.com. This site has no form, phone number, or email address.

## Local development

Node.js 22. Package manager: npm.

```bash
npm install
npm run dev
npm run build
```

`npm run dev` starts the dev server. `npm run build` writes static HTML to `dist/`.

## Hostinger

Upload the contents of `dist/` to `public_html`. `public/.htaccess` is copied into `dist/` and sets HTTPS, no `www`, a trailing slash, gzip/brotli, a long cache for static files, and `ErrorDocument 404 /404.html`.

Booking buttons use `bookingUrl()` in `src/config.ts`. Every link keeps `utm_source=maliorl`, `utm_medium=referral`, `utm_campaign` = the page id, and `utm_content` = the button position. `razlog` is one of `djecji-orl-pregled`, `treci-krajnik`, `ventilacijske-cjevcice`, `frenulum`, or `ostali-zahvati`, chosen in `src/lib/booking.ts`.

The live contact form on drmarjanovickavanagh.com reads `razlog`, but only for `sinusi`, `rinoplastika`, `septum`, `alergije`, and `apneja`. The five children's reasons are sent and are not preselected until that site adds them. This site has no lead form.

`CONTACT_URL`, `DOCTOR_URL`, and `SINUS_URL` live in `src/config.ts`. Links to Centar za sinuse use `sinusUrl()` (`utm_source=maliorl`, `utm_medium=referral`). Centar za sinuse is the related site about sinuses and allergy. It is not described here as a children's clinic.

## Analytics

`GTM_CONTAINER_ID` in `src/config.ts` is `GTM-5BH2ZN54`, the container supplied for this site. `ANALYTICS_CONSENT` is true, so `BaseLayout` loads that container once: the `gtm.js` snippet in the head and the noscript iframe at the start of the body. `GA4_MEASUREMENT_ID` stays empty. This repo does not load `gtag.js`, Plausible, or Umami.

Tags inside the container, including any GA4 tag, are configured in Google Tag Manager, not in this repo. Loading the container does not prove a GA4 hit.

Events go to `dataLayer` only. `generate_lead` is refused in `track()` because this site never confirms that a form was received. A click to drmarjanovickavanagh.com is `cta_click` (`page`, `position`, and the `razlog` slug), not a lead. `contact_phone_click` and `contact_whatsapp_click` have listeners, but there is no phone or WhatsApp link on this site.

`kviz_start` and `kviz_ishod` (`ishod` A, B, or C) do not include the answers. The symptom check is not stored. `faq_otvoren` sends the question text from the page, not a message the parent wrote.
