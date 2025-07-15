
import { Heart, Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" }
  ];

  return (
    <footer className="bg-japanese-dark border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="text-2xl font-bold text-gradient mb-2">ポートフォリオ</div>
            <p className="text-japanese-gray">Crafting digital experiences with passion</p>
          </div>

          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="p-3 bg-white/5 rounded-full hover:bg-japanese-red/20 text-japanese-gray hover:text-japanese-red transition-all duration-300 group"
              >
                <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              </a>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-japanese-gray flex items-center justify-center">
            Made with <Heart className="w-4 h-4 text-japanese-red mx-1" /> using React & GSAP
          </p>
          <p className="text-japanese-gray text-sm mt-2">
            © 2024 Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
