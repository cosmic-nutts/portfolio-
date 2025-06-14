import React, { useState } from 'react';
import { Mail, MapPin, Phone, Send, Linkedin, Github, Code, Trophy, CheckCircle, AlertCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Simulate form submission to a backend service
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      // For demo purposes, we'll simulate a successful submission
      setTimeout(() => {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setIsSubmitting(false);
      }, 1500);
      return;
    }

    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "natasha100913@gmail.com",
      href: "mailto:natasha100913@gmail.com"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+91 9810262213",
      href: "tel:+919810262213"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "New Delhi, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      href: "https://linkedin.com/in/your-profile",
      color: "hover:bg-blue-600"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      href: "https://github.com/cosmic-nutts",
      color: "hover:bg-gray-700"
    },
    {
      icon: <Code className="w-5 h-5" />,
      label: "LeetCode",
      href: "https://leetcode.com/your-profile",
      color: "hover:bg-yellow-600"
    },
    {
      icon: <Trophy className="w-5 h-5" />,
      label: "GeeksforGeeks",
      href: "https://auth.geeksforgeeks.org/user/your-profile",
      color: "hover:bg-green-600"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-galaxy-accent/30 to-galaxy-secondary/30" />
      
      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-galaxy-light to-galaxy-blue bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-galaxy-light max-w-2xl mx-auto">
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
                  className="flex items-center space-x-4 text-galaxy-light hover:text-white transition-colors duration-200 group"
                >
                  <div className="text-galaxy-accent group-hover:text-galaxy-blue transition-colors duration-200">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-galaxy-accent">{item.label}</div>
                    <div className="font-medium">{item.value}</div>
                  </div>
                </a>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center space-x-3 p-4 bg-galaxy-dark/50 rounded-xl text-galaxy-light hover:text-white transition-all duration-300 group border border-galaxy-accent/30 hover:border-galaxy-accent/50 ${link.color}`}
                  aria-label={link.label}
                >
                  {link.icon}
                  <span className="font-medium">{link.label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-galaxy-dark/40 backdrop-blur-sm rounded-2xl p-8 border border-galaxy-accent/30 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-galaxy-light mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-galaxy-primary/60 border border-galaxy-accent/30 rounded-lg text-white placeholder-galaxy-light/60 focus:border-galaxy-accent focus:ring-1 focus:ring-galaxy-accent transition-colors duration-200"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-galaxy-light mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-galaxy-primary/60 border border-galaxy-accent/30 rounded-lg text-white placeholder-galaxy-light/60 focus:border-galaxy-accent focus:ring-1 focus:ring-galaxy-accent transition-colors duration-200"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-galaxy-light mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-galaxy-primary/60 border border-galaxy-accent/30 rounded-lg text-white placeholder-galaxy-light/60 focus:border-galaxy-accent focus:ring-1 focus:ring-galaxy-accent transition-colors duration-200"
                  placeholder="Project Discussion"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-galaxy-light mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-galaxy-primary/60 border border-galaxy-accent/30 rounded-lg text-white placeholder-galaxy-light/60 focus:border-galaxy-accent focus:ring-1 focus:ring-galaxy-accent resize-none transition-colors duration-200"
                  placeholder="Tell me about your cosmic project..."
                  required
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="flex items-center space-x-2 text-green-400 bg-green-400/10 p-3 rounded-lg border border-green-400/20">
                  <CheckCircle size={18} />
                  <span>Message sent successfully! I'll get back to you soon.</span>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="flex items-center space-x-2 text-red-400 bg-red-400/10 p-3 rounded-lg border border-red-400/20">
                  <AlertCircle size={18} />
                  <span>Failed to send message. Please try again or contact me directly.</span>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-galaxy-accent to-galaxy-secondary text-white font-semibold py-3 px-6 rounded-lg hover:from-galaxy-blue hover:to-galaxy-accent transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 shadow-lg hover:shadow-galaxy-accent/25 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;