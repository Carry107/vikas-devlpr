import React from 'react';
import { motion } from 'framer-motion';

const AboutMe = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  // Skills data
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["React.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript (ES6+)"]
    },
    {
      title: "Backend",
      skills: ["Node.js", "Express.js", "Python"]
    },
    {
      title: "Tools & Workflow",
      skills: ["Git", "GitHub", "REST APIs", "VS Code", "Postman"]
    },
    {
      title: "Soft Skills",
      skills: ["Team collaboration", "Problem-solving", "Growth mindset"]
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Profile Photo and Visual Elements */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative h-full flex items-center justify-center">
              <div className="relative z-10 overflow-hidden rounded-2xl shadow-xl border-2 border-indigo-100">
                <img 
                  src="public/images/vikas-dev.png" 
                  alt="Vikas Dev" 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-4 -left-4 w-72 h-72 bg-gradient-to-br from-indigo-200 to-purple-100 rounded-full opacity-70 filter blur-xl"></div>
              <div className="absolute bottom-4 -right-4 w-72 h-72 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-full opacity-70 filter blur-xl"></div>
              
              {/* Floating skill bubbles */}
              <motion.div 
                className="absolute -left-6 top-24 z-10 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-indigo-600"
                animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 4 } }}
              >
                React.js
              </motion.div>
              <motion.div 
                className="absolute -right-6 top-1/2 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-indigo-600 z-10"
                animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 3.5, delay: 0.5 } }}
              >
                Node.js
              </motion.div>
              <motion.div 
                className="absolute -left-6 z-10 bottom-24 bg-white shadow-lg rounded-full px-4 py-2 text-sm font-medium text-indigo-600"
                animate={{ y: [0, -10, 0], transition: { repeat: Infinity, duration: 3, delay: 1 } }}
              >
                Tailwind CSS
              </motion.div>
            </div>
          </motion.div>
          
          {/* Text Content */}
          <motion.div variants={itemVariants} className="flex flex-col justify-center">
            <motion.div
              className="inline-block mb-4"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent text-lg font-semibold">
                About Me
              </span>
            </motion.div>
            
            <motion.h2 
              className="text-4xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              Hello! I'm <span className="text-indigo-600">Vikas</span>
            </motion.h2>
            
            <motion.div 
              className="space-y-4 text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              <p>
                A passionate and solution-oriented <span className="font-semibold">Full Stack Developer</span> with a strong command over <span className="font-semibold">HTML, CSS, JavaScript, Python, Node.js, React.js</span>, and <span className="font-semibold">Tailwind CSS</span>. I specialize in building scalable, performant, and intuitive web applications that seamlessly bridge user experience with powerful backend logic.
              </p>
              
              <p>
                With a keen eye for detail and a user-first mindset, I enjoy translating complex problems into elegant, efficient code. Whether it's crafting responsive front-end interfaces using <span className="font-semibold">React</span> and <span className="font-semibold">Tailwind</span>, or engineering robust RESTful APIs with <span className="font-semibold">Node.js</span> and <span className="font-semibold">Python</span>, I bring a holistic approach to every project I work on.
              </p>
              
              <p>
                Driven by curiosity and continuous learning, I thrive in fast-paced environments where innovation meets execution. I'm equally comfortable collaborating in cross-functional teams or taking complete ownership of a project—from ideation to deployment.
              </p>
              
              <p>
                Currently, I'm focused on building modern, responsive, and accessible web applications that not only look great but perform flawlessly across all devices.
              </p>
              
              <p>
                If you're looking for someone who can turn ideas into interactive experiences backed by clean code and modern technologies — I'm ready to build with you.
              </p>
            </motion.div>

            {/* Skills Section */}
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <h3 className="text-xl font-bold mb-4 text-gray-800 flex items-center">
                <svg className="w-5 h-5 mr-2 text-indigo-600" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                </svg>
                Skills at a Glance
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.div 
                    key={index}
                    className="bg-white p-4 rounded-lg shadow-sm border border-gray-100"
                    whileHover={{ y: -5, boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)" }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <h4 className="font-semibold text-indigo-600 mb-2">{category.title}:</h4>
                    <ul className="space-y-1">
                      {category.skills.map((skill, i) => (
                        <li key={i} className="flex items-center">
                          <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                          </svg>
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* CTA Button */}
            <motion.div 
              className="mt-8"
              variants={itemVariants}
            >
              <motion.a
                href="#contact"
                className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg px-6 py-3 shadow-md"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 10px 25px -5px rgba(79, 70, 229, 0.4)"
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Let's Work Together
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutMe;