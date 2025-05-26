import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'doctorspot',
    title: 'DoctorSpot',
    description: 'AI-powered health application with multiple disease prediction modules',
    longDescription: 
      'DoctorSpot is a comprehensive health application that leverages artificial intelligence to predict various medical conditions including asthma, cancer, and lung diseases. Built using Django for the backend and machine learning algorithms for predictive analytics, this app aims to assist medical professionals in early diagnosis and treatment planning.',
    technologies: ['Django', 'Python', 'Machine Learning', 'TensorFlow', 'React', 'PostgreSQL'],
    imageUrl: 'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg',
    featured: true,
  },
  {
    id: 'portfolio',
    title: 'Portfolio Website',
    description: 'A full-stack, animated portfolio website showcasing projects and skills',
    longDescription: 
      'This portfolio website demonstrates my full-stack development capabilities with a clean, animated UI. The frontend is built with React.js and styled using Tailwind CSS, with Framer Motion providing smooth animations. The backend uses Django and Django REST Framework for content management with an admin panel.',
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Django', 'PostgreSQL'],
    imageUrl: 'https://images.pexels.com/photos/5926382/pexels-photo-5926382.jpeg',
    featured: true,
  },
  {
    id: 'cancer-prediction',
    title: 'Cancer Prediction System',
    description: 'ML-based web app to detect and classify cancer types based on genetic markers',
    longDescription: 
      'This machine learning-based web application is designed to detect and classify different types of cancer based on genetic markers. It utilizes advanced ML algorithms trained on medical datasets to provide accurate predictions that can assist healthcare professionals in early diagnosis.',
    technologies: ['Python', 'Machine Learning', 'scikit-learn', 'Flask', 'JavaScript', 'HTML/CSS'],
    imageUrl: 'https://images.pexels.com/photos/3825574/pexels-photo-3825574.jpeg',
    featured: true,
  },
  {
    id: 'arduino-glove',
    title: 'Arduino-Based Glove for Speech Impaired',
    description: 'Sensor-based glove converting hand gestures into speech for communication assistance',
    longDescription: 
      'This innovative IoT project consists of a glove equipped with flex sensors and an accelerometer to detect hand gestures. Using an Arduino microcontroller, the glove interprets these gestures and converts them into speech, helping individuals with speech impairments to communicate more effectively.',
    technologies: ['Arduino', 'C++', 'IoT', 'Electronics', 'Text-to-Speech', 'Sensor Technology'],
    imageUrl: 'https://images.pexels.com/photos/8566526/pexels-photo-8566526.jpeg',
    featured: true,
  }
];