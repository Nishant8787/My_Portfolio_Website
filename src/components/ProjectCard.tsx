import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Project } from '../types';
import Button from './Button';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`flex flex-col lg:flex-row gap-8 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg p-6 my-8 ${
        isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
      }`}
    >
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.3 }}
        className="lg:w-2/5 relative overflow-hidden rounded-lg"
      >
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-64 object-cover rounded-lg"
        />
      </motion.div>

      <div className="lg:w-3/5 flex flex-col justify-center">
        <h3 className="text-2xl font-bold text-primary-800 dark:text-primary-300 mb-2">{project.title}</h3>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.longDescription}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="bg-primary-100 dark:bg-primary-800 text-primary-800 dark:text-primary-100 text-sm px-3 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4 mt-auto">
          {project.demoUrl && (
            <Button variant="primary" size="sm">
              <ExternalLink size={16} className="mr-2" />
              View Demo
            </Button>
          )}
          {project.githubUrl && (
            <Button variant="outline" size="sm">
              <Github size={16} className="mr-2" />
              View Code
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;