// Prerender estático para la SPA (Vite + React Router).
//
// Problema que resuelve: Netlify sirve el mismo `index.html` para todas las rutas y
// los crawlers de motores de respuesta con IA (GPTBot, ClaudeBot, PerplexityBot…) no
// ejecutan JavaScript. Sin esto, de `/services`, `/projects`, `/tools` y `/contact`
// solo veían el `<title>` y el `canonical` de la portada: contenido duplicado.
//
// Qué hace: por cada ruta escribe un `dist/<ruta>/index.html` con su propio title,
// description, canonical, Open Graph y JSON-LD, y con el contenido real de la página
// dentro de `#root`. React lo reemplaza al montar (`createRoot` vacía el contenedor),
// así que el usuario ve la SPA y el crawler ve HTML real. No es cloaking: el texto
// servido es el mismo que renderiza la aplicación.
//
// Se ejecuta solo tras `npm run build` (hook `postbuild`).

import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const rootDir = join(dirname(fileURLToPath(import.meta.url)), '..');
const distDir = join(rootDir, 'dist');
const siteUrl = 'https://portfoliodiana.netlify.app';

// @id compartido con el JSON-LD de vulcanoservices.dev: al coincidir el identificador,
// buscadores y motores con IA reconcilian ambas entidades en una sola.
const vulcanoId = 'https://vulcanoservices.dev/#organization';
const personId = `${siteUrl}/#diana-pinzon`;
const calendlyUrl = 'https://calendly.com/dianapinzon/30min';

const escape = (value) =>
  value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const list = (items) =>
  `<ul>${items.map((item) => `<li>${escape(item)}</li>`).join('')}</ul>`;

const section = (heading, paragraphs, items) =>
  [
    `<h2>${escape(heading)}</h2>`,
    ...paragraphs.map((text) => `<p>${escape(text)}</p>`),
    items ? list(items) : '',
  ].join('');

// Content comes from the same copy the SPA renders (src/lib/translations.ts,
// Spanish by default), so crawlers and visitors always read the same text.
// Node 24 imports the TypeScript file directly (type stripping).
const { translations } = await import('../src/lib/translations.ts');
const t = translations.es;

const routes = [
  {
    path: '/',
    title: t.pageTitles.home,
    description: t.pageDescriptions.home,
    schemaType: 'ProfilePage',
    content: [
      `<h1>${escape(`${t.hero.titleLead} ${t.hero.titleMid} ${t.hero.titleEm}`)}</h1>`,
      `<p>${escape(t.hero.intro)}</p>`,
      section(`${t.problem.title} ${t.problem.titleEm}`, t.problem.items.map((item) => `${item.title}. ${item.body}`), null),
      section(
        `${t.journey.title} ${t.journey.titleEm}`,
        [t.journey.intro],
        t.journey.steps.map((step) => `${step.title}: ${step.body}`),
      ),
      ...t.services.list.map((service) =>
        section(service.title, [service.outcome, `${t.services.idealLabel} ${service.idealFor}`], service.items),
      ),
      section(`${t.about.title} ${t.about.titleEm}`, [...t.about.paragraphs, t.about.vulcanoBody], t.about.facts),
      section(t.faq.title, t.faq.items.map((item) => `${item.q} ${item.a}`), null),
      section(
        t.contact.kicker,
        [t.contact.body],
        [
          'Correo: dianapinzon577@gmail.com',
          `Agenda una llamada de 30 minutos: ${calendlyUrl}`,
          'LinkedIn: https://linkedin.com/in/dianapinzonreyes',
          'GitHub: https://github.com/Diana020828',
          'Vulcano: https://vulcanoservices.dev',
        ],
      ),
      // Real links to both CVs: without them a crawler without JavaScript
      // never discovers the PDFs.
      '<h2>Hoja de vida</h2><ul>' +
        '<li><a href="/cv-update-esp.pdf">Diana Pinzon — hoja de vida (español, PDF)</a></li>' +
        '<li><a href="/cv-update-eng.pdf">Diana Pinzon — resume (English, PDF)</a></li>' +
        '</ul>',
    ].join(''),
  },
  {
    path: '/projects',
    title: t.pageTitles.projects,
    description: t.pageDescriptions.projects,
    schemaType: 'CollectionPage',
    content: [
      `<h1>${escape(`${t.projects.title} ${t.projects.titleEm}`)}</h1>`,
      `<p>${escape(t.projects.intro)}</p>`,
      ...[t.projects.postgres, ...t.projects.items].map((project) =>
        section(
          project.title,
          [project.subtitle, project.description, `${t.projects.toolsLabel}: ${project.tools.join(', ')}.`],
          project.results,
        ),
      ),
    ].join(''),
  },
];

// Grafo de entidades por página: Person (con la arista a Vulcano) + la página actual.
const buildJsonLd = (route) => {
  const url = route.path === '/' ? `${siteUrl}/` : `${siteUrl}${route.path}`;

  const person = {
    '@type': 'Person',
    '@id': personId,
    name: 'Diana Pinzon',
    alternateName: 'Diana Pinzón Reyes',
    jobTitle: ['Marketing Automation Specialist', 'Co-founder at Vulcano'],
    url: `${siteUrl}/`,
    email: 'dianapinzon577@gmail.com',
    description:
      'Marketing automation specialist and co-founder of Vulcano. Builds automations with n8n, Zapier, GoHighLevel and HubSpot that connect CRM, prospecting and email, plus web development, automated campaigns and conversion-focused copywriting.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tunja',
      addressRegion: 'Boyacá',
      addressCountry: 'Colombia',
    },
    knowsLanguage: ['es', 'en'],
    // Canal de contacto y agendamiento explícitos: permite que un motor de
    // respuesta conteste "cómo la contacto", no solo "quién es".
    contactPoint: [
      {
        '@type': 'ContactPoint',
        contactType: 'sales',
        email: 'dianapinzon577@gmail.com',
        url: `${siteUrl}/#contacto`,
        availableLanguage: ['Spanish', 'English'],
        areaServed: 'Worldwide (remote)',
      },
    ],
    potentialAction: [
      {
        '@type': 'CommunicateAction',
        name: 'Contact Diana Pinzon',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${siteUrl}/#contacto`,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
      },
      {
        '@type': 'ReserveAction',
        name: 'Book a free 30-minute consultation',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: calendlyUrl,
          actionPlatform: [
            'http://schema.org/DesktopWebPlatform',
            'http://schema.org/MobileWebPlatform',
          ],
        },
        result: { '@type': 'Reservation', name: '30-minute consultation call' },
      },
    ],
    worksFor: { '@id': vulcanoId },
    affiliation: [{ '@id': vulcanoId }, { '@type': 'Organization', name: 'On My Way' }],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: 'Universidad Pedagógica y Tecnológica de Colombia (UPTC)',
    },
    colleague: {
      '@type': 'Person',
      name: 'Gabriel Castillo',
      url: 'https://gabo8191.github.io/portfolio/',
    },
    sameAs: [
      'https://linkedin.com/in/dianapinzonreyes',
      'https://github.com/Diana020828',
      'https://vulcanoservices.dev',
    ],
    knowsAbout: [
      'Marketing Automation',
      'n8n',
      'Zapier',
      'GoHighLevel',
      'HubSpot',
      'Lead Generation',
      'Cold Email Outreach',
      'CRM Systems',
      'Webflow',
      'React',
      'Astro',
      'Copywriting',
      'Data Analysis',
    ],
  };

  const organization = {
    '@type': 'Organization',
    '@id': vulcanoId,
    name: 'Vulcano',
    url: 'https://vulcanoservices.dev',
    logo: 'https://vulcanoservices.dev/brand/logo-192.png',
    description:
      'Software, data and process-automation engineering studio. Custom software, data engineering, BI, RPA and systems integration.',
    sameAs: ['https://www.linkedin.com/company/vulcanoia'],
  };

  const page = {
    '@type': route.schemaType,
    '@id': `${url}#webpage`,
    url,
    name: route.title,
    description: route.description,
    inLanguage: 'es-CO',
    isPartOf: { '@type': 'WebSite', name: 'Diana Pinzon Portfolio', url: `${siteUrl}/` },
    about: { '@id': personId },
    ...(route.schemaType === 'ProfilePage' ? { mainEntity: { '@id': personId } } : {}),
    primaryImageOfPage: `${siteUrl}/og-image.png`,
  };

  const breadcrumb =
    route.path === '/'
      ? null
      : {
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Inicio', item: `${siteUrl}/` },
            { '@type': 'ListItem', position: 2, name: route.title.split(' —')[0].split(' |')[0], item: url },
          ],
        };

  return {
    '@context': 'https://schema.org',
    '@graph': [organization, person, page, ...(breadcrumb ? [breadcrumb] : [])],
  };
};

// Sustituye el contenido de una etiqueta/atributo ya presente en el HTML base.
const replaceMeta = (html, selector, value) => {
  const patterns = {
    title: [/<title>[\s\S]*?<\/title>/, `<title>${escape(value)}</title>`],
    metaTitle: [
      /<meta name="title" content="[^"]*" \/>/,
      `<meta name="title" content="${escape(value)}" />`,
    ],
    description: [
      /<meta name="description" content="[^"]*" \/>/,
      `<meta name="description" content="${escape(value)}" />`,
    ],
    canonical: [
      /<link rel="canonical" href="[^"]*" \/>/,
      `<link rel="canonical" href="${escape(value)}" />`,
    ],
    ogUrl: [
      /<meta property="og:url" content="[^"]*" \/>/,
      `<meta property="og:url" content="${escape(value)}" />`,
    ],
    ogTitle: [
      /<meta property="og:title" content="[^"]*" \/>/,
      `<meta property="og:title" content="${escape(value)}" />`,
    ],
    ogDescription: [
      /<meta property="og:description" content="[^"]*" \/>/,
      `<meta property="og:description" content="${escape(value)}" />`,
    ],
    twitterUrl: [
      /<meta name="twitter:url" content="[^"]*" \/>/,
      `<meta name="twitter:url" content="${escape(value)}" />`,
    ],
    twitterTitle: [
      /<meta name="twitter:title" content="[^"]*" \/>/,
      `<meta name="twitter:title" content="${escape(value)}" />`,
    ],
    twitterDescription: [
      /<meta name="twitter:description" content="[^"]*" \/>/,
      `<meta name="twitter:description" content="${escape(value)}" />`,
    ],
  };

  const entry = patterns[selector];
  if (!entry) throw new Error(`Selector de meta desconocido: ${selector}`);

  const [pattern, replacement] = entry;
  if (!pattern.test(html)) {
    throw new Error(
      `No se encontró "${selector}" en dist/index.html. ¿Cambió el <head> de index.html?`,
    );
  }
  return html.replace(pattern, replacement);
};

// Cada ruta es una página independiente para un crawler: si la afiliación solo
// aparece en la portada, quien lea /services o /projects no la ve.
const affiliation =
  '<hr><p>Diana Pinzon is a marketing automation specialist based in Tunja, ' +
  'Boyacá, Colombia, working remotely worldwide, and co-founder of ' +
  '<a href="https://vulcanoservices.dev">Vulcano</a>, a software, data and ' +
  'process-automation engineering studio, together with Gabriel Castillo. ' +
  'Contact: dianapinzon577@gmail.com.</p>';

const buildPage = (baseHtml, route) => {
  const url = route.path === '/' ? `${siteUrl}/` : `${siteUrl}${route.path}`;

  let html = baseHtml;
  html = replaceMeta(html, 'title', route.title);
  html = replaceMeta(html, 'metaTitle', route.title);
  html = replaceMeta(html, 'description', route.description);
  html = replaceMeta(html, 'canonical', url);
  html = replaceMeta(html, 'ogUrl', url);
  html = replaceMeta(html, 'ogTitle', route.title);
  html = replaceMeta(html, 'ogDescription', route.description);
  html = replaceMeta(html, 'twitterUrl', url);
  html = replaceMeta(html, 'twitterTitle', route.title);
  html = replaceMeta(html, 'twitterDescription', route.description);

  // Los dos JSON-LD estáticos de index.html se sustituyen por el grafo de la ruta.
  html = html.replace(
    /<script type="application\/ld\+json">[\s\S]*?<\/script>/g,
    '<!-- json-ld -->',
  );
  html = html.replace(
    '<!-- json-ld -->',
    `<script type="application/ld+json">${JSON.stringify(buildJsonLd(route))}</script>`,
  );
  html = html.replace(/\s*<!-- json-ld -->/g, '');

  // Contenido real dentro de #root. React lo reemplaza al montar (createRoot vacía
  // el contenedor), así que no hay contenido oculto ni duplicado para el usuario.
  // Colores tomados de los tokens del tema (no fijos): el script anti-flash de
  // index.html ya puso la clase `dark`/`light` en <html> antes de pintar, así que
  // este bloque hereda el tema correcto y no parpadea al montar React.
  const fallback =
    `<div id="prerendered-content" style="max-width:52rem;margin:0 auto;padding:2rem 1.25rem;` +
    `font-family:system-ui,sans-serif;line-height:1.6;` +
    `color:hsl(var(--foreground));background:hsl(var(--background))">${route.content}${affiliation}</div>`;

  if (!html.includes('<div id="root"></div>')) {
    throw new Error('No se encontró <div id="root"></div> en dist/index.html.');
  }
  return html.replace('<div id="root"></div>', `<div id="root">${fallback}</div>`);
};

const main = async () => {
  const baseHtml = await readFile(join(distDir, 'index.html'), 'utf8');

  for (const route of routes) {
    const html = buildPage(baseHtml, route);
    const outDir = route.path === '/' ? distDir : join(distDir, route.path);
    await mkdir(outDir, { recursive: true });
    await writeFile(join(outDir, 'index.html'), html, 'utf8');
    process.stdout.write(`prerender: ${route.path} -> ${join(outDir, 'index.html')}\n`);
  }
};

main().catch((error) => {
  process.stderr.write(`prerender falló: ${error.message}\n`);
  process.exitCode = 1;
});
