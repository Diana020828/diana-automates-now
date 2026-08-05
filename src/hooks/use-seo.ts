import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { usePageTitle } from "@/hooks/use-page-title";

const siteUrl = "https://portfoliodiana.netlify.app";

type SeoOptions = {
  title: string;
  description: string;
};

// Actualiza el <head> en las navegaciones de cliente. El HTML servido ya viene
// prerenderizado por ruta (scripts/prerender.mjs); esto mantiene coherentes
// title, description, canonical y Open Graph cuando el usuario —o un crawler que
// sí ejecuta JavaScript— navega dentro de la SPA.
export function useSeo({ title, description }: SeoOptions) {
  const { pathname } = useLocation();
  usePageTitle(title);

  useEffect(() => {
    const canonicalUrl = `${siteUrl}${pathname === "/" ? "/" : pathname}`;

    const setMeta = (selector: string, value: string) => {
      const element = document.head.querySelector<HTMLMetaElement>(selector);
      if (element) element.content = value;
    };

    setMeta('meta[name="title"]', title);
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[property="og:url"]', canonicalUrl);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[name="twitter:url"]', canonicalUrl);

    const canonical = document.head.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]',
    );
    if (canonical) canonical.href = canonicalUrl;
  }, [title, description, pathname]);
}
