import React from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/images/logo.png";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      { name: "Business Software", href: "#services" },
      { name: "Capstone Projects", href: "#services" },
      { name: "Custom Web Apps", href: "#services" },
      { name: "Custom Systems", href: "#services" }
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Our Team", href: "#about" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Contact", href: "#contact" }
    ],
    support: [
      { name: "Documentation", href: "#" },
      { name: "Help Center", href: "#" },
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" }
    ]
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com", label: "Twitter" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-max">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="flex items-center mb-6"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src={logo} 
                  alt="KLIO Solutions" 
                  className="h-16 brightness-0 invert"
                />
              </motion.div>
              <p className="text-neutral-300 leading-relaxed mb-6">
                KLIO Solutions is a dedicated software development team committed to 
                transforming ideas into powerful digital solutions that drive business success.
              </p>
              <div className="space-y-3">
                <div className="flex items-center text-neutral-300">
                  <Phone size={16} className="mr-3 text-klio-accent" />
                  <span>+63 916 333 1597</span>
                </div>
                <div className="flex items-center text-neutral-300">
                  <Mail size={16} className="mr-3 text-klio-accent" />
                  <span>hello@kliosolutions.com</span>
                </div>
                <div className="flex items-center text-neutral-300">
                  <MapPin size={16} className="mr-3 text-klio-accent" />
                  <span>Polomolok, South Cotabato</span>
                </div>
              </div>
            </motion.div>

            {/* Footer Links */}
            <motion.div 
              className="lg:col-span-3 grid md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {Object.entries(footerLinks).map(([category, links]) => (
                <motion.div key={category} variants={itemVariants}>
                  <h3 className="text-lg font-heading font-semibold mb-4 capitalize text-white">
                    {category}
                  </h3>
                  <ul className="space-y-3">
                    {links.map((link, index) => (
                      <motion.li 
                        key={link.name}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <motion.a
                          href={link.href}
                          className="text-neutral-300 hover:text-klio-accent transition-colors block"
                          whileHover={{ x: 5 }}
                        >
                          {link.name}
                        </motion.a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer */}
        <motion.div 
          className="border-t border-neutral-800 py-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-neutral-400 text-sm">
               2025 KLIO Solutions. All rights reserved. | Polomolok, South Cotabato
            </div>
            
            {/* Social Links */}
            <motion.div 
              className="flex space-x-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-800 rounded-full flex items-center justify-center text-neutral-300 hover:bg-klio-accent hover:text-white transition-colors"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-12 h-12 bg-klio-blue rounded-full flex items-center justify-center text-white shadow-lg hover:bg-klio-dark transition-colors z-50"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          whileHover={{ 
            scale: 1.1,
            y: -2
          }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp size={20} />
        </motion.button>
      </div>
    </footer>
  );
};

export default Footer;
