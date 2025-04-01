import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-text-dark py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-text-light">
              Created by 40 Hz Healing Hub | Inspired by MIT Research | © {currentYear}
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a 
              href="https://www.youtube.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors duration-300"
              aria-label="YouTube Channel"
            >
              <FontAwesomeIcon icon={faYoutube} size="lg" />
            </a>
            <a 
              href="https://twitter.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
              aria-label="Twitter Profile"
            >
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a 
              href="https://instagram.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors duration-300"
              aria-label="Instagram Profile"
            >
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
            <a 
              href="mailto:contact@example.com" 
              className="text-white hover:text-primary transition-colors duration-300"
              aria-label="Email Contact"
            >
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;