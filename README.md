# Mali ORL

Static site for maliorl.com, a Croatian guide for parents about children's ear, nose and throat care. Published pages are the homepage, the endoscopy page, the symptom check, the hubs, the articles in `src/content`, the FAQ page, the doctor page, the privacy page, the imprint, and the 404 page. A new article is a Markdown file in `src/content/simptomi`, `src/content/stanja`, or `src/content/zahvati`. Do not link a page that is not in `src/lib/published.ts`. Booking happens on drmarjanovickavanagh.com. This site has no form, phone number, or email address.

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

The contact form on drmarjanovickavanagh.com should read `razlog` from the query string and prefill the reason for the visit. That change is not in this repository.

`CONTACT_URL`, `DOCTOR_URL`, and `SINUS_URL` live in `src/config.ts`. Booking buttons use `bookingUrl()`. Links to Centar za sinuse use `sinusUrl()` (`utm_source=maliorl`, `utm_medium=referral`). Centar za sinuse is the related site about sinuses and allergy. It is not described here as a children's clinic.

## Analytics

`ANALYTICS_DOMAIN` and `ANALYTICS_SRC` in `src/config.ts` stay empty until a Plausible or Umami domain is set. While they are empty, events do nothing and no third-party script is loaded. There is no cookie banner and no GA4.

When a domain is set, the events are `cta_klik` (props `page`, `position`, `razlog`), `kviz_start`, `kviz_ishod` (`ishod` A, B, or C), and `faq_otvoren`. Break down `cta_klik` by `page` or `razlog` to see which pages lead to the most booking clicks.
