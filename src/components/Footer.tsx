
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-card border-t border-border">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="font-inter text-sm">Made with</span>
            <Heart className="w-4 h-4 text-sage fill-current" />
            <span className="font-inter text-sm">by Genesis Martin</span>
          </div>
          
          <div className="space-y-2">
            <p className="text-lg font-medium text-foreground font-display">
              Genesis Clerence Palero Martin
            </p>
            <p className="text-sm text-muted-foreground font-inter">
              Psychology Student • National University - Manila
            </p>
          </div>
          
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground font-inter">
              © 2024 Genesis Martin. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
