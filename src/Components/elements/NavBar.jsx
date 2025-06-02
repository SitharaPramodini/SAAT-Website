// src/components/elements/NavBar.jsx
import React, { useState, useEffect } from 'react';
import logo from "/assets/logos/SAAT_Logo.png";
import { Menu, X } from 'lucide-react';

const navItems = [
  { href: "#home", text: "Home" },
  { href: "#domain", text: "Domain" },
  { href: "#milestone", text: "Milestones" },
  { href: "#documents", text: "Documents" },
  { href: "#presentation", text: "Presentations" },
  { href: "#team", text: "About Us" },
  { href: "#contact", text: "Contact Us" }
];

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.substring(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom > 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    setActiveSection(id);
    
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -50;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${scrolled ? 'py-2 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' : 'py-4 bg-transparent'}`}>
      <div className="w-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => handleNavClick(e, 'home')} 
              className="flex items-center gap-2 transition-transform duration-200 hover:scale-105"
            >
              <img src={logo} alt="SAAT Logo" className="w-8 h-8 rounded-full shadow-sm sm:w-10 sm:h-10" />
              <div className="text-lg font-bold text-blue-800 sm:text-xl whitespace-nowrap">
                S A A T
              </div>
            </a>
          </div>

          {/* Desktop Navigation - Hidden on mobile */}
          <div className="items-center hidden space-x-1 lg:flex">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, sectionId)}
                  className={`
                    relative px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg group
                    ${isActive 
                      ? 'text-blue-600 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600'
                    }
                  `}
                >
                  {item.text}
                  <span 
                    className={`
                      absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 transition-all duration-300
                      ${isActive ? 'w-full opacity-100' : 'w-0 opacity-0 group-hover:w-full group-hover:opacity-100'}
                    `}
                  />
                </a>
              );
            })}
          </div>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex">
            <a
              href="https://www.saat.42web.io"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-sm font-semibold text-white transition-all duration-300 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 hover:scale-105 hover:shadow-lg"
            >
              Explore SAAT
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-gray-700 transition-colors duration-200 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="px-2 pt-2 pb-3 mt-2 space-y-1 border border-gray-200 rounded-lg shadow-lg bg-white/95 backdrop-blur-md">
            {navItems.map((item, index) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              
              return (
                <a
                  key={index}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, sectionId)}
                  className={`
                    block px-3 py-2 text-base font-medium transition-all duration-200 rounded-md
                    ${isActive 
                      ? 'text-blue-600 bg-blue-50 font-semibold' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                    }
                  `}
                >
                  {item.text}
                </a>
              );
            })}
            
            {/* Mobile CTA Button */}
            <div className="pt-2 mt-2 border-t border-gray-200">
              <a
                href="https://www.saat.42web.io"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full px-3 py-2 text-center text-white transition-all duration-300 rounded-md bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
              >
                Explore SAAT
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};