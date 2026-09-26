import { AUTHOR_NAME, BOOKING_SITE, LANG, SITE_NAME, SITE_URL } from '../config';

export interface Crumb {
  name: string;
  href: string;
}

export function absoluteUrl(pathname: string): string {
  const path = pathname.startsWith('/') ? pathname : `/${pathname}`;
  return new URL(path, SITE_URL).href;
}

function authorPerson() {
  return {
    '@type': 'Person',
    '@id': `${BOOKING_SITE}#author`,
    name: AUTHOR_NAME,
    url: BOOKING_SITE,
    // TODO: add the author's LinkedIn profile to sameAs. Do not invent the URL.
    sameAs: [BOOKING_SITE],
  };
}

export function buildSchemaGraph(options: {
  title: string;
  description: string;
  crumbs: Crumb[];
  includeAuthor?: boolean;
}): string {
  const pageUrl = absoluteUrl(options.crumbs.at(-1)?.href ?? '/');
  const graph: Record<string, unknown>[] = [
    {
      '@type': 'WebSite',
      '@id': `${absoluteUrl('/')}#website`,
      name: SITE_NAME,
      url: absoluteUrl('/'),
      description: options.description,
      inLanguage: LANG,
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${pageUrl}#breadcrumb`,
      itemListElement: options.crumbs.map((crumb, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: crumb.name,
        item: absoluteUrl(crumb.href),
      })),
    },
  ];

  if (options.includeAuthor) {
    const person = authorPerson();
    graph.push({
      '@type': 'WebPage',
      '@id': pageUrl,
      url: pageUrl,
      name: options.title,
      description: options.description,
      inLanguage: LANG,
      isPartOf: { '@id': `${absoluteUrl('/')}#website` },
      author: { '@id': person['@id'] },
      reviewedBy: { '@id': person['@id'] },
    });
    graph.push(person);
  }

  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': graph,
  }).replace(/</g, '\\u003c');
}
