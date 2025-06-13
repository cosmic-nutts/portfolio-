import React from 'react';
import { Sparkles } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 border-t border-purple-700/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span className="text-xl font-bold bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          <p className="text-purple-300 mb-6">
            Crafting data-driven solutions and stellar web experiences across the digital cosmos
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-purple-300 mb-6">
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors duration-200"
            >
              About
            </button>
            <button 
              onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors duration-200"
            >
              Skills
            </button>
            <button 
              onClick={() => document.getElementById('data-projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors duration-200"
            >
              Projects
            </button>
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="hover:text-white transition-colors duration-200"
            >
              Contact
            </button>
          </div>
          
          <div className="pt-6 border-t border-purple-700/30">
            <p className="text-purple-400 text-sm">
              © 2025 Portfolio. Designed with passion for the infinite cosmos of possibilities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;