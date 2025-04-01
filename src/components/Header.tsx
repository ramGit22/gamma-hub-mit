import React from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import brainImage from '../assets/brain.jpg';

const Header: React.FC = () => {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-blue-100 to-white relative overflow-hidden">
      {/* Brain Image Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-200/80 to-white/90 z-10"></div>
        <div className="h-full w-full overflow-hidden opacity-60">
          <img 
            src={brainImage} 
            alt="Brain visualization" 
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
      
      {/* Background Brain Wave Animation */}
      <div className="absolute inset-0 z-10 opacity-30">
        <svg 
          className="w-full h-full" 
          width="100%" 
          height="100%" 
          viewBox="0 0 1440 800" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M0,400 C240,360 480,480 720,400 C960,320 1200,440 1440,400 L1440,800 L0,800 Z" 
            fill="#4A90E2" 
            fillOpacity="0.2"
          />
          <path 
            d="M0,600 C240,560 480,640 720,600 C960,560 1200,640 1440,600 L1440,800 L0,800 Z" 
            fill="#4A90E2" 
            fillOpacity="0.1"
          />
          <path 
            className="animate-pulse" 
            d="M0,100 Q120,150 240,100 T480,100 T720,100 T960,100 T1200,100 T1440,100 V0 H0 Z" 
            fill="#4A90E2" 
            fillOpacity="0.05"
          />
        </svg>
      </div>
      
      <div className="container mx-auto text-center z-20 px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-sans font-bold text-text-dark mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          40 Hz Gamma Healing
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-sans font-normal text-primary mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Audio Inspired by MIT Research
        </motion.h2>
        
        <motion.p 
          className="text-lg md:text-xl font-body text-text-medium max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Experience Soothing Audio Designed to Support Brain Health and Relaxation
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link 
            to="videos" 
            smooth={true} 
            duration={800} 
            className="btn-primary inline-block"
          >
            Listen Now
          </Link>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;