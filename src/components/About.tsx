import React from 'react';
import { Rocket, Target, Zap } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Data Analyst",
      description: "Transforming complex datasets into strategic insights using Power BI, Excel, and SQL to drive informed decision-making"
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: "Web Developer",
      description: "Creating responsive, user-centric applications with modern frameworks and technologies for optimal user experiences"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Innovation Catalyst",
      description: "Bridging analytical thinking with creative problem-solving to deliver impactful solutions across diverse domains"
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-galaxy-light to-galaxy-blue bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-galaxy-light max-w-3xl mx-auto leading-relaxed">
            I'm an enthusiastic professional who combines analytical expertise with technical innovation. With a strong foundation in electrical engineering principles and a passion for technology, I excel at translating complex challenges into elegant, data-driven solutions that create real value.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-galaxy-dark/50 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-accent/30 hover:border-galaxy-accent/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-galaxy-accent/20"
            >
              <div className="text-galaxy-accent mb-4 group-hover:text-galaxy-blue transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3 text-white">
                {item.title}
              </h3>
              <p className="text-galaxy-light leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;