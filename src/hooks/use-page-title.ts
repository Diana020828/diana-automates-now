import { useEffect } from "react";

// Actualiza el <title> del documento por ruta (SPA sin SSR)
export function usePageTitle(title: string) {
  useEffect(() => {
    const previous = document.title;
    document.title = title;
    return () => {
      document.title = previous;
    };
  }, [title]);
}
