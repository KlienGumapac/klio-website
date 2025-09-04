import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@kliosolutions.com",
      description: "Send us an email anytime"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+63 916 333 1597",
      description: "Mon-Fri from 8am to 5pm"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "Polomolok, South Cotabato",
      description: "Come say hello at our office"
    }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="section-padding bg-neutral-50 dark:bg-neutral-800">
      <div className="container-max">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-klio-blue/10 dark:bg-klio-blue/20 rounded-full text-klio-blue dark:text-klio-accent text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Mail size={16} className="mr-2" />
            Get In Touch
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Let's Build Something
            <span className="gradient-text block">Amazing Together</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Ready to transform your ideas into reality? We'd love to hear about your project 
            and discuss how KLIO Solutions can help you achieve your goals.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-2xl font-heading font-bold text-neutral-800 dark:text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed mb-8">
                We're here to help you bring your vision to life. Whether you have a question 
                about our services or want to discuss a potential project, we'd love to hear from you.
              </p>
            </div>

            {/* Contact Cards */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  className="bg-white dark:bg-neutral-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    scale: 1.02,
                    transition: { duration: 0.3 }
                  }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-klio-blue to-klio-dark rounded-xl flex items-center justify-center"
                      whileHover={{ 
                        scale: 1.1,
                        rotate: 5
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <info.icon size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <h4 className="text-lg font-heading font-semibold text-neutral-800 dark:text-white mb-1">
                        {info.title}
                      </h4>
                      <p className="text-klio-blue dark:text-klio-accent font-medium mb-1">
                        {info.details}
                      </p>
                      <p className="text-sm text-neutral-600 dark:text-neutral-300">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Info */}
            <motion.div 
              className="bg-gradient-to-br from-klio-blue/10 to-klio-accent/10 dark:from-klio-blue/20 dark:to-klio-accent/20 rounded-2xl p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-heading font-semibold text-neutral-800 dark:text-white mb-3">
                Why Choose KLIO Solutions?
              </h4>
              <ul className="space-y-2 text-neutral-600 dark:text-neutral-300">
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-klio-blue dark:text-klio-accent mr-2" />
                  Free consultation and project planning
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-klio-blue dark:text-klio-accent mr-2" />
                  Transparent pricing and timelines
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-klio-blue dark:text-klio-accent mr-2" />
                  Ongoing support and maintenance
                </li>
                <li className="flex items-center">
                  <CheckCircle size={16} className="text-klio-blue dark:text-klio-accent mr-2" />
                  Modern technologies and best practices
                </li>
              </ul>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white dark:bg-neutral-700 rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-heading font-bold text-neutral-800 dark:text-white mb-6">
                Send Us a Message
              </h3>

              {isSubmitted ? (
                <motion.div 
                  className="text-center py-12"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <motion.div 
                    className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6, repeat: 2 }}
                  >
                    <CheckCircle size={32} className="text-green-600 dark:text-green-400" />
                  </motion.div>
                  <h4 className="text-xl font-heading font-semibold text-neutral-800 dark:text-white mb-2">
                    Message Sent Successfully!
                  </h4>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="grid md:grid-cols-2 gap-6">
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-klio-blue focus:border-transparent dark:bg-neutral-800 dark:text-white transition-colors"
                        placeholder="Your full name"
                      />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-klio-blue focus:border-transparent dark:bg-neutral-800 dark:text-white transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-klio-blue focus:border-transparent dark:bg-neutral-800 dark:text-white transition-colors"
                      placeholder="What's this about?"
                    />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-neutral-300 dark:border-neutral-600 rounded-lg focus:ring-2 focus:ring-klio-blue focus:border-transparent dark:bg-neutral-800 dark:text-white transition-colors resize-none"
                      placeholder="Tell us about your project..."
                    />
                  </motion.div>

                  <motion.button
                    type="submit"
                    className="w-full bg-gradient-to-r from-klio-blue to-klio-dark text-white py-4 px-6 rounded-lg font-medium hover:from-klio-dark hover:to-klio-blue transition-all duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                  >
                    <Send size={20} className="mr-2" />
                    Send Message
                  </motion.button>
                </motion.form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
