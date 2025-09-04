import React from "react";
import { ArrowRight, Code, Zap, Shield } from "lucide-react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-neutral-50 via-white to-neutral-100 dark:from-neutral-900 dark:via-neutral-800 dark:to-neutral-900"></div>
      <motion.div 
        className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-klio-blue/20 to-klio-accent/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>
      <motion.div 
        className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-klio-dark/10 to-klio-light/20 rounded-full blur-3xl"
        animate={{ 
          scale: [1.2, 1, 1.2],
          rotate: [360, 180, 0]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      ></motion.div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="space-y-4">
              <motion.div 
                className="inline-flex items-center px-4 py-2 bg-klio-blue/10 dark:bg-klio-blue/20 rounded-full text-klio-blue dark:text-klio-accent text-sm font-medium"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Zap size={16} className="mr-2" />
                Professional Software Development Team
              </motion.div>
              
              {/* Animated Hero Title */}
              <div className="space-y-2">
                <motion.h1 
                  className="text-5xl lg:text-6xl font-heading font-bold leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                >
                  {/* Transform Your - with word-by-word animation */}
                  <div className="flex flex-wrap gap-x-4">
                    {["Transform", "Your"].map((word, index) => (
                      <motion.span 
                        key={word}
                        className="text-neutral-800 dark:text-white inline-block"
                        initial={{ opacity: 0, y: 50, rotateX: -90 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: 0.4 + index * 0.2,
                          type: "spring",
                          stiffness: 100
                        }}
                        whileHover={{ 
                          scale: 1.1,
                          rotateY: 10,
                          transition: { duration: 0.3 }
                        }}
                      >
                        {word}
                      </motion.span>
                    ))}
                  </div>
                  
                  {/* Digital Vision - with continuous floating animation */}
                  <motion.div 
                    className="block relative mt-2"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8, type: "spring" }}
                  >
                    <motion.span 
                      className="inline-block bg-gradient-to-r from-klio-blue to-klio-accent bg-clip-text text-transparent"
                      animate={{ 
                        y: [0, -8, 0],
                        rotateZ: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateZ: 5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Digital
                    </motion.span>
                    <span className="mx-2"> </span>
                    <motion.span 
                      className="inline-block bg-gradient-to-r from-klio-accent to-klio-light bg-clip-text text-transparent"
                      animate={{ 
                        y: [0, 8, 0],
                        rotateZ: [0, -2, 2, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.5
                      }}
                      whileHover={{ 
                        scale: 1.05,
                        rotateZ: -5,
                        transition: { duration: 0.3 }
                      }}
                    >
                      Vision
                    </motion.span>
                    
                    {/* Animated underline that follows the text */}
                    <motion.div
                      className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-klio-blue to-klio-accent rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                    />
                  </motion.div>
                </motion.h1>
              </div>
              
              <motion.p 
                className="text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                KLIO Solutions delivers cutting-edge software development services for businesses, 
                capstone projects, and custom web applications. We turn complex ideas into 
                elegant, scalable solutions.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.a 
                href="#contact" 
                className="btn-primary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
                <ArrowRight size={20} className="ml-2" />
              </motion.a>
              <motion.a 
                href="#portfolio" 
                className="btn-secondary inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div 
              className="flex items-center space-x-8 pt-8 border-t border-neutral-200 dark:border-neutral-700"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.6 }}
            >
              <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300">
                <Code size={20} className="text-klio-blue dark:text-klio-accent" />
                <span className="text-sm font-medium">Modern Tech Stack</span>
              </div>
              <div className="flex items-center space-x-2 text-neutral-600 dark:text-neutral-300">
                <Shield size={20} className="text-klio-blue dark:text-klio-accent" />
                <span className="text-sm font-medium">Secure & Scalable</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Element */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              {/* Main Card */}
              <motion.div 
                className="glass-card p-8"
                whileHover={{ 
                  rotate: 0,
                  scale: 1.02
                }}
                transition={{ duration: 0.3 }}
                initial={{ rotate: 3 }}
                animate={{ rotate: 3 }}
              >
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <motion.div 
                      className="w-12 h-12 bg-gradient-to-br from-klio-dark to-klio-blue rounded-lg flex items-center justify-center"
                      animate={{ rotate: [0, 10, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                    >
                      <Code size={24} className="text-white" />
                    </motion.div>
                    <div className="text-right">
                      <motion.div 
                        className="text-2xl font-bold text-klio-dark dark:text-white"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
                      >
                        100%
                      </motion.div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">Success Rate</div>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    {[
                      { label: "Frontend Development", width: "w-full" },
                      { label: "Backend Systems", width: "w-5/6" },
                      { label: "Custom Solutions", width: "w-full" }
                    ].map((item, index) => (
                      <motion.div 
                        key={item.label}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.4 + index * 0.2 }}
                      >
                        <span className="text-neutral-600 dark:text-neutral-300">{item.label}</span>
                        <div className="w-24 h-2 bg-neutral-200 dark:bg-neutral-700 rounded-full">
                          <motion.div 
                            className={`${item.width} h-full bg-gradient-to-r from-klio-dark to-klio-blue rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 1, delay: 1.6 + index * 0.2 }}
                          ></motion.div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/20 dark:border-neutral-600/20">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-klio-dark dark:text-white">KLIO Solutions</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">Your Technology Partner</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-klio-accent to-klio-light rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Zap size={24} className="text-white" />
              </motion.div>
              <motion.div 
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-gradient-to-br from-klio-blue to-klio-dark rounded-full flex items-center justify-center shadow-lg"
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
              >
                <Shield size={28} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
