import React, { useState } from 'react';
import { Globe, Code, Smartphone, ExternalLink, Github, Mic, Video, Brain, Clock, CheckCircle, GraduationCap, Monitor } from 'lucide-react';

const WebProjects = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      title: "Brainr - AI-Powered Learning Companion",
      description: "Full-stack SaaS Learning Management System with conversational AI tutoring, voice-enabled study experiences, and personalized learning journeys. Features secure authentication, subscription management, and custom AI tutor creation.",
      technologies: ["Next.js", "Supabase", "Clerk", "Stripe", "Tailwind CSS", "TypeScript", "Vapi", "shadcn/ui"],
      features: ["AI voice agents", "Secure authentication", "Subscription management", "Custom AI tutors", "Real-time data handling", "Responsive design"],
      icon: <GraduationCap className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800",
      vercelUrl: "https://brainr.vercel.app",
      githubUrl: "https://github.com/cosmic-nutts/brainr",
      type: "SaaS Platform"
    },
    {
      title: "Snipster - Web-Based Screen Recording Tool",
      description: "Lightweight, browser-based screen recording application for quick and seamless video capture. No downloads, extensions, or installations required - fully powered by native browser APIs with client-side video processing.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "MediaRecorder API", "FFmpeg", "Client-side Processing"],
      features: ["One-click recording", "Local video downloads", "No extensions needed", "Client-side processing", "Minimal responsive UI", "Browser-based experience"],
      icon: <Monitor className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/4348401/pexels-photo-4348401.jpeg?auto=compress&cs=tinysrgb&w=800",
      vercelUrl: "https://screen-recorder-nu.vercel.app/sign-in",
      githubUrl: "https://github.com/cosmic-nutts/Screen-recorder",
      type: "Web Application"
    },
    {
      title: "Portfolio Website",
      description: "Modern, galaxy-themed portfolio website showcasing data analysis and web development projects with smooth animations, responsive design, and cosmic aesthetics.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite", "Lucide Icons"],
      features: ["Responsive design", "Smooth animations", "Galaxy theme", "Project showcase", "Contact integration"],
      icon: <Globe className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      vercelUrl: "https://portfolio-galaxy.vercel.app",
      githubUrl: "https://github.com/cosmic-nutts/portfolio-.git",
      type: "Portfolio Site"
    }
  ];

  const ongoingProjects = [
    {
      title: "Kaiwa - AI Interview Platform",
      description: "Advanced AI-powered interview platform that conducts intelligent conversations, evaluates responses, and provides comprehensive feedback for interview preparation and assessment.",
      technologies: ["React", "TypeScript", "AI/ML", "Node.js", "Real-time Processing"],
      features: ["AI-powered interviews", "Real-time feedback", "Performance analytics", "Question generation", "Interview simulation"],
      icon: <Brain className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800",
      vercelUrl: "https://kaiwa-ai-interview.vercel.app",
      githubUrl: "https://github.com/cosmic-nutts/Kaiwa",
      type: "AI Platform",
      progress: 90
    },
    {
      title: "E-Commerce Dashboard",
      description: "Comprehensive e-commerce analytics dashboard with real-time sales tracking, inventory management, and customer insights for business optimization.",
      technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express"],
      features: ["Sales analytics", "Inventory tracking", "Customer insights", "Real-time updates", "Mobile responsive"],
      icon: <Code className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Web Application",
      progress: 70
    }
  ];

  const ProjectCard = ({ project, isOngoing = false }) => (
    <div className="bg-galaxy-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-galaxy-blue/30 hover:border-galaxy-blue/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-galaxy-blue/20">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-galaxy-dark/90 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="text-galaxy-blue">{project.icon}</div>
          <span className="text-xs font-semibold text-white bg-galaxy-dark/80 px-2 py-1 rounded-full border border-galaxy-blue/30">
            {project.type}
          </span>
        </div>
        {isOngoing && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 bg-galaxy-dark/80 px-2 py-1 rounded-full border border-galaxy-blue/30">
              <Clock size={12} className="text-galaxy-blue" />
              <span className="text-xs text-white">{project.progress}%</span>
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-galaxy-light transition-colors duration-300">
          {project.title}
        </h3>
        
        <p className="text-galaxy-light mb-4 leading-relaxed">
          {project.description}
        </p>

        {isOngoing && (
          <div className="mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm text-galaxy-blue">Progress</span>
              <span className="text-sm text-galaxy-light">{project.progress}%</span>
            </div>
            <div className="w-full bg-galaxy-primary/30 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-galaxy-blue to-galaxy-accent h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-galaxy-blue mb-2">Key Features:</h4>
          <ul className="text-sm text-galaxy-light space-y-1">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-galaxy-blue rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-galaxy-blue/40 text-galaxy-light rounded-full border border-galaxy-blue/40"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex space-x-3">
          {project.vercelUrl && (
            <a
              href={project.vercelUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-galaxy-blue hover:text-galaxy-accent transition-colors duration-200"
            >
              <ExternalLink size={16} />
              <span>Live Demo</span>
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-galaxy-light hover:text-white transition-colors duration-200"
            >
              <Github size={16} />
              <span>Code</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section id="web-projects" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-l from-galaxy-blue/20 to-galaxy-accent/20" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-galaxy-light to-galaxy-blue bg-clip-text text-transparent">
            Web Development Projects
          </h2>
          <p className="text-xl text-galaxy-light max-w-3xl mx-auto">
            Innovative applications combining cutting-edge technology with user-centric design
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-galaxy-dark/50 backdrop-blur-sm rounded-full p-1 border border-galaxy-blue/30">
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'completed'
                  ? 'bg-galaxy-blue text-white shadow-lg'
                  : 'text-galaxy-light hover:text-white'
              }`}
            >
              <CheckCircle size={18} />
              <span>Completed Projects</span>
            </button>
            <button
              onClick={() => setActiveTab('ongoing')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'ongoing'
                  ? 'bg-galaxy-blue text-white shadow-lg'
                  : 'text-galaxy-light hover:text-white'
              }`}
            >
              <Clock size={18} />
              <span>Ongoing Projects</span>
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {activeTab === 'completed' 
            ? completedProjects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))
            : ongoingProjects.map((project, index) => (
                <ProjectCard key={index} project={project} isOngoing={true} />
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default WebProjects;