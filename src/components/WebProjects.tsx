import React from 'react';
import { Globe, Code, Smartphone, ExternalLink, Github, Mic, Video, Brain } from 'lucide-react';

const WebProjects = () => {
  const projects = [
    {
      title: "Kaiwa - AI Interview Platform",
      description: "Advanced AI-powered interview platform that conducts intelligent conversations, evaluates responses, and provides comprehensive feedback for interview preparation and assessment.",
      technologies: ["React", "TypeScript", "AI/ML", "Node.js", "Real-time Processing"],
      features: ["AI-powered interviews", "Real-time feedback", "Performance analytics", "Question generation", "Interview simulation"],
      icon: <Brain className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/cosmic-nutts/Kaiwa",
      type: "AI Platform"
    },
    {
      title: "Snipster - Screen Recorder",
      description: "Powerful screen recording and sharing application with intuitive interface, multiple recording modes, and seamless sharing capabilities for content creators and professionals.",
      technologies: ["Electron", "JavaScript", "WebRTC", "File System API", "Media Recording"],
      features: ["Screen recording", "Audio capture", "Instant sharing", "Multiple formats", "Cloud integration"],
      icon: <Video className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/cosmic-nutts/Screen-recorder",
      type: "Desktop Application"
    },
    {
      title: "Portfolio Website",
      description: "Modern, space-themed portfolio website showcasing data analysis and web development projects with smooth animations, responsive design, and cosmic aesthetics.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      features: ["Responsive design", "Smooth animations", "Space theme", "Project showcase", "Contact integration"],
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      liveUrl: "#",
      githubUrl: "https://github.com/cosmic-nutts/portfolio-.git",
      type: "Portfolio Site"
    }
  ];

  return (
    <section id="web-projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-indigo-900/20 to-purple-900/20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Web Development Projects
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Innovative applications combining cutting-edge technology with user-centric design
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-indigo-700/30 hover:border-indigo-500/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-indigo-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="text-indigo-400">{project.icon}</div>
                  <span className="text-xs font-semibold text-white bg-slate-950/80 px-2 py-1 rounded-full border border-indigo-600/30">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-indigo-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-indigo-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-purple-100 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-indigo-900/40 text-indigo-200 rounded-full border border-indigo-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <a
                    href={project.liveUrl}
                    className="flex items-center space-x-2 text-sm text-indigo-400 hover:text-indigo-300 transition-colors duration-200"
                  >
                    <ExternalLink size={16} />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-sm text-purple-200 hover:text-white transition-colors duration-200"
                  >
                    <Github size={16} />
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WebProjects;