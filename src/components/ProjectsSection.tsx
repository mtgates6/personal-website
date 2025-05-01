
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Vine Vault",
      description: "An online wine cellar management system with inventory tracking and wine recommendations.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: "/vinevault.jpeg",
      githubUrl: "https://github.com/mtgates6/VineVault",
      liveUrl: "#",
    },
    {
      title: "Workout Watch",
      description: "An interactive fitness tracker with workout logging, progress tracking, and social sharing.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/workout.jpeg",
      githubUrl: "https://github.com/mtgates6/workout-watch-app",
      liveUrl: "#",
    },
    {
      title: "Dinner Date",
      description: "A restraunt recommendation app that suggests dining options based on user preferences and locations.",
      tags: ["Python", "Flask", "HTML/CSS", "Geolocation"],
      image: "/dinnerdate.jpeg",
      githubUrl: "https://github.com/mtgates6/dinner-date",
      liveUrl: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio showcasing projects, skills, and professional experience.",
      tags: ["React", "Tailwind CSS", "Typescript", "Vite"],
      image: "/portfolio.jpeg",
      githubUrl: "https://github.com/mtgates6/personal-website",
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
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain" 
                />
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
