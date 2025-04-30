
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-portfolio-blue">Your Name</span>
              <br />
              <span className="text-3xl md:text-4xl lg:text-5xl">I build things for the web</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl">
              I'm a web developer specializing in building exceptional digital experiences.
              Currently, I'm focused on building accessible, human-centered products.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-portfolio-blue hover:bg-portfolio-darkBlue text-white">
                <a href="#projects" className="flex items-center">
                  View my work <ArrowRight size={16} className="ml-2" />
                </a>
              </Button>
              <Button variant="outline" className="border-portfolio-blue text-portfolio-blue hover:bg-portfolio-blue/10">
                <a href="#contact">Get in touch</a>
              </Button>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center lg:justify-end animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 bg-portfolio-blue/10 rounded-full"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-56 h-56 md:w-72 md:h-72 bg-gray-200 rounded-full overflow-hidden">
                  {/* Replace with your actual profile image */}
                  <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                    Profile Image
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
