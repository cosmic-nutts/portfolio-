import React from 'react';
import { BarChart3, Code, Database, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Power BI", "Excel", "SQL", "Data Modeling", "DAX", "Power Query", "Statistical Analysis", "Data Visualization"]
    },
    {
      title: "Web Development",
      icon: <Code className="w-6 h-6" />,
      skills: ["React", "TypeScript", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Node.js", "Responsive Design"]
    },
    {
      title: "Database Technologies",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "PostgreSQL", "SQL Server", "Data Warehousing", "ETL Processes", "Database Design"]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "VS Code", "Vite", "npm", "REST APIs", "JSON", "Version Control", "Agile Methodology"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-galaxy-accent/20 to-galaxy-secondary/20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-galaxy-light to-galaxy-blue bg-clip-text text-transparent">
            Technical Constellation
          </h2>
          <p className="text-xl text-galaxy-light max-w-2xl mx-auto">
            A diverse skill set spanning data analysis, web development, and modern technology stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-galaxy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-accent/30 hover:border-galaxy-accent/50 transition-all duration-300 group shadow-lg hover:shadow-galaxy-accent/20"
            >
              <div className="flex items-center mb-6">
                <div className="text-galaxy-accent mr-3 group-hover:text-galaxy-blue transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-galaxy-primary/60 rounded-full text-sm text-galaxy-light border border-galaxy-accent/30 hover:border-galaxy-accent/50 hover:text-white transition-all duration-200 hover:bg-galaxy-accent/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;