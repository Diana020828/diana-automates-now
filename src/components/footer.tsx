import { motion } from "framer-motion";
import { Heart, Zap, Code2, Mail } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Automatización de procesos", href: "#servicios" },
    { name: "Integraciones", href: "#servicios" },
    { name: "Desarrollo low-code", href: "#servicios" },
    { name: "Consultorías", href: "#servicios" }
  ],
  recursos: [
    { name: "Casos de estudio", href: "#proyectos" },
    { name: "Mi proceso", href: "#proceso" },
    { name: "Herramientas", href: "#herramientas" },
    { name: "Contacto", href: "#contacto" }
  ]
};

const specializations = [
  "Automatización de workflows",
  "Integraciones API",
  "CRM automation", 
  "Lead generation",
  "Process optimization",
  "No-code development"
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-background border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-6"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="cursor-pointer inline-block"
              onClick={scrollToTop}
            >
              <h3 className="text-2xl font-bold text-gradient mb-2">Diana Pinzón</h3>
              <p className="text-muted-foreground">
                Especialista en Automatización Low-Code & No-Code
              </p>
            </motion.div>

            <p className="text-muted-foreground leading-relaxed max-w-md">
              Transformo procesos empresariales mediante automatización inteligente, 
              ayudando a empresas a aumentar su productividad hasta un 40% con 
              herramientas low-code y no-code.
            </p>

            {/* Specializations */}
            <div className="space-y-3">
              <p className="text-sm font-medium text-foreground">Especializaciones:</p>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <motion.span
                    key={spec}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-muted/50 text-muted-foreground px-3 py-1 rounded-full text-xs hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {spec}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Contact CTA */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="glass-effect rounded-2xl p-6 border border-card-border"
            >
              <div className="flex items-center mb-3">
                <Zap className="w-5 h-5 text-primary mr-2" />
                <h4 className="font-semibold text-foreground">¿Listo para automatizar?</h4>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Comienza con una consulta gratuita de 30 minutos
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection('#contacto')}
                className="flex items-center text-primary hover:text-primary-glow font-medium text-sm group"
              >
                <Mail className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
                Agendar consulta gratuita
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Services Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-foreground">Servicios</h4>
            <ul className="space-y-3">
              {footerLinks.servicios.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block w-full text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Resources Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <h4 className="font-semibold text-foreground">Recursos</h4>
            <ul className="space-y-3">
              {footerLinks.recursos.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm block w-full text-left"
                  >
                    {link.name}
                  </button>
                </motion.li>
              ))}
            </ul>

            {/* Quick Stats */}
            <div className="glass-effect rounded-xl p-4 border border-card-border">
              <h5 className="text-sm font-medium text-foreground mb-3">En números</h5>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Procesos automatizados</span>
                  <span className="text-primary font-semibold">50+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Aumento productividad</span>
                  <span className="text-primary font-semibold">40%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Satisfacción clientes</span>
                  <span className="text-primary font-semibold">99%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-border/50 mt-12 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-sm text-muted-foreground">
              <span>© 2024 Diana Pinzón. Hecho con</span>
              <Heart className="w-4 h-4 mx-1 text-red-500 animate-pulse" />
              <span>y</span>
              <Code2 className="w-4 h-4 mx-1 text-primary" />
              <span>en Colombia 🇨🇴</span>
            </div>

            {/* Back to top */}
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToTop}
              className="glass-effect px-4 py-2 rounded-lg border border-card-border hover:border-primary/50 transition-colors text-sm text-muted-foreground hover:text-primary group"
            >
              <span className="group-hover:-translate-y-1 transition-transform inline-block">⬆</span>
              <span className="ml-2">Volver arriba</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating elements */}
        <motion.div
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, -5, 0]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-8 right-8 opacity-20 pointer-events-none hidden lg:block"
        >
          <div className="text-6xl">⚡</div>
        </motion.div>

        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, -3, 3, 0]
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-16 left-8 opacity-20 pointer-events-none hidden lg:block"
        >
          <div className="text-4xl">🚀</div>
        </motion.div>
      </div>
    </footer>
  );
}