import React, { useState } from 'react';
import { BarChart3, Database, TrendingUp, Eye, ExternalLink, Building2, Clock, CheckCircle } from 'lucide-react';

const DataProjects = () => {
  const [activeTab, setActiveTab] = useState('completed');

  const completedProjects = [
    {
      title: "AtliQ Grands - Revenue Insights",
      description: "Comprehensive revenue analysis dashboard for AtliQ Grands hospitality chain, providing deep insights into booking patterns, revenue trends, and operational performance metrics.",
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "SQL"],
      features: ["Revenue trend analysis", "Booking pattern insights", "Occupancy rate tracking", "Performance KPIs", "Interactive dashboards"],
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/cosmic-nutts/AtliQ-Grands---Revenue-Insights",
      vercelUrl: "https://atliq-grands-revenue.vercel.app",
      type: "Power BI Dashboard"
    }
  ];

  const ongoingProjects = [];

  const ProjectCard = ({ project, isOngoing = false }) => (
    <div className="bg-galaxy-dark/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-galaxy-accent/30 hover:border-galaxy-accent/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-galaxy-accent/20">
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-galaxy-dark/90 to-transparent" />
        <div className="absolute top-4 left-4 flex items-center space-x-2">
          <div className="text-galaxy-accent">{project.icon}</div>
          <span className="text-xs font-semibold text-white bg-galaxy-dark/80 px-2 py-1 rounded-full border border-galaxy-accent/30">
            {project.type}
          </span>
        </div>
        {isOngoing && (
          <div className="absolute top-4 right-4">
            <div className="flex items-center space-x-1 bg-galaxy-dark/80 px-2 py-1 rounded-full border border-galaxy-accent/30">
              <Clock size={12} className="text-galaxy-accent" />
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
              <span className="text-sm text-galaxy-accent">Progress</span>
              <span className="text-sm text-galaxy-light">{project.progress}%</span>
            </div>
            <div className="w-full bg-galaxy-primary/30 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-galaxy-accent to-galaxy-blue h-2 rounded-full transition-all duration-300"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}

        <div className="mb-4">
          <h4 className="text-sm font-semibold text-galaxy-accent mb-2">Key Features:</h4>
          <ul className="text-sm text-galaxy-light space-y-1">
            {project.features.map((feature, featureIndex) => (
              <li key={featureIndex} className="flex items-center">
                <div className="w-1.5 h-1.5 bg-galaxy-accent rounded-full mr-2" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, techIndex) => (
            <span
              key={techIndex}
              className="px-2 py-1 text-xs bg-galaxy-accent/40 text-galaxy-light rounded-full border border-galaxy-accent/40"
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
              className="flex items-center space-x-2 text-sm text-galaxy-accent hover:text-galaxy-blue transition-colors duration-200"
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
              <ExternalLink size={16} />
              <span>GitHub</span>
            </a>
          )}
          {!project.vercelUrl && !project.githubUrl && (
            <button className="flex items-center space-x-2 text-sm text-galaxy-light hover:text-white transition-colors duration-200">
              <Eye size={16} />
              <span>View Details</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );

  const EmptyState = () => (
    <div className="col-span-full text-center py-16">
      <div className="text-galaxy-accent mb-4">
        <Clock size={48} className="mx-auto" />
      </div>
      <h3 className="text-xl font-semibold text-white mb-2">No Ongoing Projects</h3>
      <p className="text-galaxy-light">
        Currently focusing on new data analysis initiatives. Check back soon for updates!
      </p>
    </div>
  );

  return (
    <section id="data-projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-galaxy-light to-galaxy-blue bg-clip-text text-transparent">
            Data Analysis Projects
          </h2>
          <p className="text-xl text-galaxy-light max-w-3xl mx-auto">
            Transforming complex datasets into actionable business insights through advanced analytics
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-galaxy-dark/50 backdrop-blur-sm rounded-full p-1 border border-galaxy-accent/30">
            <button
              onClick={() => setActiveTab('completed')}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'completed'
                  ? 'bg-galaxy-accent text-white shadow-lg'
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
                  ? 'bg-galaxy-accent text-white shadow-lg'
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
            : ongoingProjects.length > 0 
              ? ongoingProjects.map((project, index) => (
                  <ProjectCard key={index} project={project} isOngoing={true} />
                ))
              : <EmptyState />
          }
        </div>
      </div>
    </section>
  );
};

export default DataProjects;