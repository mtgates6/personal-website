
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with product listings, shopping cart, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Task Management App",
      description: "A productivity tool for organizing tasks, setting priorities, and tracking progress.",
      tags: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather information with forecasts, radar maps, and location-based data.",
      tags: ["JavaScript", "APIs", "Chart.js", "Geolocation"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects, skills, and professional experience.",
      tags: ["React", "Tailwind CSS", "Framer Motion", "Next.js"],
      image: "/placeholder.svg",
      githubUrl: "#",
      liveUrl: "#",
    },
  ];

  return (
    <section id="projects" className="bg-gray-50 section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Projects</h2>
        <p className="section-subtitle">
          Here are some of my recent projects. Each one was an opportunity to learn and grow.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="overflow-hidden card-hover animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-48 bg-gray-200 relative">
                {/* Replace with actual project images */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  Project Image
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs font-medium bg-portfolio-blue/10 text-portfolio-blue px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" className="flex items-center gap-1">
                    <Github size={16} />
                    <a href={project.githubUrl}>Code</a>
                  </Button>
                  <Button size="sm" className="flex items-center gap-1 bg-portfolio-blue hover:bg-portfolio-darkBlue">
                    <ExternalLink size={16} />
                    <a href={project.liveUrl}>Live Demo</a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
