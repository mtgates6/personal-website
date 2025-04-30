
import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Portfolio</h2>
            <p className="text-gray-400 max-w-md">
              Creating meaningful digital experiences through thoughtful design and development.
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end">
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-portfolio-blue transition-colors">
                <Github size={20} />
              </a>
              <a href="#" className="hover:text-portfolio-blue transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-portfolio-blue transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:hello@example.com" className="hover:text-portfolio-blue transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              © {currentYear} Your Name. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
