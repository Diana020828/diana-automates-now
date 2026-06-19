export type Language = 'en' | 'es';

export const translations = {
  en: {
    // Document titles per route
    pageTitles: {
      home: "Diana Pinzon — Marketing Automation Specialist",
      services: "Services — Marketing Automation & Growth | Diana Pinzon",
      projects: "Projects — Automation & Web | Diana Pinzon",
      tools: "Tools & Tech Stack | Diana Pinzon",
      contact: "Contact | Diana Pinzon"
    },
    // Hero Section
    hero: {
      badge: "🤖 Marketing Automation • 🌐 Web Development • ✍️ Content & Copywriting",
      title: "Marketing automation specialist",
      description: "I design, build and maintain marketing and sales automations with n8n, Zapier and GoHighLevel that connect CRM, prospecting and email. I complement the operation with web development (React, Astro, Webflow), automated campaigns and conversion-focused copywriting. My background in psychology and quantitative data analysis lets me make evidence-based decisions that move real metrics.",
      viewProjects: "View Projects",
      downloadCV: "Download CV",
      stats: {
        frontend: "Web Development",
        automation: "Marketing Automation",
        content: "Content & Copywriting"
      }
    },
    // Services
    services: {
      badge: "Services",
      title: "Marketing Automation & Growth Services",
      subtitle: "I build automation workflows, lead-generation systems, websites and content strategies that eliminate manual work, keep sales and marketing aligned, and turn attention into measurable conversions.",
      automation: {
        title: "Marketing & Sales Automation",
        description: "I design and document end-to-end automations with n8n, Zapier, GoHighLevel and HubSpot—CRM pipelines, follow-ups, WhatsApp conversation flows and touchpoints—so sales and marketing stay aligned, consistent and reproducible at scale. At CFOPro LLC I ran marketing campaigns primarily on HubSpot, turning its CRM into a conversion engine with behavior-based nurturing and Zapier syncing the whole stack with zero manual work.",
        items: [
          "n8n, Zapier, GoHighLevel and HubSpot workflow design",
          "HubSpot marketing campaigns and behavior-based nurturing",
          "CRM pipelines, follow-ups and WhatsApp conversation flows",
          "Manual process elimination and operational efficiency"
        ]
      },
      ai: {
        title: "Lead Generation & Cold Outreach",
        description: "I build and run systematic prospecting: smart segmentation, personalized sequences and AI-assisted content across LinkedIn and cold email to generate qualified leads and improve response rates.",
        items: [
          "Prospecting with Apollo and LinkedIn Sales Navigator",
          "Cold email with SalesHandy and Instantly",
          "Smart segmentation and personalized sequences",
          "AI-assisted content and copy optimization"
        ]
      },
      integration: {
        title: "Web Development & Landing Pages",
        description: "I develop and tune marketing sites and internal apps with React, Astro, Vite and Webflow—structure, forms, tracking and dashboards—built for campaigns, funnels and conversion.",
        items: [
          "Marketing pages and funnels in Webflow",
          "Internal apps and dashboards with React, Astro and Vite",
          "Forms, lead capture and event tracking",
          "Responsive, fast and conversion-oriented design"
        ]
      },
      strategy: {
        title: "Content, Copywriting & Personal Branding",
        description: "I develop content and personal-branding strategies for tech professionals, with automated content flows, newsletters and consumer-psychology-driven messaging that increases engagement and conversion.",
        items: [
          "Personal branding and thought-leadership positioning",
          "Automated newsletters and email marketing",
          "Consumer-psychology-driven, data-informed messaging",
          "Coherent brand voice across channels"
        ]
      },
      cta: {
        button: "Book a free consultation",
        text: "Let's discuss how automation, lead generation and content can transform your marketing and sales operations."
      }
    },
    // Projects
    projects: {
      title: "Projects that",
      titleGradient: "transform businesses",
      subtitle: "Use arrow keys or drag to navigate. Each project showcases real solutions.",
      description: "Explore some of my featured projects, where I combine automation, technology and real results to solve problems and deliver value.",
      more: "more results",
      toolsLabel: "Tools used",
      resultsLabel: "Results achieved",
      viewWebsite: "View website",
      viewCode: "View code",
      linkedin: {
        title: "LinkedIn Content Creation System",
        subtitle: "AI-powered content strategy",
        description: "Automated content creation system for LinkedIn that generates engaging posts, carousels, and visual content using AI. Includes content calendar automation, performance tracking, and A/B testing for optimal engagement rates.",
        tools: ["OpenAI API", "Canva API", "LinkedIn API", "Content Strategy", "Automation"],
        results: [
          "300% increase in engagement rates",
          "Automated content calendar",
          "Consistent brand voice",
          "Time savings of 15+ hours/week"
        ]
      },
      portfolio: {
        title: "Modern Portfolio Website",
        subtitle: "React & TypeScript development",
        description: "Fully responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, SEO optimization, and modern UI/UX design. Deployed with automated CI/CD pipeline.",
        tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
        results: [
          "100% responsive design",
          "Perfect SEO score",
          "Automated deployment",
          "Fast load times (<2s)"
        ],
        link: "https://cfopro.github.io/portfoliocfopro/"
      },
      whatsapp: {
        title: "WhatsApp Customer Service Bot",
        subtitle: "Intelligent automation system",
        description: "Complete automated customer service solution for WhatsApp using EvolutionAPI, self-hosted N8N, Redis, and OpenAI. Handles conversations 24/7, transcribes voice notes, and provides intelligent responses with seamless human handoff.",
        tools: ["N8N", "Docker", "Redis", "EvolutionAPI", "OpenAI API"],
        results: [
          "24/7 automated customer service",
          "Voice note transcription",
          "Intelligent AI responses",
          "Zero WhatsApp Business costs"
        ]
      },
      cv: {
        title: "AI-Powered CV Builder",
        subtitle: "ATS-optimized resume generator",
        description: "Web application that collects user information and generates ATS-compatible CVs with AI-powered text optimization. Automatically improves copy, optimizes keywords, and formats resumes to pass recruitment filters.",
        tools: ["OpenAI API", "React", "TypeScript", "PDF Generation", "ATS Optimization"],
        results: [
          "ATS-compatible format",
          "AI-powered copy improvement",
          "Professional PDF generation",
          "Keyword optimization for filters"
        ],
        link: "https://github.com/Diana020828/word-craft-pro"
      },
      dashboard: {
        title: "OMW Operations Dashboard",
        subtitle: "Cost & client visibility from GoHighLevel via n8n",
        description: "Operations dashboard built for On My Way (OMW) that gives the company real visibility over costs, clients, appointments and the sales pipeline. n8n pulls and consolidates the GoHighLevel (GHL) CRM data, enabling end-to-end product traceability and decisions backed by real metrics. Screenshots use dummy data to protect the company's information.",
        tools: ["n8n", "GoHighLevel", "React", "Data Visualization", "REST API"],
        results: [
          "Cost and client visibility in one place",
          "End-to-end product traceability",
          "Automated GHL data sync with n8n",
          "Filters by period, vendor and ad tag"
        ]
      }
    },
    // Contact
    contact: {
      badge: "💬 Let's Talk",
      title: "Contact me and let's see",
      titleGradient: "how we can work together",
      description: "Ready to scale your marketing and sales? Whether it's an automation workflow, a lead-generation system, a website or a content strategy, let's discuss how I can help transform your operations.",
      email: {
        title: "Email",
        description: "Response within 24 hours"
      },
      phone: {
        title: "Phone",
        description: "WhatsApp available"
      },
      locationTitle: "Location",
      location: "Colombia 🇨🇴 | Remote work globally",
      timezone: "Available in EST/COT timezone",
      social: "Follow me on social media"
    },
    // Footer
    footer: {
      title: "Diana Pinzon",
      subtitle: "Marketing Automation Specialist • Web Developer • Content Strategist",
      description: "I build marketing and sales automations with n8n, Zapier and GoHighLevel, develop websites with React, Astro and Webflow, and craft content strategies for LinkedIn, newsletters and cold email campaigns.",
      copyright: "© 2026 Diana Pinzon. All rights reserved."
    },
    // Tools Section
    toolsSection: {
      badge: "🔧 Tech Stack",
      title: "Tools I",
      titleGradient: "Master Perfectly",
      description: "I work with the best automation, marketing and development platforms to create robust, scalable and easy-to-maintain solutions.",
      categories: {
        all: "All",
        automation: "Automation",
        development: "Development",
        integration: "Integration",
        productivity: "Productivity"
      },
      stats: [
        { label: "Tools Mastered", value: "12+", desc: "Specialized platforms" },
        { label: "Years Experience", value: "2+", desc: "Professional expertise" }
      ],
      cta: {
        text: "Don't see the tool you need? Don't worry, I'm always learning new technologies to offer the best solutions.",
        button: "Let's talk about your tech stack"
      }
    },
    // Navigation
    nav: {
      home: "Home",
      services: "Services",
      projects: "Projects",
      tools: "Tools",
      contact: "Contact"
    }
  },
  es: {
    // Títulos del documento por ruta
    pageTitles: {
      home: "Diana Pinzon — Especialista en Automatización de Marketing",
      services: "Servicios — Automatización de Marketing y Crecimiento | Diana Pinzon",
      projects: "Proyectos — Automatización y Web | Diana Pinzon",
      tools: "Herramientas y Stack Tecnológico | Diana Pinzon",
      contact: "Contacto | Diana Pinzon"
    },
    // Hero Section
    hero: {
      badge: "🤖 Automatización de Marketing • 🌐 Desarrollo Web • ✍️ Contenido y Copywriting",
      title: "Especialista en automatización de marketing",
      description: "Diseño, construyo y mantengo automatizaciones de marketing y ventas con n8n, Zapier y GoHighLevel que conectan CRM, prospección y correo. Complemento la operación con desarrollo web (React, Astro, Webflow), campañas automatizadas y copywriting orientado a conversión. Mi formación en psicología y análisis cuantitativo de datos me permite tomar decisiones basadas en evidencia que mueven métricas reales.",
      viewProjects: "Ver Proyectos",
      downloadCV: "Descargar CV",
      stats: {
        frontend: "Desarrollo Web",
        automation: "Automatización de Marketing",
        content: "Contenido y Copywriting"
      }
    },
    // Services
    services: {
      badge: "Servicios",
      title: "Servicios de Automatización de Marketing y Crecimiento",
      subtitle: "Construyo flujos de automatización, sistemas de generación de leads, sitios web y estrategias de contenido que eliminan el trabajo manual, mantienen alineados a ventas y marketing, y convierten la atención en conversiones medibles.",
      automation: {
        title: "Automatización de Marketing y Ventas",
        description: "Diseño y documento automatizaciones de extremo a extremo con n8n, Zapier, GoHighLevel y HubSpot—pipelines de CRM, seguimientos, flujos de conversación en WhatsApp y puntos de contacto—para que ventas y marketing permanezcan alineados, consistentes y reproducibles a escala. En CFOPro LLC ejecuté campañas de marketing principalmente con HubSpot, convirtiendo su CRM en un motor de conversión con nurturing según el comportamiento del lead y Zapier sincronizando todo el stack sin trabajo manual.",
        items: [
          "Diseño de flujos con n8n, Zapier, GoHighLevel y HubSpot",
          "Campañas de marketing y nurturing por comportamiento en HubSpot",
          "Pipelines de CRM, seguimientos y flujos de conversación en WhatsApp",
          "Eliminación de procesos manuales y eficiencia operativa"
        ]
      },
      ai: {
        title: "Generación de Leads y Prospección en Frío",
        description: "Construyo y opero prospección sistemática: segmentación inteligente, secuencias personalizadas y contenido con apoyo de IA en LinkedIn y correo en frío para generar leads calificados y mejorar las tasas de respuesta.",
        items: [
          "Prospección con Apollo y LinkedIn Sales Navigator",
          "Correo en frío con SalesHandy e Instantly",
          "Segmentación inteligente y secuencias personalizadas",
          "Contenido y optimización de copy con apoyo de IA"
        ]
      },
      integration: {
        title: "Desarrollo Web y Landing Pages",
        description: "Desarrollo y ajusto sitios de marketing y aplicaciones internas con React, Astro, Vite y Webflow—estructura, formularios, seguimiento y paneles—pensados para campañas, embudos y conversión.",
        items: [
          "Páginas de marketing y embudos en Webflow",
          "Aplicaciones internas y paneles con React, Astro y Vite",
          "Formularios, captura de leads y seguimiento de eventos",
          "Diseño responsivo, rápido y orientado a conversión"
        ]
      },
      strategy: {
        title: "Contenido, Copywriting y Marca Personal",
        description: "Desarrollo estrategias de contenido y marca personal para profesionales del sector tecnológico, con flujos de contenido automatizados, newsletters y mensajería basada en psicología del consumidor que aumenta la participación y la conversión.",
        items: [
          "Marca personal y posicionamiento de liderazgo intelectual",
          "Newsletters automatizados y email marketing",
          "Mensajería basada en psicología del consumidor y datos",
          "Voz de marca coherente en todos los canales"
        ]
      },
      cta: {
        button: "Agendar consulta gratuita",
        text: "Hablemos de cómo la automatización, la generación de leads y el contenido pueden transformar tus operaciones de marketing y ventas."
      }
    },
    // Projects
    projects: {
      title: "Proyectos que",
      titleGradient: "transforman negocios",
      subtitle: "Usa las flechas del teclado o arrastra para navegar. Cada proyecto muestra soluciones reales.",
      description: "Explora algunos de mis proyectos destacados, donde combino automatización, tecnología y resultados reales para resolver problemas y aportar valor.",
      more: "resultados más",
      toolsLabel: "Herramientas utilizadas",
      resultsLabel: "Resultados alcanzados",
      viewWebsite: "Ver sitio web",
      viewCode: "Ver código",
      linkedin: {
        title: "Sistema de Creación de Contenido para LinkedIn",
        subtitle: "Estrategia de contenido con IA",
        description: "Sistema automatizado de creación de contenido para LinkedIn que genera publicaciones atractivas, carruseles y contenido visual usando IA. Incluye automatización de calendario de contenido, seguimiento de rendimiento y pruebas A/B para tasas de engagement óptimas.",
        tools: ["OpenAI API", "Canva API", "LinkedIn API", "Estrategia de Contenido", "Automatización"],
        results: [
          "300% de aumento en tasas de engagement",
          "Calendario de contenido automatizado",
          "Voz de marca consistente",
          "Ahorro de tiempo de 15+ horas/semana"
        ]
      },
      portfolio: {
        title: "Sitio Web Portfolio Moderno",
        subtitle: "Desarrollo con React y TypeScript",
        description: "Sitio web portfolio completamente responsivo construido con React, TypeScript y Tailwind CSS. Incluye animaciones suaves, optimización SEO y diseño UI/UX moderno. Desplegado con pipeline CI/CD automatizado.",
        tools: ["React", "TypeScript", "Tailwind CSS", "Vite", "GitHub Pages"],
        results: [
          "Diseño 100% responsivo",
          "Puntuación SEO perfecta",
          "Despliegue automatizado",
          "Tiempos de carga rápidos (<2s)"
        ],
        link: "https://cfopro.github.io/portfoliocfopro/"
      },
      whatsapp: {
        title: "Bot de Atención al Cliente para WhatsApp",
        subtitle: "Sistema de automatización inteligente",
        description: "Solución completa automatizada de atención al cliente para WhatsApp usando EvolutionAPI, N8N auto-hospedado, Redis y OpenAI. Maneja conversaciones 24/7, transcribe notas de voz y proporciona respuestas inteligentes con transferencia fluida a humanos.",
        tools: ["N8N", "Docker", "Redis", "EvolutionAPI", "OpenAI API"],
        results: [
          "Atención al cliente automatizada 24/7",
          "Transcripción de notas de voz",
          "Respuestas inteligentes con IA",
          "Cero costos de WhatsApp Business"
        ]
      },
      cv: {
        title: "Generador de CV con IA",
        subtitle: "Generador de CVs optimizados para ATS",
        description: "Aplicación web que recopila información del usuario y genera CVs compatibles con ATS con optimización de texto impulsada por IA. Mejora automáticamente el copy, optimiza palabras clave y formatea CVs para pasar filtros de reclutamiento.",
        tools: ["OpenAI API", "React", "TypeScript", "Generación de PDF", "Optimización ATS"],
        results: [
          "Formato compatible con ATS",
          "Mejora de copy impulsada por IA",
          "Generación profesional de PDF",
          "Optimización de palabras clave para filtros"
        ],
        link: "https://github.com/Diana020828/word-craft-pro"
      },
      dashboard: {
        title: "Dashboard de Operaciones OMW",
        subtitle: "Visibilidad de costes y clientes desde GoHighLevel vía n8n",
        description: "Dashboard de operaciones construido para On My Way (OMW) que le da a la empresa visibilidad real sobre costes, clientes, citas y el pipeline de ventas. n8n extrae y consolida los datos del CRM GoHighLevel (GHL), habilitando trazabilidad de productos de extremo a extremo y decisiones respaldadas por métricas reales. Los pantallazos usan datos dummy para proteger la información de la empresa.",
        tools: ["n8n", "GoHighLevel", "React", "Visualización de datos", "API REST"],
        results: [
          "Visibilidad de costes y clientes en un solo lugar",
          "Trazabilidad de productos de extremo a extremo",
          "Sincronización automática de datos de GHL con n8n",
          "Filtros por periodo, vendedor y tag de anuncio"
        ]
      }
    },
    // Contact
    contact: {
      badge: "💬 Hablemos",
      title: "Contáctame y veamos",
      titleGradient: "cómo podemos trabajar juntos",
      description: "¿Listo para escalar tu marketing y tus ventas? Ya sea un flujo de automatización, un sistema de generación de leads, un sitio web o una estrategia de contenido, hablemos de cómo puedo ayudar a transformar tus operaciones.",
      email: {
        title: "Email",
        description: "Respuesta en 24 horas"
      },
      phone: {
        title: "Teléfono",
        description: "WhatsApp disponible"
      },
      locationTitle: "Ubicación",
      location: "Colombia 🇨🇴 | Trabajo remoto globalmente",
      timezone: "Disponible en zona horaria EST/COT",
      social: "Sígueme en redes sociales"
    },
    // Footer
    footer: {
      title: "Diana Pinzon",
      subtitle: "Especialista en Automatización de Marketing • Desarrolladora Web • Estratega de Contenido",
      description: "Construyo automatizaciones de marketing y ventas con n8n, Zapier y GoHighLevel, desarrollo sitios web con React, Astro y Webflow, y creo estrategias de contenido para LinkedIn, newsletters y campañas de correo en frío.",
      copyright: "© 2026 Diana Pinzon. Todos los derechos reservados."
    },
    // Tools Section
    toolsSection: {
      badge: "🔧 Stack Tecnológico",
      title: "Herramientas que",
      titleGradient: "domino a la perfección",
      description: "Trabajo con las mejores plataformas de automatización, marketing y desarrollo para crear soluciones robustas, escalables y fáciles de mantener.",
      categories: {
        all: "Todas",
        automation: "Automatización",
        development: "Desarrollo",
        integration: "Integración",
        productivity: "Productividad"
      },
      stats: [
        { label: "Herramientas dominadas", value: "12+", desc: "Plataformas especializadas" },
        { label: "Años de experiencia", value: "2+", desc: "Experiencia profesional" }
      ],
      cta: {
        text: "¿No ves la herramienta que necesitas? No te preocupes, siempre estoy aprendiendo nuevas tecnologías para ofrecer las mejores soluciones.",
        button: "Hablemos de tu stack tecnológico"
      }
    },
    // Navigation
    nav: {
      home: "Inicio",
      services: "Servicios",
      projects: "Proyectos",
      tools: "Herramientas",
      contact: "Contacto"
    }
  }
};
