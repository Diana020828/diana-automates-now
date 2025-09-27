import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Mail, 
  Phone, 
  Calendar, 
  Send, 
  MapPin, 
  Linkedin, 
  Github,
  MessageSquare
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "dianapinzon577@gmail.com",
    href: "mailto:dianapinzon577@gmail.com",
    description: "Respuesta en menos de 24 horas"
  },
  {
    icon: Phone,
    title: "Teléfono",
    value: "+57 321 229 2995",
    href: "tel:+573212292995",
    description: "WhatsApp disponible"
  },
  {
    icon: Calendar,
    title: "Calendly",
    value: "Agendar reunión",
    href: "#",
    description: "Consulta gratuita de 30 min"
  }
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "#",
    username: "@diana-pinzon",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: Github,
    name: "GitHub", 
    href: "#",
    username: "@dianapinzon",
    color: "from-gray-700 to-gray-900"
  }
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      toast({
        title: "¡Mensaje enviado!",
        description: "Te contactaré pronto. Gracias por tu interés.",
      });
      
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Hubo un problema enviando el mensaje. Inténtalo de nuevo.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contacto" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4 mb-16"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
          >
            💬 Hablemos
          </motion.span>
          
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="block">¿Listo para transformar</span>
            <span className="block text-gradient">tu negocio?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comencemos con una consulta gratuita. Analicemos juntos cómo la automatización 
            puede revolucionar tus procesos y aumentar tu productividad.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Información de contacto</h3>
              
              {/* Contact Methods */}
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.href}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ x: 4 }}
                    className="flex items-center p-4 glass-effect rounded-2xl border border-card-border hover:border-primary/50 transition-all group"
                  >
                    <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mr-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <method.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{method.title}</h4>
                      <p className="text-primary font-medium">{method.value}</p>
                      <p className="text-sm text-muted-foreground">{method.description}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Location */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="glass-effect rounded-2xl p-6 border border-card-border"
              >
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-primary mr-3" />
                  <h4 className="font-semibold text-foreground">Ubicación</h4>
                </div>
                <p className="text-muted-foreground">
                  Colombia 🇨🇴 | Trabajo remoto globalmente
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  Disponible en horario EST/COT
                </p>
              </motion.div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Sígueme en redes</h4>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      whileHover={{ y: -4, scale: 1.05 }}
                      className="flex items-center p-4 glass-effect rounded-xl border border-card-border hover:border-primary/50 transition-all group"
                    >
                      <div className={`flex items-center justify-center w-10 h-10 bg-gradient-to-br ${social.color} rounded-lg mr-3 text-white`}>
                        <social.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{social.name}</p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="glass-effect rounded-2xl p-8 border border-card-border"
          >
            <div className="space-y-6">
              <div className="space-y-2">
                <h3 className="text-2xl font-bold">Envíame un mensaje</h3>
                <p className="text-muted-foreground">
                  Cuéntame sobre tu proyecto y te responderé en menos de 24 horas.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                  >
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Nombre completo *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Tu nombre"
                      className="glass-effect border-card-border focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="tu@email.com"
                      className="glass-effect border-card-border focus:border-primary"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Cuéntame sobre tu proyecto, desafíos actuales y objetivos..."
                      rows={6}
                      className="glass-effect border-card-border focus:border-primary resize-none"
                    />
                  </motion.div>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="space-y-4"
                >
                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="btn-primary w-full text-lg py-4 h-auto group"
                  >
                    {isLoading ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Enviando...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Send className="w-5 h-5 mr-2" />
                        Enviar mensaje
                      </div>
                    )}
                  </Button>

                  <div className="text-center">
                    <span className="text-sm text-muted-foreground">O también puedes</span>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                      onClick={() => window.open('https://wa.me/573212292995', '_blank')}
                    >
                      <MessageSquare className="w-4 h-4 mr-2" />
                      WhatsApp
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Agendar
                    </Button>
                  </div>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}