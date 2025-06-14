import React from 'react';
import { ChevronDown, Sparkles, Linkedin, Github, Code, Trophy } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
      color: "hover:text-blue-400"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/cosmic-nutts",
      color: "hover:text-gray-300"
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "LeetCode",
      href: "https://leetcode.com/your-profile",
      color: "hover:text-yellow-400"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "GeeksforGeeks",
      href: "https://auth.geeksforgeeks.org/user/your-profile",
      color: "hover:text-green-400"
    }
  ];

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-galaxy-accent/30 via-galaxy-secondary/20 to-galaxy-dark/40" />
      
      {/* Enhanced Floating Stars Animation */}
      <div className="absolute inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-galaxy-light to-galaxy-blue animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 2 + 1}px`,
              height: `${Math.random() * 2 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              boxShadow: `0 0 ${Math.random() * 10 + 5}px rgba(224, 231, 255, 0.3)`
            }}
          />
        ))}
      </div>

      {/* Nebula-like gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-galaxy-accent/20 to-galaxy-blue/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-galaxy-secondary/20 to-galaxy-accent/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6 inline-flex items-center space-x-2 text-galaxy-light">
            <Sparkles size={20} className="animate-pulse" />
            <span className="text-sm uppercase tracking-wider">Welcome to my cosmic universe</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-galaxy-light via-galaxy-blue to-galaxy-accent bg-clip-text text-transparent animate-fade-in">
            Data Analyst &<br />Web Developer
          </h1>
          
          <p className="text-xl md:text-2xl text-galaxy-light mb-8 max-w-2xl mx-auto leading-relaxed">
            Exploring the infinite cosmos of data and crafting stellar web experiences that illuminate the digital universe
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button 
              onClick={() => document.getElementById('data-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 bg-gradient-to-r from-galaxy-accent to-galaxy-secondary rounded-full font-semibold hover:from-galaxy-blue hover:to-galaxy-accent transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-galaxy-accent/25 border border-galaxy-accent/30"
            >
              View Data Projects
            </button>
            <button 
              onClick={() => document.getElementById('web-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-3 border-2 border-galaxy-accent rounded-full font-semibold hover:bg-galaxy-accent hover:text-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-galaxy-accent/25"
            >
              Web Development
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 mb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`p-3 bg-galaxy-dark/50 rounded-full text-galaxy-light ${link.color} transition-all duration-300 group border border-galaxy-accent/30 hover:border-galaxy-accent/50 hover:transform hover:scale-110`}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-galaxy-light hover:text-white transition-colors duration-300 animate-bounce"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;