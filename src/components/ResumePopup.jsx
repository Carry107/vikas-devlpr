import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const ResumePopup = ({resume}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  // Popup khule hone par scrolling rokne ke liye
  useEffect(() => {
    if (isPopupOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isPopupOpen]);

  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <button onClick={openPopup} className="text-white">
          {resume}
        </button>
      </nav>

      {/* Popup */}
      {isPopupOpen && (
        <>
          {/* Background blur effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-md z-40"
            onClick={closePopup}
          />
          {/* Popup content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div className="bg-white p-4 rounded-lg shadow-lg relative max-w-4xl w-full mx-4">
              {/* Close button */}
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                onClick={closePopup}
              >
                ❌
              </button>
              <div className="flex flex-col items-center">
                {/* JPG image */}
                <img
                  src="public/vikas-resume.png" // Aapki JPG file ka path
                  alt="Resume"
                  className="w-full h-auto max-h-[500px] object-contain"
                />
                {/* Download button */}
                <div className="self-start mt-4">
                  <a
                    href="/resume.jpg" // Download ke liye JPG file ka path
                    download
                    className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-2 rounded"
                  >
                    Download Resume
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default ResumePopup;