import React, { useEffect } from "react";
import { 
  Users, 
  Code, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowLeft,
  Award,
  Coffee,
  Heart,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Developers: React.FC = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const teamMembers = [
    {
      name: "Keyan Andy Delgado",
      role: "Lead Developer",
      expertise: "Full-Stack Development",
      description: "Passionate about creating innovative solutions and leading development teams to success. With years of experience in both frontend and backend technologies.",
      skills: ["React", "Node.js", "Python", "MongoDB", "AWS"],
      avatar: "KD",
      funFact: "Loves solving complex algorithms while drinking coffee ",
      social: {
        github: "https://github.com/keyan-delgado",
        linkedin: "https://linkedin.com/in/keyan-delgado",
        email: "keyan@kliosolutions.com"
      }
    },
    {
      name: "Klien John B. Gumapac",
      role: "Frontend Developer",
      expertise: "React & UI/UX",
      description: "Specializes in creating beautiful, responsive user interfaces that provide exceptional user experiences. Expert in modern frontend frameworks.",
      skills: ["React", "TypeScript", "Tailwind CSS", "Framer Motion", "Next.js"],
      avatar: "KG",
      funFact: "Design enthusiast who believes great UI can change the world ",
      social: {
        github: "https://github.com/klien-gumapac",
        linkedin: "https://linkedin.com/in/klien-gumapac",
        email: "klien@kliosolutions.com"
      }
    },
    {
      name: "Teodolfo G. Hernane Jr.",
      role: "Backend Developer",
      expertise: "Node.js & Database",
      description: "Expert in building robust backend systems and optimizing database performance for scalable applications. Database architecture specialist.",
      skills: ["Node.js", "PostgreSQL", "MongoDB", "GraphQL", "Docker"],
      avatar: "TH",
      funFact: "Database optimization is his superpower ",
      social: {
        github: "https://github.com/teodolfo-hernane",
        linkedin: "https://linkedin.com/in/teodolfo-hernane",
        email: "teodolfo@kliosolutions.com"
      }
    },
    {
      name: "Dave Ledesma",
      role: "Mobile Developer",
      expertise: "React Native & Flutter",
      description: "Focused on developing cross-platform mobile applications that deliver native performance. Mobile-first approach to development.",
      skills: ["React Native", "Flutter", "iOS", "Android", "Firebase"],
      avatar: "DL",
      funFact: "Mobile apps are his canvas, code is his paintbrush ",
      social: {
        github: "https://github.com/dave-ledesma",
        linkedin: "https://linkedin.com/in/dave-ledesma",
        email: "dave@kliosolutions.com"
      }
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
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900">
      {/* Header */}
      <motion.div 
        className="bg-white dark:bg-neutral-800 shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-max py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <Link 
                  to="/" 
                  className="flex items-center text-neutral-600 dark:text-neutral-300 hover:text-klio-blue dark:hover:text-klio-accent transition-colors"
                >
                  <ArrowLeft size={20} className="mr-2" />
                  Back to Home
                </Link>
              </motion.div>
            </div>
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-2xl font-heading font-bold text-neutral-800 dark:text-white">
                Meet Our Developers
              </h1>
            </motion.div>
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="container-max py-16">
        {/* Page Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div 
            className="inline-flex items-center px-4 py-2 bg-klio-blue/10 dark:bg-klio-blue/20 rounded-full text-klio-blue dark:text-klio-accent text-sm font-medium mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Users size={16} className="mr-2" />
            The Team Behind KLIO
          </motion.div>
          <motion.h2 
            className="text-4xl lg:text-5xl font-heading font-bold text-neutral-800 dark:text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            The Developers Behind
            <span className="gradient-text block">the Scenes</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Meet the talented individuals who bring your ideas to life. Each member of our team 
            brings unique expertise and passion to every project we undertake.
          </motion.p>
        </motion.div>

        {/* Team Grid */}
        <motion.div 
          className="grid lg:grid-cols-2 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
            >
              {/* Member Header */}
              <div className="flex items-start space-x-6 mb-6">
                {/* Avatar */}
                <motion.div 
                  className="w-20 h-20 bg-gradient-to-br from-klio-blue to-klio-dark rounded-full flex items-center justify-center text-white text-xl font-bold"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {member.avatar}
                </motion.div>

                {/* Basic Info */}
                <div className="flex-1">
                  <h3 className="text-2xl font-heading font-bold text-neutral-800 dark:text-white mb-1">
                    {member.name}
                  </h3>
                  <p className="text-klio-blue dark:text-klio-accent font-semibold mb-2">
                    {member.role}
                  </p>
                  <p className="text-neutral-600 dark:text-neutral-300 text-sm">
                    {member.expertise}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed mb-6">
                {member.description}
              </p>

              {/* Skills */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neutral-800 dark:text-white mb-3 flex items-center">
                  <Code size={16} className="mr-2 text-klio-blue dark:text-klio-accent" />
                  Technical Skills
                </h4>
                <div className="flex flex-wrap gap-2">
                  {member.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-1 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 text-sm rounded-full"
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <div className="mb-6 p-4 bg-gradient-to-r from-klio-blue/10 to-klio-accent/10 dark:from-klio-blue/20 dark:to-klio-accent/20 rounded-lg">
                <p className="text-sm text-neutral-600 dark:text-neutral-300 flex items-start">
                  <Zap size={16} className="mr-2 text-klio-blue dark:text-klio-accent mt-0.5 flex-shrink-0" />
                  {member.funFact}
                </p>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                <motion.a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-klio-blue hover:text-white transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Github size={18} />
                </motion.a>
                <motion.a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-klio-blue hover:text-white transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Linkedin size={18} />
                </motion.a>
                <motion.a
                  href={`mailto:${member.social.email}`}
                  className="w-10 h-10 bg-neutral-100 dark:bg-neutral-700 rounded-full flex items-center justify-center text-neutral-600 dark:text-neutral-300 hover:bg-klio-blue hover:text-white transition-colors"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: 5
                  }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Mail size={18} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Team Stats */}
        <motion.div 
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="bg-gradient-to-br from-klio-blue to-klio-dark rounded-2xl p-8 lg:p-12 text-white"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl lg:text-3xl font-heading font-bold mb-4">
              Why Choose Our Team?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Award size={32} className="text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-2">Expertise</h4>
                <p className="text-blue-100">Years of combined experience in modern technologies</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Heart size={32} className="text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-2">Passion</h4>
                <p className="text-blue-100">Genuine love for creating exceptional software</p>
              </div>
              <div className="text-center">
                <motion.div 
                  className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Coffee size={32} className="text-white" />
                </motion.div>
                <h4 className="text-lg font-semibold mb-2">Dedication</h4>
                <p className="text-blue-100">Committed to delivering your vision on time</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Developers;
