import React from 'react';
import { motion } from 'framer-motion';
import * as Icons from 'lucide-react';
import { Skill } from '../types';

interface SkillCardProps {
  skill: Skill;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index }) => {
  const LucideIcon = Icons[skill.icon as keyof typeof Icons] || Icons.Code;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-md"
    >
      <div className="flex items-center gap-3">
        <div className={`
          p-2 rounded-md
          ${skill.category === 'frontend' ? 'bg-blue-100 text-blue-700' : ''}
          ${skill.category === 'backend' ? 'bg-green-100 text-green-700' : ''}
          ${skill.category === 'ml' ? 'bg-purple-100 text-purple-700' : ''}
          ${skill.category === 'other' ? 'bg-gray-100 text-gray-700' : ''}
        `}>
          <LucideIcon size={20} />
        </div>
        <h3 className="font-medium text-gray-900 dark:text-white">{skill.name}</h3>
      </div>
      
      <div className="mt-3">
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-1.5 mt-1">
          <div
            className={`h-1.5 rounded-full ${
              skill.category === 'frontend' ? 'bg-blue-600' : 
              skill.category === 'backend' ? 'bg-green-600' : 
              skill.category === 'ml' ? 'bg-purple-600' : 'bg-gray-600'
            }`}
            style={{ width: `${(skill.level / 5) * 100}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;