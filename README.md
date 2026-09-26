# Mali ORL

Static pediatric ENT site in Croatian. Phase 1 is the scaffold: Astro, an empty MDX content collection, Tailwind CSS, self-hosted fonts, and the shared header and footer. Topic pages are not included yet.

The build is fully static HTML in `dist/`. There is no server adapter.

## Local development

Node.js 22.12 or newer (Astro 7). Package manager: npm.

```bash
npm install
npm run dev
npm run build
```

`npm run dev` starts the dev server. `npm run build` writes the static site to `dist/`.

## Hostinger Node.js

Deploy source only, from Git or an archive. Do not upload `dist/` or `node_modules`. Hostinger runs the build.

- App type: `astro`
- Node version: 22
- Package manager: npm
- Root directory: `.`
- Build script: `build`
- Output directory: `dist`
- Entry file: none
