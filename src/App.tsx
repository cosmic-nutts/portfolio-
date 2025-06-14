import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import DataProjects from './components/DataProjects';
import WebProjects from './components/WebProjects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CursorStars from './components/CursorStars';

function App() {
  return (
    <div className="min-h-screen bg-galaxy-dark text-white relative overflow-hidden">
      {/* Deep Galaxy Background */}
      <div className="fixed inset-0 bg-gradient-to-br from-galaxy-primary via-galaxy-secondary to-galaxy-dark pointer-events-none" />
      <div className="fixed inset-0 bg-gradient-to-t from-galaxy-accent/30 via-transparent to-galaxy-blue/20 pointer-events-none" />
      
      {/* Animated Galaxy Stars Background */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(120)].map((_, i) => (
          <div
            key={i}
            className="absolute w-0.5 h-0.5 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              opacity: Math.random() * 0.8 + 0.2
            }}
          />
        ))}
      </div>

      {/* Cursor Following Stars */}
      <CursorStars />
      
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <DataProjects />
        <WebProjects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;