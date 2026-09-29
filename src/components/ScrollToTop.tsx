import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// On route changes, go to the top, or to the section named in the hash
// (/#servicios from the cases page). The target renders after the route
// swap, so the lookup waits one frame.
export function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }
    const frame = window.requestAnimationFrame(() => {
      document.getElementById(decodeURIComponent(hash.slice(1)))?.scrollIntoView({ block: "start" });
    });
    return () => window.cancelAnimationFrame(frame);
  }, [pathname, hash]);

  return null;
}
