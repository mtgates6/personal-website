
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from '@/components/ui/navigation-menu';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setScrolled(scrollY > 50);

      // Determine active section based on scroll position
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      for (const sectionId of [...sections].reverse()) {
        const section = document.getElementById(sectionId);
        if (section && scrollY >= section.offsetTop - 100) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' }
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      scrolled ? "bg-white/95 backdrop-blur-md shadow-md" : "bg-white/90 backdrop-blur-sm"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center h-16">
        <a 
          href="#" 
          className="text-xl font-bold text-portfolio-blue transition-colors duration-300 hover:text-portfolio-darkBlue"
        >
          Matthew Gates
        </a>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="flex items-center gap-6">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.label}>
                <a 
                  href={item.href}
                  className={cn(
                    "text-gray-700 hover:text-portfolio-blue transition-all duration-300 relative px-2 py-1",
                    activeSection === item.href.substring(1) && "text-portfolio-blue font-medium"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ 
                      behavior: 'smooth'
                    });
                    setActiveSection(item.href.substring(1));
                  }}
                >
                  {item.label}
                  {activeSection === item.href.substring(1) && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-portfolio-blue transform origin-left animate-fade-in" />
                  )}
                </a>
              </NavigationMenuItem>
            ))}
            <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue transition-all duration-300 hover:scale-105">
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector('#contact')?.scrollIntoView({ 
                    behavior: 'smooth'
                  });
                  setActiveSection('contact');
                }}
              >
                Get in Touch
              </a>
            </Button>
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 hover:text-portfolio-blue transition-colors duration-200" 
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation with smooth animation */}
      <div 
        className={cn(
          "md:hidden bg-white overflow-hidden transition-all duration-300 ease-in-out",
          isMenuOpen ? "max-h-64 opacity-100 shadow-md" : "max-h-0 opacity-0"
        )}
      >
        <nav className="pb-4 px-4">
          <ul className="flex flex-col gap-2">
            {navItems.map((item) => (
              <li key={item.label} className="transform transition-transform duration-300 hover:-translate-x-1">
                <a 
                  href={item.href} 
                  className={cn(
                    "block py-2 text-gray-700 hover:text-portfolio-blue transition-colors duration-200",
                    activeSection === item.href.substring(1) && "text-portfolio-blue font-medium"
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector(item.href)?.scrollIntoView({ 
                      behavior: 'smooth'
                    });
                    setIsMenuOpen(false);
                    setActiveSection(item.href.substring(1));
                  }}
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Button 
                className="w-full mt-2 bg-portfolio-blue hover:bg-portfolio-darkBlue transition-all duration-300"
              >
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector('#contact')?.scrollIntoView({ 
                      behavior: 'smooth'
                    });
                    setIsMenuOpen(false);
                    setActiveSection('contact');
                  }}
                >
                  Get in Touch
                </a>
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
