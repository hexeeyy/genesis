
import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Instagram, Facebook, MessageCircle, Send, CheckCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    gsap.fromTo([formRef.current, contactInfoRef.current],
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      }
    );
  }, []);

  const contactInfo = [
    { 
      icon: Mail, 
      label: "Email", 
      value: "genesis.palero@nu-manila.edu.ph",
      action: () => window.open('mailto:genesis.palero@nu-manila.edu.ph')
    },
    { 
      icon: Phone, 
      label: "Viber", 
      value: "+63 912 345 6789",
      action: () => window.open('viber://chat?number=+639123456789')
    },
    { 
      icon: MapPin, 
      label: "Location", 
      value: "National University - Manila",
      action: () => window.open('https://maps.google.com/?q=National+University+Manila')
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      label: "Instagram",
      value: "@genesis.palero",
      action: () => window.open('https://instagram.com/genesis.palero', '_blank')
    },
    {
      icon: Facebook,
      label: "Facebook",
      value: "Genesis Palero Martin",
      action: () => window.open('https://facebook.com/genesis.palero.martin', '_blank')
    },
    {
      icon: MessageCircle,
      label: "Messenger",
      value: "Chat on Messenger",
      action: () => window.open('https://m.me/genesis.palero.martin', '_blank')
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-br from-background to-accent/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6 font-poppins">
            Let's Connect
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-8"></div>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed font-inter">
            Interested in psychology research, collaboration, or just want to chat? 
            I'd love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-foreground mb-6 font-poppins">
                Get in Touch
              </h3>
              <p className="text-muted-foreground leading-relaxed font-inter mb-8">
                Whether you're interested in research collaboration, have questions 
                about psychology, or simply want to connect, I'm always open to 
                meaningful conversations.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div 
                  key={index} 
                  onClick={info.action}
                  className="flex items-center space-x-4 p-4 rounded-xl hover:bg-card border border-transparent hover:border-primary/20 transition-all duration-300 cursor-pointer group"
                >
                  <div className="p-3 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-colors duration-300">
                    <info.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm font-medium font-inter">{info.label}</div>
                    <div className="text-foreground font-medium font-poppins group-hover:text-primary transition-colors duration-300">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Media Links */}
            <div className="pt-8">
              <h4 className="text-lg font-semibold text-foreground mb-4 font-poppins">Social Media</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    onClick={social.action}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 cursor-pointer group"
                  >
                    <social.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
                    <div>
                      <div className="text-muted-foreground text-xs font-inter">{social.label}</div>
                      <div className="text-foreground font-medium font-poppins group-hover:text-primary transition-colors duration-300">{social.value}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className="bg-card border border-border p-8 rounded-2xl shadow-xl">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2 font-inter">
                    First Name
                  </label>
                  <input 
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground transition-all duration-300 hover:border-primary/50 font-poppins"
                    placeholder="John"
                    required
                  />
                </div>
                <div>
                  <label className="block text-foreground text-sm font-medium mb-2 font-inter">
                    Last Name
                  </label>
                  <input 
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground transition-all duration-300 hover:border-primary/50 font-poppins"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-foreground text-sm font-medium mb-2 font-inter">
                  Email
                </label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground transition-all duration-300 hover:border-primary/50 font-poppins"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground text-sm font-medium mb-2 font-inter">
                  Subject
                </label>
                <input 
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground transition-all duration-300 hover:border-primary/50 font-poppins"
                  placeholder="Research Inquiry"
                  required
                />
              </div>

              <div>
                <label className="block text-foreground text-sm font-medium mb-2 font-inter">
                  Message
                </label>
                <textarea 
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:border-primary focus:outline-none text-foreground resize-none transition-all duration-300 hover:border-primary/50 font-poppins"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitted}
                className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 font-inter ${
                  isSubmitted 
                    ? 'bg-green-500 text-white' 
                    : 'bg-primary hover:bg-primary/90 text-primary-foreground hover:scale-105 transform shadow-lg hover:shadow-xl'
                }`}
              >
                {isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
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

export default ContactSection;
