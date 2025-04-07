import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  // Social media links
  const socialLinks = [
    { name: "GitHub", icon: "github", url: 'https://github.com/Carry107' },
    { name: "LinkedIn", icon: "linkedin", url: 'https://www.linkedin.com/in/vikas-vishwakarma-9255632a6/'},
    { name: "Twitter", icon: "twitter", url: 'https://x.com/VikasVishw28702'},
    { name: "Instagram", icon: "instagram", url: 'https://www.instagram.com/vikasdevlpr00/'},
  ];

  return (
    <footer className="w-full bg-gradient-to-r from-indigo-900 via-purple-800 to-indigo-700 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="flex flex-col space-y-4">
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              <span className="font-bold text-3xl bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300">
                VIKAS || DEVLPR
              </span>
            </motion.div>
            <p className="text-gray-200 max-w-sm">
              Passionate about creating beautiful and functional web experiences. Specialized in React, UI/UX design and modern web technologies.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Quick Links</h3>
            <div className="flex flex-col space-y-2">
              {["Home", "About", "Projects", "Skills", "Contact"].map((link, index) => (
                <motion.a
                  key={index}
                  href={`#${link.toLowerCase()}`}
                  className="text-gray-200 hover:text-white"
                  whileHover={{ x: 5, color: "#ffffff" }}
                >
                  {link}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Contact & Social */}
          <div className="flex flex-col space-y-4">
            <h3 className="text-xl font-semibold">Connect</h3>
            <p className="text-gray-200">
              Feel free to reach out for collaborations or just a friendly chat
            </p>
            <p className="text-gray-200">
              <span className="font-semibold">Email:</span> vikasdevlpr00@gmail.com
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  <SocialIcon name={social.icon} />
                </motion.a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-400 to-transparent my-8"></div>
        
        {/* Copyright */}
        <div className="text-center text-gray-300 text-sm">
          <p>© {currentYear} VIKAS || DEVLPR. All rights reserved.</p>
          <p className="mt-2">Designed and built with 💖 passion</p>
        </div>
      </div>
    </footer>
  );
};

// Social icon component
const SocialIcon = ({ name }) => {
  switch (name) {
    case 'github':
      return (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      );
    case 'linkedin':
      return (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      );
    case 'twitter':
      return (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.159 1.2A4.92 4.92 0 0012.238 8.7c0 .39.033.765.114 1.122a13.94 13.94 0 01-10.133-5.16 4.929 4.929 0 001.522 6.574 4.85 4.85 0 01-2.23-.618v.06a4.923 4.923 0 003.95 4.827 4.823 4.823 0 01-2.224.084 4.92 4.92 0 004.6 3.42A9.88 9.88 0 010 19.54a13.94 13.94 0 007.548 2.212c9.142 0 14.307-7.72 13.995-14.646A10.025 10.025 0 0024 4.59z"/>
        </svg>
      );
    case 'instagram':
      return (
        <svg className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      );
    default:
      return null;
  }
};

export default Footer;