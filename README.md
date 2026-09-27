# Mali ORL

Static site for maliorl.com, a Croatian guide for parents about children's ear, nose and throat care. Phase 1 is the homepage. Booking happens on drmarjanovickavanagh.com. This site has no form, phone number, or email address.

## Local development

Node.js 22. Package manager: npm.

```bash
npm install
npm run dev
npm run build
```

`npm run dev` starts the dev server. `npm run build` writes static HTML to `dist/`.

## Hostinger

Upload the contents of `dist/` to `public_html`. `public/.htaccess` is copied into `dist/` and sets HTTPS, no `www`, a trailing slash, gzip/brotli, a long cache for static files, and `ErrorDocument 404 /404.html`. The 404 page itself is not part of this phase.

The contact form on drmarjanovickavanagh.com should read `razlog` from the query string and prefill the reason for the visit. That change is not in this repository.
