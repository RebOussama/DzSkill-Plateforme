import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ResponsiveMenu = ({ isOpen }) => {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.5 }}
          className="absolute top-20 left-1/2 w-1/2 h-screen z-50 lg:hidden"
        >
          <div className="text-xl font-semibold uppercase bg-primary text-white py-3 m-6 rounded-3xl bg-purple">
            <ul className="flex flex-col justify-center items-center gap-10">
              <li>
                <a href="#home" className="hover:text-gray-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-gray-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#login" className="hover:text-gray-300">
                  Login
                </a>
              </li>
              <li>
                <a href="#signup" className="hover:text-gray-300">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
