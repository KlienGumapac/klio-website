import React, { useState } from "react";
import { ExternalLink, Github, Filter, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: "/api/placeholder/600/400",
      category: "web",
      status: "completed",
      technologies: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Student Management System",
      description: "Comprehensive capstone project for educational institutions. Includes student enrollment, grade tracking, and reporting features.",
      image: "/api/placeholder/600/400",
      category: "capstone",
      status: "completed",
      technologies: ["Vue.js", "Python", "PostgreSQL", "Django"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Business Analytics Dashboard",
      description: "Real-time analytics dashboard for business intelligence. Features interactive charts, data visualization, and export capabilities.",
      image: "/api/placeholder/600/400",
      category: "business",
      status: "in-progress",
      technologies: ["React", "D3.js", "Python", "FastAPI"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Mobile Banking App",
      description: "Cross-platform mobile banking application with secure authentication, transaction history, and bill payment features.",
      image: "/api/placeholder/600/400",
      category: "mobile",
      status: "completed",
      technologies: ["React Native", "Node.js", "MongoDB", "JWT"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Inventory Management System",
      description: "Custom inventory management solution for retail businesses. Features barcode scanning, stock alerts, and supplier management.",
      image: "/api/placeholder/600/400",
      category: "business",
      status: "completed",
      technologies: ["Angular", "C#", "SQL Server", "Azure"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Healthcare Portal",
      description: "Patient management system for healthcare providers. Includes appointment scheduling, medical records, and telemedicine features.",
      image: "/api/placeholder/600/400",
      category: "web",
      status: "in-progress",
      technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Applications" },
    { id: "mobile", label: "Mobile Apps" },
    { id: "business", label: "Business Software" },
    { id: "capstone", label: "Capstone Projects" }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
    <section id="portfolio" className="section-padding bg-white dark:bg-neutral-900">
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
            <Filter size={16} className="mr-2" />
            Our Portfolio
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Showcasing Our
            <span className="gradient-text block">Latest Work</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Explore our diverse portfolio of successful projects across different industries 
            and technologies. Each project represents our commitment to quality and innovation.
          </motion.p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div 
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-klio-blue text-white shadow-lg"
                  : "bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-klio-blue/10 dark:hover:bg-klio-blue/20"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {filter.label}
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group bg-neutral-50 dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl dark:hover:shadow-neutral-700 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <motion.div 
                  className="w-full h-48 bg-gradient-to-br from-klio-blue/20 to-klio-accent/20 flex items-center justify-center"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-klio-blue dark:text-klio-accent text-4xl font-bold">
                    {project.title.split(' ').map(word => word[0]).join('')}
                  </div>
                </motion.div>
                
                {/* Status Badge */}
                <motion.div 
                  className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-medium ${
                    project.status === "completed" 
                      ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200" 
                      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200"
                  }`}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  {project.status === "completed" ? "Completed" : "In Progress"}
                </motion.div>

                {/* Overlay */}
                <motion.div 
                  className="absolute inset-0 bg-klio-dark/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <motion.a
                    href={project.liveUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-klio-dark hover:bg-klio-blue hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-klio-dark hover:bg-klio-blue hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Github size={20} />
                  </motion.a>
                </motion.div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-semibold text-neutral-800 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <motion.span
                      key={techIndex}
                      className="px-3 py-1 bg-white dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300 text-xs rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: techIndex * 0.1 }}
                      viewport={{ once: true }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <motion.a
                    href={project.liveUrl}
                    className="flex-1 bg-klio-blue text-white py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-klio-dark transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Live
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex-1 border border-klio-blue text-klio-blue dark:text-klio-accent py-2 px-4 rounded-lg text-sm font-medium text-center hover:bg-klio-blue hover:text-white transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Code
                  </motion.a>
                </div>
              </div>
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
            className="bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-700 border border-neutral-200 dark:border-neutral-600 rounded-2xl p-8 lg:p-12"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl lg:text-3xl font-heading font-bold text-neutral-800 dark:text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8 max-w-2xl mx-auto">
              Let us bring your ideas to life with our expertise in software development. 
              Contact us today for a free consultation.
            </p>
            <motion.a 
              href="#contact" 
              className="btn-primary inline-flex items-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Project
              <ArrowRight size={20} className="ml-2" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
