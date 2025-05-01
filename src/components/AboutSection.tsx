
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
              <img src="/golfing.jpeg" alt="about" className="w-full h-full object-cover" />
              <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                About Image
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <h3 className="text-2xl font-bold mb-4">My Journey</h3>
            <p className="text-gray-700 mb-4">
            I started my journey in software development in 2019, driven by a curiosity for how things work and a love of problem-solving. 
            With a strong foundation in Java, Spring Boot, and backend architecture, I’ve spent the last several years building scalable,
            production-grade systems that power real-world applications.
            </p>
            <p className="text-gray-700 mb-4">
            As my career has evolved, I’ve grown increasingly passionate about web development — particularly creating accessible, 
            performant user experiences using technologies like Next.js, React, and Tailwind CSS.
             Whether it’s crafting clean APIs, managing containerized deployments, or improving frontend performance, 
             I bring a systems-thinking mindset to every project.
            </p>
            <p className="text-gray-700 mb-4">
            I’ve worked on a wide range of applications, from small business tools to microservice platforms running in Docker and Kubernetes environments. 
            I love digging into new challenges, learning new tools, and building things that are useful, reliable, and user-friendly.
            </p>
            <p className="text-gray-700 mb-6">
            When I'm not coding, you'll probably find me exploring new recipes in the kitchen, gaming, watching sports or golfing. 
            I believe having diverse interests fuels creativity and keeps me grounded.
            </p>
            
            <a
              href="/MatthewGatesResume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 bg-portfolio-blue hover:bg-portfolio-darkBlue text-white rounded"
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
