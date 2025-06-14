import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const handleResumeDownload = () => {
    window.open('https://drive.google.com/file/d/1q0MI2L7GddVEyRORZanCY85Mndm892Hv/view?usp=drivesdk', '_blank');
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Data Analysis', id: 'data-projects' },
    { label: 'Web Development', id: 'web-projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-galaxy-dark/95 backdrop-blur supports-[backdrop-filter]:bg-galaxy-dark/80 border-b border-galaxy-accent/30' : 'bg-transparent'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-bold bg-gradient-to-r from-galaxy-light to-galaxy-blue bg-clip-text text-transparent">
            Portfolio
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-galaxy-light hover:text-white transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-galaxy-accent to-galaxy-blue group-hover:w-full transition-all duration-300" />
              </button>
            ))}
            <button
              onClick={handleResumeDownload}
              className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-galaxy-accent to-galaxy-blue rounded-full text-white font-medium hover:from-galaxy-blue hover:to-galaxy-accent transition-all duration-300 transform hover:scale-105"
            >
              <Download size={16} />
              <span>Resume</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 bg-galaxy-dark/90 backdrop-blur rounded-lg border border-galaxy-accent/30">
            <div className="flex flex-col space-y-4 p-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-galaxy-light hover:text-white transition-colors duration-200 text-left"
                >
                  {item.label}
                </button>
              ))}
              <button
                onClick={handleResumeDownload}
                className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-galaxy-accent to-galaxy-blue rounded-full text-white font-medium hover:from-galaxy-blue hover:to-galaxy-accent transition-all duration-300 w-fit"
              >
                <Download size={16} />
                <span>Resume</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;