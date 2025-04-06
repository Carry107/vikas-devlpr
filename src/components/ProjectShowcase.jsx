import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ProjectShowcase = () => {
  // Sample project data with equal sizes
  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      image: "public/images/blue-sky-ocean.jpg", // 16:9 aspect ratio
      category: "Web Development",
      features: ["Responsive Design", "Payment Gateway", "User Authentication", "Product Management"]
    },
    {
      id: 2,
      title: "Portfolio Website",
      image: "public/images/iphon.jpg", // 16:9 aspect ratio
      category: "Frontend",
      features: ["Animation Effects", "Dark Mode", "Contact Form", "Performance Optimized"]
    },
    {
      id: 3,
      title: "Task Management App",
      image: "public/images/it-studio-room.jpg", // 16:9 aspect ratio
      category: "Full Stack",
      features: ["Real-time Updates", "Drag & Drop", "Team Collaboration", "Mobile App"]
    },
    {
      id: 4,
      title: "Social Media Dashboard",
      image: "public/images/tree-flower.jpg", // 16:9 aspect ratio
      category: "UI/UX Design",
      features: ["Data Visualization", "Theme Customization", "Analytics", "Multi-platform"]
    },
    {
      id: 5,
      title: "Travel Booking System",
      image: "public/images/yelloeis-sky.jpg", // 16:9 aspect ratio
      category: "Web Application",
      features: ["Maps Integration", "Booking System", "Payment Processing", "User Reviews"]
    },
    {
      id: 6,
      title: "Fitness Tracker",
      image: "public/images/study-room.jpg", // 16:9 aspect ratio
      category: "Mobile App",
      features: ["Progress Tracking", "Workout Plans", "Health Metrics", "Social Sharing"]
    }
  ];

  // Animation variants for container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  // Project item animations
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Floating animation for gallery items
  const floatAnimation = {
    y: [-5, 5, -5],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <section id="projects" className="py-20 bg-gradient-to-br from-pink-50 via-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <motion.div
            className="inline-block mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
          >
            <span className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-lg font-semibold">
              My Work
            </span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl font-bold mb-4 text-gray-800"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Project Showcase
          </motion.h2>
          
          <motion.p 
            className="max-w-2xl mx-auto text-gray-600"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Explore my recent projects that demonstrate my skills and expertise in creating 
            user-friendly, scalable, and visually appealing applications.
          </motion.p>
        </div>
        
        {/* Project Gallery - Equal sized grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              itemVariants={itemVariants}
              floatAnimation={floatAnimation}
            />
          ))}
        </motion.div>
        
        {/* View All Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="#all-projects"
            className="inline-block bg-gradient-to-r from-pink-500 to-blue-500 text-white font-medium rounded-lg px-6 py-3 shadow-md"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 10px 25px -5px rgba(219, 39, 119, 0.4)"
            }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            View All Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

// Project Card Component - Now with equal sizing
const ProjectCard = ({ project, itemVariants, floatAnimation }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      className="w-full h-80 overflow-hidden rounded-xl group relative"
      variants={itemVariants}
      animate={floatAnimation}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-pink-600/30 to-blue-600/30 opacity-50 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
      
      <div className="w-full h-full relative">
        <motion.img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transform transition-transform duration-700 ease-in-out group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 flex flex-col justify-end p-6 z-20">
        <motion.span 
          className="inline-block bg-white/90 text-pink-600 px-3 py-1 rounded-full text-xs font-medium mb-2 backdrop-blur-sm"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
          transition={{ duration: 0.3 }}
        >
          {project.category}
        </motion.span>
        
        <motion.h3 
          className="text-white text-xl md:text-2xl font-bold mb-2 drop-shadow-lg"
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: isHovered ? -5 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {project.title}
        </motion.h3>
        
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-lg p-3 transform origin-bottom"
          initial={{ opacity: 0, y: 40, scaleY: 0 }}
          animate={{ 
            opacity: isHovered ? 1 : 0, 
            y: isHovered ? 0 : 40, 
            scaleY: isHovered ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-700 font-medium text-sm mb-2">Key Features:</p>
          <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
            {project.features.map((feature, index) => (
              <li key={index} className="flex items-center text-xs text-gray-600">
                <svg className="w-3 h-3 mr-1 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                </svg>
                {feature}
              </li>
            ))}
          </ul>
          
          <motion.div 
            className="flex justify-end mt-2"
            whileHover={{ scale: 1.05 }}
          >
            <a href={`#project-${project.id}`} className="text-xs font-medium text-blue-600 hover:text-pink-600 transition-colors">
              View Details →
            </a>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProjectShowcase;