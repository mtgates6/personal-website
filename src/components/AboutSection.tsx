
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Here you can learn a bit more about my background and experience.
        </p>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <div className="aspect-square max-w-md mx-auto bg-gray-200 rounded-lg overflow-hidden">
              <img src="/about-image.jpg" alt="about" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                About Image
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-700 mb-4">
              I started my journey in web development in [year]. With a background in [your background], 
              I've always been passionate about creating digital experiences that are both beautiful and functional.
            </p>
            <p className="text-gray-700 mb-4">
              Throughout my career, I've worked on a variety of projects, from small business websites to complex 
              web applications. I love tackling challenging problems and finding elegant solutions.
            </p>
            <p className="text-gray-700 mb-6">
              When I'm not coding, you can find me [your hobbies/interests]. I believe that having diverse 
              interests helps me bring fresh perspectives to my work.
            </p>
            
            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 bg-portfolio-blue hover:bg-portfolio-darkBlue"
            >
              <FileText size={16} />
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
