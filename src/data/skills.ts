import { Skill } from '../types';

export const skills: Skill[] = [
  // Frontend
  { name: 'React', icon: 'react', category: 'frontend', level: 5 },
  { name: 'TypeScript', icon: 'code', category: 'frontend', level: 4 },
  { name: 'JavaScript', icon: 'code-square', category: 'frontend', level: 5 },
  { name: 'HTML5/CSS3', icon: 'layout', category: 'frontend', level: 5 },
  { name: 'Tailwind CSS', icon: 'palette', category: 'frontend', level: 4 },
  { name: 'Framer Motion', icon: 'move', category: 'frontend', level: 3 },
  
  // Backend
  { name: 'Django', icon: 'server', category: 'backend', level: 5 },
  { name: 'Python', icon: 'code', category: 'backend', level: 5 },
  { name: 'Node.js', icon: 'server', category: 'backend', level: 4 },
  { name: 'PostgreSQL', icon: 'database', category: 'backend', level: 4 },
  { name: 'RESTful APIs', icon: 'webhook', category: 'backend', level: 4 },
  { name: 'GraphQL', icon: 'network', category: 'backend', level: 3 },
  
  // ML/AI
  { name: 'Machine Learning', icon: 'brain', category: 'ml', level: 4 },
  { name: 'Deep Learning', icon: 'network', category: 'ml', level: 4 },
  { name: 'TensorFlow', icon: 'activity', category: 'ml', level: 4 },
  { name: 'scikit-learn', icon: 'bar-chart', category: 'ml', level: 5 },
  { name: 'Data Analysis', icon: 'chart', category: 'ml', level: 4 },
  { name: 'Computer Vision', icon: 'eye', category: 'ml', level: 3 },
  
  // Other
  { name: 'Git/GitHub', icon: 'git-branch', category: 'other', level: 5 },
  { name: 'Docker', icon: 'box', category: 'other', level: 4 },
  { name: 'CI/CD', icon: 'repeat', category: 'other', level: 3 },
  { name: 'Agile/Scrum', icon: 'clipboard-list', category: 'other', level: 4 },
  { name: 'Arduino', icon: 'cpu', category: 'other', level: 4 },
  { name: 'IoT', icon: 'wifi', category: 'other', level: 3 },
];