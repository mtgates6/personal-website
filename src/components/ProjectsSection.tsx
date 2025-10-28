
import React from 'react';
import { Github, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { HoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Workout Watch",
      description: "An interactive fitness tracker with workout logging, progress tracking, and social sharing.",
      tags: ["React", "TypeScript", "Tailwind CSS", "Supabase"],
      image: "/workout.jpeg",
      githubUrl: "https://github.com/mtgates6/workout-watch-app",
      liveUrl: "https://workout-watch-app.lovable.app/",
    },
    {
      title: "Tic Tac Toe Game",
      description: "A real time multiplayer game, featuring dynamic win detection with live updates.",
      tags: ["React", "Typescript", "Vite", "DynamoDB", "AWS Amplify"],
      image: "/tictactoe.png",
      githubUrl: "https://github.com/mtgates6/tactactoe",
      liveUrl: "https://main.d2n4qkjltbjx1n.amplifyapp.com/",
    },
    {
      title: "Vine Vault",
      description: "An online wine cellar management system with inventory tracking and wine recommendations.",
      tags: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      image: "/vinevault.jpeg",
      githubUrl: "https://github.com/mtgates6/VineVault",
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
              className="overflow-hidden card-hover animate-fade-in transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="h-48 bg-gray-200 relative overflow-hidden group">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-portfolio-blue/0 group-hover:bg-portfolio-blue/20 transition-colors duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <div className="text-white font-bold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {project.title}
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap mb-4 gap-2">
                  {project.tags.map(tag => (
                    <HoverCard key={tag} openDelay={200} closeDelay={100}>
                      <HoverCardTrigger>
                        <span className="text-xs font-medium bg-portfolio-blue/10 text-portfolio-blue px-2 py-1 rounded cursor-pointer hover:bg-portfolio-blue/20 transition-colors duration-200">
                          {tag}
                        </span>
                      </HoverCardTrigger>
                      <HoverCardContent className="w-auto p-2">
                        <div className="text-sm">{`Technology: ${tag}`}</div>
                      </HoverCardContent>
                    </HoverCard>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1 hover:bg-gray-100 transition-colors duration-200"
                  >
                    <Github size={16} />
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">Code</a>
                  </Button>
                  {project.liveUrl && project.liveUrl !== "#" && (
                    <Button size="sm" className="flex items-center gap-1 bg-portfolio-blue hover:bg-portfolio-darkBlue">
                      <ExternalLink size={16} />
                      <a href={project.liveUrl}>Live Demo</a>
                    </Button>
                  )}
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
