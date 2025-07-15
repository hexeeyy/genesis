
import { Heart, Github, Linkedin, Mail, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: Instagram, 
      href: "https://instagram.com/genesis.palero", 
      label: "Instagram" 
    },
    { 
      icon: Facebook, 
      href: "https://facebook.com/genesis.palero.martin", 
      label: "Facebook" 
    },
    { 
      icon: MessageCircle, 
      href: "https://m.me/genesis.palero.martin", 
      label: "Messenger" 
    },
    { 
      icon: Mail, 
      href: "mailto:genesis.palero@nu-manila.edu.ph", 
      label: "Email" 
    }
  ];

  return (
    <footer className="bg-gradient-to-r from-muted/30 via-accent/10 to-primary/5 border-t border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="text-2xl font-bold text-foreground mb-2 font-poppins">心理学</div>
            <p className="text-muted-foreground font-inter">Understanding minds, changing lives</p>
            <p className="text-sm text-muted-foreground mt-1 font-inter">Genesis Clerence Palero Martin</p>
          </div>

          <div className="flex space-x-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="p-3 bg-background border border-border rounded-full hover:bg-primary hover:text-primary-foreground text-muted-foreground transition-all duration-300 hover:scale-110 transform hover:shadow-lg"
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground flex items-center justify-center font-inter">
            Made with <Heart className="w-4 h-4 text-primary mx-1 animate-pulse" /> for psychological research and discovery
          </p>
          <p className="text-muted-foreground text-sm mt-2 font-inter">
            © 2024 Genesis Palero Martin. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
