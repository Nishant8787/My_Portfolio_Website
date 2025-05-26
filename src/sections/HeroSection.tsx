import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Twitter } from 'lucide-react';
import { Link } from 'react-scroll';
import Button from '../components/Button';
import { socialLinks } from '../data/navLinks';

const HeroSection: React.FC = () => {
  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      default:
        return null;
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="home" className="h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360] 
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-primary-200/30 dark:bg-primary-900/20 blur-3xl"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-2/3 -left-32 w-96 h-96 rounded-full bg-secondary-200/30 dark:bg-secondary-900/20 blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2"
          >
            <motion.p 
              custom={1}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-primary-600 dark:text-primary-400 font-semibold mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              custom={2}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              Nisanta Nath
              <br />
              <motion.span 
                custom={3}
                variants={textVariants}
                className="text-primary-600"
              >
                Software Developer
              </motion.span>
            </motion.h1>
            
            <motion.p 
              custom={4}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              I build innovative applications using cutting-edge technologies, specializing in full-stack development and machine learning solutions with a focus on creating stunning animations.
            </motion.p>
            
            <motion.div 
              custom={5}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex flex-wrap gap-4"
            >
              <Link
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="primary" size="lg">View My Work</Button>
              </Link>
              
              <Link
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                <Button variant="outline" size="lg">Contact Me</Button>
              </Link>
            </motion.div>
            
            <motion.div 
              custom={6}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className="flex gap-4 mt-8"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full shadow-md hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {renderSocialIcon(link.icon)}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ 
              duration: 0.8,
              type: "spring",
              stiffness: 100
            }}
            className="lg:w-1/2 flex justify-center"
          >
            <motion.div 
              className="relative w-72 h-72 md:w-96 md:h-96"
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 animate-pulse"></div>
              <motion.div
                className="absolute inset-2 rounded-full overflow-hidden border-4 border-white dark:border-gray-800"
                style={{ willChange: 'transform' }}
                animate={{ rotate: -360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <img 
                  src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg" 
                  alt="Professional Portrait" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-2">Scroll Down</p>
        <ChevronDown className="mx-auto text-primary-600 dark:text-primary-400" />
      </motion.div>
    </section>
  );
};

export default HeroSection;