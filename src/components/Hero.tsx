import React from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-indigo-900/20 to-slate-900/40" />
      
      {/* Enhanced Floating Stars Animation */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-200 to-purple-200 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(147, 197, 253, 0.3)`
            }}
          />
        ))}
      </div>

      {/* Nebula-like gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-indigo-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center space-x-2 text-purple-300">
            <Sparkles size={20} className="animate-pulse" />
            <span className="text-sm uppercase tracking-wider">Welcome to my cosmic universe</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-300 via-blue-300 to-indigo-300 bg-clip-text text-transparent animate-fade-in">
            Data Analyst &<br />Web Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            Exploring the infinite cosmos of data and crafting stellar web experiences that illuminate the digital universe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button 
              onClick={() => document.getElementById('data-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-full font-semibold hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25 border border-purple-500/30"
            >
              View Data Projects
            </button>
            <button 
              onClick={() => document.getElementById('web-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-400/25"
            >
              Web Development
            </button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-purple-300 hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;