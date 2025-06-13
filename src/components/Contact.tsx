import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "your.email@example.com",
      href: "mailto:your.email@example.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Your City, Country",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "#"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "#"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-indigo-900/30" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-purple-300 to-blue-300 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Ready to collaborate on your next cosmic project? Let's explore the possibilities together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-semibold mb-8 text-white">Get In Touch</h3>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-4 text-purple-100 hover:text-white transition-colors duration-200 group"
                >
                  <div className="text-purple-400 group-hover:text-blue-400 transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-purple-300">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="p-3 bg-slate-900/50 rounded-full text-purple-300 hover:text-white hover:bg-purple-600 transition-all duration-300 group border border-purple-700/30 hover:border-purple-500/50"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-slate-900/40 backdrop-blur-sm rounded-2xl p-8 border border-purple-700/30 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-purple-200 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-purple-600/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-purple-200 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-950/60 border border-purple-600/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-purple-200 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950/60 border border-purple-600/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-colors duration-200"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-purple-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-950/60 border border-purple-600/30 rounded-lg text-white placeholder-purple-300 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 resize-none transition-colors duration-200"
                  placeholder="Tell me about your cosmic project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-purple-500/25"
              >
                <Send size={18} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;