import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="section-title text-center">What is 40 Hz Gamma Stimulation?</h2>
          
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="w-full flex justify-center">
                <motion.svg 
                  width="200" 
                  height="200" 
                  viewBox="0 0 200 200" 
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                  viewport={{ once: true }}
                >
                  {/* Brain outline */}
                  <path 
                    d="M100,180 C55,180 20,150 20,100 C20,50 55,20 100,20 C145,20 180,50 180,100 C180,150 145,180 100,180 Z" 
                    fill="none" 
                    stroke="#4A90E2" 
                    strokeWidth="2" 
                    strokeLinecap="round"
                  />
                  
                  {/* Brain internal details */}
                  <path 
                    d="M40,100 C60,80 70,120 90,100 C110,80 120,120 140,100 C160,80 150,140 130,130 C110,120 90,140 70,130 C50,120 60,80 40,100 Z" 
                    fill="none" 
                    stroke="#4A90E2" 
                    strokeWidth="1.5" 
                    strokeLinecap="round"
                  />
                  
                  {/* Gamma wave */}
                  <path 
                    d="M30,140 C40,120 45,160 50,140 C55,120 60,160 65,140 C70,120 75,160 80,140 C85,120 90,160 95,140 C100,120 105,160 110,140 C115,120 120,160 125,140 C130,120 135,160 140,140 C145,120 150,160 155,140 C160,120 165,160 170,140" 
                    fill="none" 
                    stroke="#4A90E2" 
                    strokeWidth="2" 
                    strokeDasharray="2,2" 
                    className="animate-pulse"
                  />
                </motion.svg>
              </div>
            </div>
            
            <div className="md:w-2/3">
              <p className="text-text-medium text-lg leading-relaxed mb-6">
                Inspired by MIT research, 40 Hz gamma frequency stimulation may support brain health in Alzheimer's patients by reducing amyloid-beta and enhancing cognitive function. Our audio combines 40 Hz pulses with calming rain sounds for a relaxing experience.
              </p>
              
              <p className="text-text-medium text-lg leading-relaxed mb-6">
                The 40 Hz frequency corresponds to the gamma brainwave band, which is associated with higher-order cognitive functions including attention, perception, and memory formation.
              </p>
              
              <div className="bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                <p className="text-sm text-text-medium">
                  Read more about the research: 
                  <a 
                    href="https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0278413" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline ml-1"
                  >
                    PLOS ONE paper (DOI: 10.1371/journal.pone.0278413)
                  </a>
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;