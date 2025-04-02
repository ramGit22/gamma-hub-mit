import React from 'react'
import { motion } from 'framer-motion'

// Define the type for video data
interface VideoData {
  id: string
  title: string
  description: string
}

const VideoSection: React.FC = () => {
  // Sample data, replace with your actual YouTube videos
  const videos: VideoData[] = [
    {
      id: 'Nwu135X-2eM', // Replace with your actual YouTube video IDs
      title: '40 Hz + Sine Wave',
      description:
        'Enhance focus with 40 Hz Gamma Frequency with Sine Wave | MIT Alzheimer’s Research Audio Experiment',
    },
    {
      id: 'Qf9dJ5l4lFA', // Replace with your actual YouTube video IDs
      title: '40 Hz + White Noise',
      description:
        '40 Hz Gamma Frequency Audio for Alzheimer’s Research | Mild AD Dementia Stimulation Study, MIT',
    },
    {
      id: 'l5OCM5txSqo', // Replace with your actual YouTube video IDs
      title: '40 Hz + Pink Noise',
      description: 'Gentle 40 Hz Gamma Frequency with Pink Noise',
    },
    {
      id: 'ACtv2VKWRUg', // Replace with your actual YouTube video IDs
      title: '40 Hz + Brown Noise',
      description:
        '40 Hz Gamma Frequency with Brown Noise | MIT Alzheimer’s Research Audio Experiment',
    },
  ]

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section id="videos" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-title text-center mb-12">
          Explore the 40 Hz Audio Collection
        </h2>

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
                <h3 className="font-sans font-medium text-xl text-text-dark mb-2">
                  {video.title}
                </h3>
                <p className="text-text-medium">{video.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <a
            href="https://www.youtube.com/@40HzHealingHub"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            View More on YouTube
          </a>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
