import React from 'react';
import { Sparkles, Linkedin, Github, Code, Trophy } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/natasha-yadav-3a486b289/"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/cosmic-nutts"
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "LeetCode",
      href: "https://leetcode.com/u/cosmic_enough/"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "GeeksforGeeks",
      href: "https://www.geeksforgeeks.org/user/natashauxjh/"
    }
  ];

  return (
    <footer className="py-12 border-t border-galaxy-accent/30 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-galaxy-dark to-transparent" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-5 h-5 text-galaxy-accent" />
            <span className="text-xl font-bold bg-gradient-to-r from-galaxy-light to-galaxy-blue bg-clip-text text-transparent">
              Portfolio
            </span>
          </div>
          
          <p className="text-galaxy-light mb-6">
            Crafting data-driven solutions and stellar web experiences across the digital cosmos
          </p>
          
          <div className="flex justify-center space-x-8 text-sm text-galaxy-light mb-6">
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

          {/* Social Links */}
          <div className="flex justify-center space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-galaxy-dark/50 rounded-full text-galaxy-light hover:text-white hover:bg-galaxy-accent transition-all duration-300 group border border-galaxy-accent/30 hover:border-galaxy-accent/50"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          
          <div className="pt-6 border-t border-galaxy-accent/30">
            <p className="text-gray-300 text-sm">
              © 2025 Portfolio. Designed with passion for the infinite cosmos of possibilities.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;