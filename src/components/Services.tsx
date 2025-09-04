import React from "react";
import { 
  Globe, 
  Database, 
  Smartphone, 
  Cloud, 
  Settings,
  GraduationCap,
  Building2,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  const services = [
    {
      icon: Building2,
      title: "Business Software",
      description: "Enterprise-grade solutions tailored to streamline your business operations and boost productivity.",
      features: ["ERP Systems", "CRM Solutions", "Workflow Automation", "Data Analytics"],
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Capstone Projects",
      description: "Academic excellence meets real-world application. We help students create impressive capstone projects.",
      features: ["Research & Planning", "Technical Implementation", "Documentation", "Presentation Support"],
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      title: "Custom Web Applications",
      description: "Modern, responsive web applications built with cutting-edge technologies and best practices.",
      features: ["React/Angular/Vue", "Progressive Web Apps", "E-commerce Solutions", "API Integration"],
      color: "from-green-500 to-green-600"
    },
    {
      icon: Database,
      title: "Custom Systems",
      description: "Bespoke software systems designed to solve your unique challenges and requirements.",
      features: ["System Architecture", "Database Design", "Integration Services", "Performance Optimization"],
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Deployment"],
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment strategies for modern applications.",
      features: ["AWS/Azure/GCP", "DevOps & CI/CD", "Microservices", "Containerization"],
      color: "from-indigo-500 to-indigo-600"
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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="services" className="section-padding bg-white dark:bg-neutral-900">
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
            <Settings size={16} className="mr-2" />
            Our Services
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Comprehensive Software
            <span className="gradient-text block">Development Services</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            From concept to deployment, KLIO Solutions provides end-to-end software development 
            services that drive innovation and deliver measurable results.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              className="group relative bg-neutral-50 dark:bg-neutral-800 rounded-2xl p-8 hover:bg-white dark:hover:bg-neutral-700 hover:shadow-xl transition-all duration-500 border border-neutral-200 dark:border-neutral-700 hover:border-klio-blue/20 dark:hover:border-klio-accent/20"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Icon */}
              <motion.div 
                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6`}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5
                }}
                transition={{ duration: 0.3 }}
              >
                <service.icon size={28} className="text-white" />
              </motion.div>

              {/* Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-heading font-semibold text-neutral-800 dark:text-white">
                  {service.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <motion.li 
                      key={featureIndex} 
                      className="flex items-center text-sm text-neutral-600 dark:text-neutral-300"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <motion.div 
                        className="w-1.5 h-1.5 bg-klio-blue dark:bg-klio-accent rounded-full mr-3"
                        whileHover={{ scale: 1.5 }}
                      ></motion.div>
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Learn More Link */}
                <div className="pt-4">
                  <motion.a 
                    href="#contact" 
                    className="inline-flex items-center text-klio-blue dark:text-klio-accent font-medium hover:text-klio-dark dark:hover:text-klio-light transition-colors group"
                    whileHover={{ x: 5 }}
                  >
                    Learn More
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </motion.a>
                </div>
              </div>

              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-klio-blue/5 to-klio-accent/5 dark:from-klio-blue/10 dark:to-klio-accent/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Section */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="bg-gradient-to-br from-klio-dark to-klio-blue rounded-2xl p-8 lg:p-12 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
              Let us discuss how KLIO Solutions can help transform your ideas into powerful, 
              scalable software solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a 
                href="#contact" 
                className="bg-white text-klio-dark px-8 py-4 rounded-lg font-medium hover:bg-neutral-100 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Free Consultation
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
              <motion.a 
                href="#portfolio" 
                className="border-2 border-white/30 text-white px-8 py-4 rounded-lg font-medium hover:bg-white/10 transition-colors inline-flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Portfolio
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
