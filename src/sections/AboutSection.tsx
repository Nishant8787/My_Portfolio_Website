import React from 'react';
import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Users } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: <GraduationCap size={24} />, value: '7.53/10.0', label: 'CGPA' },
    { icon: <Award size={24} />, value: '3+', label: 'Certifications' },
    { icon: <Users size={24} />, value: '5+', label: 'Projects' },
    { icon: <Briefcase size={24} />, value: '2+', label: 'Internships' },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading 
          title="About Me" 
          subtitle="Passionate about creating innovative solutions through code"
        />
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              A fresh graduate with a passion for Software Engineering and Machine Learning
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                As a recent Computer Science graduate, I bring fresh perspectives and cutting-edge knowledge to software development. My academic journey has equipped me with strong foundations in both frontend and backend technologies, complemented by hands-on project experience.
              </p>
              
              <p>
                During my academic career, I've developed several projects that demonstrate my ability to apply theoretical knowledge to practical solutions. From AI-powered health applications to IoT devices for accessibility, each project has strengthened my technical skills and problem-solving abilities.
              </p>
              
              <p>
                I'm particularly passionate about machine learning and its applications in solving real-world problems. My coursework and projects in this area have given me practical experience with frameworks like TensorFlow and scikit-learn.
              </p>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:w-1/2"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-md text-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary-100 dark:bg-primary-900 text-primary-600 dark:text-primary-300 rounded-full">
                    {stat.icon}
                  </div>
                  <h4 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</h4>
                  <p className="text-gray-600 dark:text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Education</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>BE in Computer Science</li>
                  <li>RR Institute of Technology</li>
                  <li>Cgpa- 7.53/10</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Certifications</h4>
                <ul className="space-y-2 text-gray-600 dark:text-gray-300">
                  <li>Full Stack Development</li>
                  <li>AI- Machine Learning Foundation Course</li>
                  <li>Project Management</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;