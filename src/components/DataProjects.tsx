import React from 'react';
import { BarChart3, Database, TrendingUp, Eye, ExternalLink, Building2 } from 'lucide-react';

const DataProjects = () => {
  const projects = [
    {
      title: "AtliQ Grands - Revenue Insights",
      description: "Comprehensive revenue analysis dashboard for AtliQ Grands hospitality chain, providing deep insights into booking patterns, revenue trends, and operational performance metrics.",
      technologies: ["Power BI", "DAX", "Power Query", "Data Modeling", "SQL"],
      features: ["Revenue trend analysis", "Booking pattern insights", "Occupancy rate tracking", "Performance KPIs", "Interactive dashboards"],
      icon: <Building2 className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=800",
      githubUrl: "https://github.com/cosmic-nutts/AtliQ-Grands---Revenue-Insights",
      type: "Power BI Dashboard"
    },
    {
      title: "Sales Performance Dashboard",
      description: "Interactive Power BI dashboard analyzing sales trends, regional performance, and customer segmentation with real-time data updates and comprehensive KPI tracking.",
      technologies: ["Power BI", "SQL Server", "DAX", "Power Query"],
      features: ["Real-time data refresh", "Interactive visualizations", "Drill-down capabilities", "Mobile responsive"],
      icon: <BarChart3 className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Power BI Dashboard"
    },
    {
      title: "Financial Data Analysis",
      description: "Advanced Excel workbook with automated financial modeling, variance analysis, and predictive forecasting for strategic budget planning and financial insights.",
      technologies: ["Excel", "VBA", "Power Pivot", "Statistical Analysis"],
      features: ["Automated calculations", "Dynamic charts", "Scenario modeling", "Executive summary"],
      icon: <TrendingUp className="w-8 h-8" />,
      image: "https://images.pexels.com/photos/187041/pexels-photo-187041.jpeg?auto=compress&cs=tinysrgb&w=800",
      type: "Excel Analysis"
    }
  ];

  return (
    <section id="data-projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Data Analysis Projects
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Transforming complex datasets into actionable business insights through advanced analytics
          </p>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-700/30 hover:border-purple-500/50 transition-all duration-300 group hover:transform hover:scale-105 shadow-lg hover:shadow-purple-500/20"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 to-transparent" />
                <div className="absolute top-4 left-4 flex items-center space-x-2">
                  <div className="text-purple-400">{project.icon}</div>
                  <span className="text-xs font-semibold text-white bg-slate-950/80 px-2 py-1 rounded-full border border-purple-600/30">
                    {project.type}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-purple-300 transition-colors duration-300">
                  {project.title}
                </h3>
                
                <p className="text-purple-100 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
                  <ul className="text-sm text-purple-100 space-y-1">
                    {project.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs bg-purple-900/40 text-purple-200 rounded-full border border-purple-700/40"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex space-x-3">
                  <button className="flex items-center space-x-2 text-sm text-purple-200 hover:text-white transition-colors duration-200">
                    <Eye size={16} />
                    <span>View Details</span>
                  </button>
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DataProjects;