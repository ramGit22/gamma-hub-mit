import React from 'react';
import { motion } from 'framer-motion';

// Define the type for video data
interface VideoData {
  id: string;
  title: string;
  description: string;
}

const VideoSection: React.FC = () => {
  // Sample data, replace with your actual YouTube videos
  const videos: VideoData[] = [
    {
      id: "j7UzxA8H9NM", // Replace with your actual YouTube video IDs
      title: "40 Hz + Rain Sound - 1 Hour",
      description: "Relax with 40 Hz gamma pulses and soothing rain sounds."
    },
    {
      id: "gztf6AbOqt8", // Replace with your actual YouTube video IDs
      title: "40 Hz Deep Focus - 2 Hours",
      description: "Enhanced focus with 40 Hz gamma frequency stimulation."
    },
    {
      id: "vKhphmvA5_8", // Replace with your actual YouTube video IDs
      title: "40 Hz Sleep Meditation - 8 Hours",
      description: "Gentle 40 Hz pulses for improved sleep quality."
    },
    {
      id: "pHIHBiCx6Wo", // Replace with your actual YouTube video IDs
      title: "40 Hz Pure Tone - 30 Minutes",
      description: "Pure 40 Hz gamma frequency for brain health support."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">Explore the 40 Hz Audio Collection</h2>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
        >
          {videos.map((video) => (
            <motion.div key={video.id} className="video-card" variants={item}>
              <div className="relative pb-[56.25%] h-0 overflow-hidden">
                <iframe 
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-sans font-medium text-xl text-text-dark mb-2">{video.title}</h3>
                <p className="text-text-medium">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="mt-12 text-center">
          <a 
            href="https://www.youtube.com/" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View More on YouTube
          </a>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;