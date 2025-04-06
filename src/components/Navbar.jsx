import React, { useState } from 'react';
import { motion } from 'framer-motion';
// import { Link } from 'react-scroll';
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation links
  const navLinks = [
    { title: "HOME", href: "#home" },
    { title: "ABOUT ME", href: "#about" },
    { title: "PROJECTS", href: "#projects" },
    { title: "SKILLS", href: "#skills" },
    { title: "CONTACTS", href: "#contacts" },
  ];

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <motion.a 
              href="#home" 
              className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              VIKAS || DEVLPR
            </motion.a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="px-3 py-2 text-gray-700 hover:text-indigo-600 transition-colors duration-300"
                whileHover={{ 
                  scale: 1.1,
                  color: "#4F46E5",
                  transition: { duration: 0.2 } 
                }}
              >
                {link.title}
              </motion.a>
            ))}
            <motion.button
              className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white font-medium"
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "#4338CA",
                boxShadow: "0px 4px 8px rgba(79, 70, 229, 0.25)"
              }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              RESUME
               
            </motion.button>
          </div>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
              whileTap={{ scale: 0.95 }}
            >
              <svg 
                className="h-6 w-6" 
                xmlns="http://www.w3.org/2000/svg" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-white border-t border-gray-200"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 rounded-md"
                whileHover={{ x: 5, color: "#4F46E5" }}
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </motion.a>
            ))}
           
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;