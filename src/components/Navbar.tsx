
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <a href="#" className="text-xl font-bold text-portfolio-blue">Matthew Gates</a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a 
              key={item.label} 
              href={item.href}
              className="text-gray-700 hover:text-portfolio-blue transition-colors duration-200"
            >
              {item.label}
            </a>
          ))}
          <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue">
            <a href="#contact">Get in Touch</a>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white pb-4 px-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label}>
                <a 
                  href={item.href} 
                  className="block py-2 text-gray-700 hover:text-portfolio-blue"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button className="w-full mt-2 bg-portfolio-blue hover:bg-portfolio-darkBlue">
                <a href="#contact" onClick={() => setIsMenuOpen(false)}>Get in Touch</a>
              </Button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
