import { motion } from "framer-motion";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Github
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "dianapinzon577@gmail.com",
    href: "mailto:dianapinzon577@gmail.com",
    description: "Response within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+57 321 229 2995",
    href: "tel:+573212292995",
    description: "WhatsApp available"
  }
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
            💬 Let's Talk
          </motion.span>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            <span className="block">Ready to transform</span>
            <span className="block text-gradient">your business?</span>
          </h2>
          
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's start with a free consultation. Let's analyze together how automation 
            can revolutionize your processes and increase your productivity.
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
          <div className="grid md:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Methods */}
            <div className="space-y-6 sm:space-y-8">
              <h3 className="text-xl sm:text-2xl font-bold text-center md:text-left">Contact Information</h3>
              
              <div className="space-y-4 sm:space-y-6">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ y: -2 }}
                    className="block glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-card-border hover:border-primary/50 transition-all duration-300 group shadow-soft hover:shadow-medium"
                  >
                    <div className="flex items-center">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl sm:rounded-2xl mr-4 sm:mr-6 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <method.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-base sm:text-lg">{method.title}</h4>
                        <p className="text-primary hover:text-primary-glow font-medium text-sm sm:text-base">{method.value}</p>
                        <p className="text-muted-foreground text-xs sm:text-sm">{method.description}</p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Location & Social Links */}
            <div className="space-y-6 sm:space-y-8">
              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-card-border shadow-soft"
              >
                <div className="flex items-center mb-4 sm:mb-6">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary mr-3 sm:mr-4" />
                  <h4 className="font-semibold text-foreground text-base sm:text-lg">Location</h4>
                </div>
                <p className="text-muted-foreground text-sm sm:text-base mb-2">
                  Colombia 🇨🇴 | Remote work globally
                </p>
                <p className="text-xs sm:text-sm text-muted-foreground">
                  Available in EST/COT timezone
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="space-y-4 sm:space-y-6">
                <h4 className="font-semibold text-foreground text-base sm:text-lg text-center md:text-left">Follow me on social media</h4>
                <div className="grid grid-cols-1 gap-4 sm:gap-6">
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
                      className="block glass-effect rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-card-border hover:border-primary/50 transition-all duration-300 group shadow-soft hover:shadow-medium"
                    >
                      <div className="flex items-center">
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br ${social.color} rounded-xl sm:rounded-2xl mr-4 sm:mr-6 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                          <social.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground text-sm sm:text-base">{social.name}</p>
                          <p className="text-muted-foreground text-xs sm:text-sm">{social.username}</p>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}