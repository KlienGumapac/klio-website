import React from "react";
import { 
  Users, 
  Award, 
  Clock, 
  Target,
  CheckCircle,
  TrendingUp,
  Lightbulb,
  Heart,
  ArrowRight
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About: React.FC = () => {
  const stats = [
    {
      icon: Award,
      value: "50+",
      label: "Projects Completed",
      description: "Successfully delivered solutions"
    },
    {
      icon: Users,
      value: "25+",
      label: "Happy Clients",
      description: "Satisfied customers worldwide"
    },
    {
      icon: Clock,
      value: "99%",
      label: "On-Time Delivery",
      description: "Projects delivered on schedule"
    },
    {
      icon: Target,
      value: "100%",
      label: "Success Rate",
      description: "Client satisfaction guaranteed"
    }
  ];

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace cutting-edge technologies and creative solutions to solve complex problems."
    },
    {
      icon: CheckCircle,
      title: "Quality",
      description: "Every line of code is crafted with precision, following industry best practices and standards."
    },
    {
      icon: TrendingUp,
      title: "Growth",
      description: "We build scalable solutions that grow with your business and adapt to changing needs."
    },
    {
      icon: Heart,
      title: "Partnership",
      description: "We believe in long-term relationships and work as an extension of your team."
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
    <section id="about" className="section-padding bg-neutral-50 dark:bg-neutral-800">
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
            <Users size={16} className="mr-2" />
            About KLIO
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Your Trusted Technology
            <span className="gradient-text block">Partner</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            KLIO Solutions is a dedicated software development team committed to transforming 
            ideas into powerful digital solutions that drive business success.
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="space-y-6">
              <h3 className="text-2xl lg:text-3xl font-heading font-bold text-neutral-800 dark:text-white">
                Expertise That Delivers Results
              </h3>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                At KLIO Solutions, we combine technical excellence with strategic thinking to 
                create software that not only meets your requirements but exceeds your expectations. 
                Our team brings years of experience across diverse industries and technologies.
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 leading-relaxed">
                Whether you are a startup looking to build your first application, a student 
                working on a capstone project, or an enterprise seeking custom solutions, 
                we have the expertise and passion to bring your vision to life.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                { title: "Full-Stack Expertise", desc: "From frontend to backend, we handle every aspect of software development." },
                { title: "Modern Technologies", desc: "We use the latest frameworks and tools to build future-ready applications." },
                { title: "Agile Methodology", desc: "Flexible development process with regular updates and client collaboration." }
              ].map((point, index) => (
                <motion.div 
                  key={point.title}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.div 
                    className="w-6 h-6 bg-gradient-to-br from-klio-blue to-klio-dark rounded-full flex items-center justify-center mt-1"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                  >
                    <CheckCircle size={16} className="text-white" />
                  </motion.div>
                  <div>
                    <h4 className="font-semibold text-neutral-800 dark:text-white mb-1">{point.title}</h4>
                    <p className="text-neutral-600 dark:text-neutral-300">{point.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Meet the Team Button */}
            <motion.div 
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/developers"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-klio-blue to-klio-dark text-white rounded-lg font-medium hover:from-klio-dark hover:to-klio-blue transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <Users size={20} className="mr-3" />
                  Meet the Developers Behind the Scenes
                  <ArrowRight size={20} className="ml-3" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats */}
          <motion.div 
            className="grid grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-white dark:bg-neutral-700 rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-gradient-to-br from-klio-blue to-klio-dark rounded-xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <stat.icon size={24} className="text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold gradient-text mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                  viewport={{ once: true }}
                >
                  {stat.value}
                </motion.div>
                <div className="font-semibold text-neutral-800 dark:text-white mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600 dark:text-neutral-300">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="space-y-12">
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-heading font-bold text-neutral-800 dark:text-white mb-4">
              Our Core Values
            </h3>
            <p className="text-lg text-neutral-600 dark:text-neutral-300 max-w-2xl mx-auto">
              These principles guide everything we do and shape how we work with our clients.
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
              >
                <motion.div 
                  className="w-16 h-16 bg-gradient-to-br from-klio-blue to-klio-dark rounded-2xl flex items-center justify-center mx-auto mb-4"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <value.icon size={28} className="text-white" />
                </motion.div>
                <h4 className="text-xl font-heading font-semibold text-neutral-800 dark:text-white mb-3">
                  {value.title}
                </h4>
                <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Technology Stack */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-heading font-bold text-neutral-800 dark:text-white mb-8">
            Technologies We Master
          </h3>
          <motion.div 
            className="flex flex-wrap justify-center gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              "React", "Node.js", "Python", "TypeScript", "MongoDB", "PostgreSQL",
              "GraphQL", "Next.js", "Flutter"
            ].map((tech, index) => (
              <motion.span
                key={tech}
                className="px-4 py-2 bg-white dark:bg-neutral-700 rounded-full text-neutral-700 dark:text-neutral-200 font-medium shadow-sm hover:shadow-md transition-shadow duration-200"
                variants={itemVariants}
                whileHover={{ 
                  scale: 1.1,
                  y: -2
                }}
              >
                {tech}
              </motion.span>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
