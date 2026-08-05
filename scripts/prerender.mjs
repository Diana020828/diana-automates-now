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

const routes = [
  {
    path: '/',
    title: 'Diana Pinzon — Marketing Automation Specialist & Co-founder of Vulcano',
    description:
      'Diana Pinzon is a marketing automation specialist from Colombia and co-founder of Vulcano. She builds automations with n8n, Zapier, GoHighLevel and HubSpot that connect CRM, prospecting and email, plus web development (React, Astro, Webflow), automated campaigns and conversion-focused copywriting.',
    schemaType: 'ProfilePage',
    content: [
      '<h1>Diana Pinzon — Marketing Automation Specialist</h1>',
      '<p>I design, build and maintain marketing and sales automations with n8n, Zapier and GoHighLevel that connect CRM, prospecting and email. I complement the operation with web development (React, Astro, Webflow), automated campaigns and conversion-focused copywriting. My background in psychology and quantitative data analysis lets me make evidence-based decisions that move real metrics.</p>',
      section(
        'Co-founder at Vulcano',
        [
          'I co-founded Vulcano (https://vulcanoservices.dev) with Gabriel Castillo, a software, data and process-automation engineering studio. I lead automation and growth: workflow design, lead generation, CRM operations and content strategy. Vulcano serves companies across LATAM, Spain, the United States and the United Kingdom, in Spanish and English.',
        ],
        null,
      ),
      section(
        'What I do',
        [],
        [
          'Marketing and sales automation with n8n, Zapier, GoHighLevel and HubSpot',
          'Lead generation and cold outreach with Apollo, LinkedIn Sales Navigator, SalesHandy and Instantly',
          'Web development and landing pages with React, Astro, Vite and Webflow',
          'Content, copywriting and personal branding for tech professionals',
        ],
      ),
      section(
        'Contact',
        [
          'Based in Tunja, Boyacá, Colombia. Remote work globally, EST/COT timezone. Email: dianapinzon577@gmail.com.',
        ],
        null,
      ),
      // Enlaces reales a los CV: sin esto los PDF quedan fuera del HTML que ve
      // un crawler sin JavaScript y no se descubren.
      '<h2>Resume</h2><ul>' +
        '<li><a href="/cv-update-eng.pdf">Diana Pinzon — resume (English, PDF)</a></li>' +
        '<li><a href="/cv-update-esp.pdf">Diana Pinzon — hoja de vida (español, PDF)</a></li>' +
        '</ul>',
    ].join(''),
  },
  {
    path: '/services',
    title: 'Services — Marketing Automation & Growth | Diana Pinzon',
    description:
      'Marketing and sales automation with n8n, Zapier, GoHighLevel and HubSpot; lead generation and cold outreach; web development and landing pages; content, copywriting and personal branding.',
    schemaType: 'CollectionPage',
    content: [
      '<h1>Marketing Automation &amp; Growth Services</h1>',
      '<p>I build automation workflows, lead-generation systems, websites and content strategies that eliminate manual work, keep sales and marketing aligned, and turn attention into measurable conversions.</p>',
      section(
        'Marketing & Sales Automation',
        [
          'I design and document end-to-end automations with n8n, Zapier, GoHighLevel and HubSpot — CRM pipelines, follow-ups, WhatsApp conversation flows and touchpoints — so sales and marketing stay aligned, consistent and reproducible at scale.',
        ],
        [
          'n8n, Zapier, GoHighLevel and HubSpot workflow design',
          'HubSpot marketing campaigns and behavior-based nurturing',
          'CRM pipelines, follow-ups and WhatsApp conversation flows',
          'Manual process elimination and operational efficiency',
        ],
      ),
      section(
        'Lead Generation & Cold Outreach',
        [
          'I build and run systematic prospecting: smart segmentation, personalized sequences and AI-assisted content across LinkedIn and cold email to generate qualified leads and improve response rates.',
        ],
        [
          'Prospecting with Apollo and LinkedIn Sales Navigator',
          'Cold email with SalesHandy and Instantly',
          'Smart segmentation and personalized sequences',
          'AI-assisted content and copy optimization',
        ],
      ),
      section(
        'Web Development & Landing Pages',
        [
          'I develop and tune marketing sites and internal apps with React, Astro, Vite and Webflow — structure, forms, tracking and dashboards — built for campaigns, funnels and conversion.',
        ],
        [
          'Marketing pages and funnels in Webflow',
          'Internal apps and dashboards with React, Astro and Vite',
          'Forms, lead capture and event tracking',
          'Responsive, fast and conversion-oriented design',
        ],
      ),
      section(
        'Content, Copywriting & Personal Branding',
        [
          'I develop content and personal-branding strategies for tech professionals, with automated content flows, newsletters and consumer-psychology-driven messaging that increases engagement and conversion.',
        ],
        [
          'Personal branding and thought-leadership positioning',
          'Automated newsletters and email marketing',
          'Consumer-psychology-driven, data-informed messaging',
          'Coherent brand voice across channels',
        ],
      ),
    ].join(''),
  },
  {
    path: '/projects',
    title: 'Projects — Automation & Web | Diana Pinzon',
    description:
      'Featured projects: an operations dashboard fed from GoHighLevel with n8n, a WhatsApp customer-service bot, a LinkedIn content system, an AI-powered CV builder and a modern portfolio website.',
    schemaType: 'CollectionPage',
    content: [
      '<h1>Projects that transform businesses</h1>',
      '<p>Explore some of my featured projects, where I combine automation, technology and real results to solve problems and deliver value.</p>',
      section(
        'OMW Operations Dashboard',
        [
          'Operations dashboard built for On My Way (OMW) that gives the company real visibility over costs, clients, appointments and the sales pipeline. n8n pulls and consolidates the GoHighLevel (GHL) CRM data, enabling end-to-end product traceability and decisions backed by real metrics.',
          'Tools: n8n, GoHighLevel, React, data visualization, REST API.',
        ],
        [
          'Cost and client visibility in one place',
          'End-to-end product traceability',
          'Automated GHL data sync with n8n',
          'Filters by period, vendor and ad tag',
        ],
      ),
      section(
        'WhatsApp Customer Service Bot',
        [
          'Complete automated customer service solution for WhatsApp using EvolutionAPI, self-hosted n8n, Redis and OpenAI. Handles conversations 24/7, transcribes voice notes and provides intelligent responses with seamless human handoff.',
          'Tools: n8n, Docker, Redis, EvolutionAPI, OpenAI API.',
        ],
        [
          '24/7 automated customer service',
          'Voice note transcription',
          'Intelligent AI responses',
          'Zero WhatsApp Business costs',
        ],
      ),
      section(
        'LinkedIn Content Creation System',
        [
          'Automated content creation system for LinkedIn that generates posts, carousels and visual content using AI. Includes content calendar automation, performance tracking and A/B testing for optimal engagement rates.',
          'Tools: OpenAI API, Canva API, LinkedIn API, content strategy, automation.',
        ],
        [
          '300% increase in engagement rates',
          'Automated content calendar',
          'Consistent brand voice',
          'Time savings of 15+ hours per week',
        ],
      ),
      section(
        'AI-Powered CV Builder',
        [
          'Web application that collects user information and generates ATS-compatible CVs with AI-powered text optimization. Automatically improves copy, optimizes keywords and formats resumes to pass recruitment filters.',
          'Tools: OpenAI API, React, TypeScript, PDF generation, ATS optimization. Code: https://github.com/Diana020828/word-craft-pro',
        ],
        null,
      ),
      section(
        'Modern Portfolio Website',
        [
          'Fully responsive portfolio website built with React, TypeScript and Tailwind CSS. Features smooth animations, SEO optimization and modern UI/UX design, deployed with an automated CI/CD pipeline.',
          'Tools: React, TypeScript, Tailwind CSS, Vite, GitHub Pages.',
        ],
        null,
      ),
    ].join(''),
  },
  {
    path: '/tools',
    title: 'Tools & Tech Stack | Diana Pinzon',
    description:
      'Automation, marketing and development platforms I work with: n8n, Zapier, GoHighLevel, HubSpot, Apollo, SalesHandy, Instantly, React, Astro, Vite, Webflow, Docker, Redis and the OpenAI API.',
    schemaType: 'CollectionPage',
    content: [
      '<h1>Tools I master</h1>',
      '<p>I work with the best automation, marketing and development platforms to create robust, scalable and easy-to-maintain solutions.</p>',
      section(
        'Automation and CRM',
        [],
        ['n8n', 'Zapier', 'GoHighLevel', 'HubSpot', 'EvolutionAPI', 'Redis', 'Docker'],
      ),
      section(
        'Lead generation and outreach',
        [],
        [
          'Apollo',
          'LinkedIn Sales Navigator',
          'SalesHandy',
          'Instantly',
          'OpenAI API',
        ],
      ),
      section(
        'Development and web',
        [],
        ['React', 'TypeScript', 'Astro', 'Vite', 'Tailwind CSS', 'Webflow'],
      ),
    ].join(''),
  },
  {
    path: '/contact',
    title: 'Contact | Diana Pinzon',
    description:
      'Get in touch with Diana Pinzon for marketing automation, lead generation, web development or content strategy. Based in Colombia, working remotely worldwide in the EST/COT timezone.',
    schemaType: 'ContactPage',
    content: [
      '<h1>Contact</h1>',
      '<p>Ready to scale your marketing and sales? Whether it is an automation workflow, a lead-generation system, a website or a content strategy, let us discuss how I can help transform your operations.</p>',
      section(
        'How to reach me',
        [],
        [
          'Email: dianapinzon577@gmail.com — response within 24 hours',
          `Book a free 30-minute call: ${calendlyUrl}`,
          'LinkedIn: https://linkedin.com/in/dianapinzonreyes',
          'GitHub: https://github.com/Diana020828',
          'Vulcano (studio I co-founded): https://vulcanoservices.dev',
        ],
      ),
      section(
        'Location and availability',
        [
          'Colombia. Remote work globally, available in the EST/COT timezone, in Spanish and English.',
        ],
        null,
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
        url: `${siteUrl}/contact`,
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
          urlTemplate: `${siteUrl}/contact`,
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
    inLanguage: 'en-US',
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
            { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
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
