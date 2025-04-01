import React from 'react';
import Header from './components/Header';
import About from './components/About';
import VideoSection from './components/VideoSection';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <VideoSection />
      <Footer />
    </div>
  );
};

export default App;