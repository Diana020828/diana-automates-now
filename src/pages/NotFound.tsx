import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { useLanguage } from "@/contexts/LanguageContext";

const NotFound = () => {
  const location = useLocation();
  const { t } = useLanguage();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="shell flex min-h-[70vh] flex-col items-start justify-center pt-32 pb-20">
        <p className="kicker">404</p>
        <h1 className="mt-5 text-[clamp(2.7rem,6.5vw,5rem)] font-medium leading-[1]">
          {t.notFound.title} <span className="ink-em">{t.notFound.titleEm}</span>
        </h1>
        <p className="mt-6 max-w-lg text-lg text-plum-soft">
          {t.notFound.body}
        </p>
        <Link to="/" className="btn-clay mt-9">
          {t.notFound.cta}
        </Link>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
