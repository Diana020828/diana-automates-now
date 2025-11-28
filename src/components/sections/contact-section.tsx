import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github
} from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const contactMethods = [
  {
    icon: Mail,
    titleKey: "email" as const,
    value: "dianapinzon577@gmail.com",
    href: "mailto:dianapinzon577@gmail.com",
  },
  // Teléfono eliminado por privacidad
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/dianapinzonreyes",
    username: "@dianapinzonreyes",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/Diana020828",
    username: "@Diana020828",
    color: "from-gray-700 to-gray-900"
  }
];

export function ContactSection() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-12 sm:mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-3 py-1.5 sm:px-4 sm:py-2 bg-accent/15 text-accent rounded-full text-xs sm:text-sm font-medium border border-accent/30 shadow-soft"
          >
            {t.contact.badge}
          </motion.span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="block">{t.contact.title}</span>
            <span className="block text-gradient">{t.contact.titleGradient}</span>
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.contact.description}
          </p>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {/* Contact Methods */}
            {contactMethods.map((method, index) => (
              <motion.a
                key={method.titleKey}
                href={method.href}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -2 }}
                className="flex flex-col justify-between items-center glass-effect rounded-2xl p-6 border border-card-border hover:border-primary/50 transition-all duration-300 group shadow-soft hover:shadow-medium min-h-[220px]"
              >
                <div className="flex items-center mb-4">
                  <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <method.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center text-center">
                  <h4 className="font-semibold text-foreground text-lg mb-1">{t.contact[method.titleKey].title}</h4>
                  <p className="text-primary hover:text-primary-glow font-medium text-base mb-1">{method.value}</p>
                  <p className="text-muted-foreground text-sm">{t.contact[method.titleKey].description}</p>
                </div>
              </motion.a>
            ))}

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col justify-between items-center glass-effect rounded-2xl p-6 border border-card-border shadow-soft min-h-[220px]"
            >
              <div className="flex items-center mb-4">
                <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center">
                  <MapPin className="w-7 h-7 text-primary" />
                </div>
              </div>
              <div className="flex-1 flex flex-col items-center justify-center text-center">
                <h4 className="font-semibold text-foreground text-lg mb-1">Location</h4>
                <p className="text-muted-foreground text-base mb-1">{t.contact.location}</p>
                <p className="text-sm text-muted-foreground">{t.contact.timezone}</p>
              </div>
            </motion.div>

            {/* Social Links */}
            <div className="flex flex-col gap-6">
              <h4 className="font-semibold text-foreground text-lg text-center mb-2">{t.contact.social}</h4>
              <div className="flex flex-col gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center glass-effect rounded-2xl p-4 border border-card-border hover:border-primary/50 transition-all duration-300 group shadow-soft hover:shadow-medium"
                  >
                    <div className={`w-12 h-12 bg-gradient-to-br ${social.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform mr-4`}>
                      <social.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-foreground text-base">{social.name}</p>
                      <p className="text-muted-foreground text-sm">{social.username}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
