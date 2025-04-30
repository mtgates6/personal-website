
import React from 'react';
import { Code, Layout, Database, Server, Settings, Briefcase } from 'lucide-react';

const SkillsSection = () => {
  const skills = [
    {
      title: "Frontend Development",
      icon: Layout,
      description: "HTML5, CSS3, JavaScript, React, Next.js, Tailwind CSS",
    },
    {
      title: "Backend Development",
      icon: Server,
      description: "Node.js, Express, Python, Django, RESTful APIs",
    },
    {
      title: "Database Management",
      icon: Database,
      description: "MongoDB, PostgreSQL, MySQL, Firebase",
    },
    {
      title: "Programming Languages",
      icon: Code,
      description: "JavaScript, TypeScript, Python, Java, C++",
    },
    {
      title: "Tools & Platforms",
      icon: Settings,
      description: "Git, GitHub, VS Code, Docker, AWS, Vercel",
    },
    {
      title: "Professional Skills",
      icon: Briefcase,
      description: "Problem Solving, Team Collaboration, Project Management",
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="section-title">My Skills</h2>
        <p className="section-subtitle">
          These are the technologies and tools I work with to bring ideas to life.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div 
              key={skill.title}
              className="bg-white p-6 rounded-lg shadow-md card-hover animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <div className="flex flex-col items-center text-center">
                <skill.icon className="skill-icon" />
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
