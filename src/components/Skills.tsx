import React from 'react';
import { BarChart3, Code, Database, Wrench, Brain, Shield, CreditCard, Cloud } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["JavaScript", "TypeScript", "Python", "C/C++", "SQL", "HTML5", "CSS3"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Code className="w-6 h-6" />,
      skills: ["Next.js", "React", "Tailwind CSS", "shadcn/ui", "Radix UI", "Zod", "FFmpeg.js", "Node.js"]
    },
    {
      title: "Data Analysis & Visualization",
      icon: <BarChart3 className="w-6 h-6" />,
      skills: ["Power BI", "Excel", "DAX", "Power Query", "Pandas", "NumPy", "Matplotlib", "Seaborn", "EDA", "Statistical Analysis"]
    },
    {
      title: "Database & Backend",
      icon: <Database className="w-6 h-6" />,
      skills: ["Supabase", "PostgreSQL", "MySQL", "SQL Server", "Firebase", "REST APIs", "Data Warehousing", "ETL Processes"]
    },
    {
      title: "Authentication & Security",
      icon: <Shield className="w-6 h-6" />,
      skills: ["Clerk", "Supabase Auth", "OAuth", "JWT", "Access Control", "User Management"]
    },
    {
      title: "AI & Voice Technology",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Vapi", "OpenAI APIs", "LLM Integration", "Conversational AI", "Voice Processing", "AI/ML"]
    },
    {
      title: "Payments & SaaS",
      icon: <CreditCard className="w-6 h-6" />,
      skills: ["Stripe", "Subscription Management", "Billing Systems", "SaaS Architecture", "Payment Processing"]
    },
    {
      title: "Development Tools & Platforms",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["Git", "GitHub", "VS Code", "Vercel", "Google Colab", "Jupyter", "Sentry", "Version Control"]
    },
    {
      title: "UI/UX & Design",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["Responsive Design", "Component Architecture", "Accessible UI", "Dashboard Design", "KPI Visualization", "Minimal Design"]
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
          <p className="text-xl text-galaxy-light max-w-3xl mx-auto">
            A comprehensive skill set spanning full-stack development, data analysis, AI integration, and modern technology stacks
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-galaxy-dark/40 backdrop-blur-sm rounded-2xl p-6 border border-galaxy-accent/30 hover:border-galaxy-accent/50 transition-all duration-300 group shadow-lg hover:shadow-galaxy-accent/20 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                <div className="text-galaxy-accent mr-3 group-hover:text-galaxy-blue transition-colors duration-300">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2.5 py-1 bg-galaxy-primary/60 rounded-full text-xs text-galaxy-light border border-galaxy-accent/30 hover:border-galaxy-accent/50 hover:text-white transition-all duration-200 hover:bg-galaxy-accent/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills Highlight */}
        <div className="mt-12 text-center">
          <div className="bg-galaxy-dark/30 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-blue/30 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-galaxy-blue">
              Core Competencies
            </h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-galaxy-light">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-galaxy-accent rounded-full" />
                <span>Full-Stack Development (Frontend + Backend)</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-galaxy-accent rounded-full" />
                <span>Data-Driven Decision Making & Analytics</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-galaxy-accent rounded-full" />
                <span>SaaS Architecture & Subscription Models</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-galaxy-accent rounded-full" />
                <span>AI Integration & Conversational Interfaces</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-galaxy-accent rounded-full" />
                <span>Real-time Applications & Media Processing</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-galaxy-accent rounded-full" />
                <span>Performance Optimization & Error Monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;