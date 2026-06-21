import { Leaf, Github, Linkedin, Mail, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const quickLinks = [
  { label: 'Home', href: '/' },
  { label: 'Problem', href: '/problem' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'Hardware', href: '/hardware' },
  { label: 'Demo', href: '/demo' },
];

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="section-container py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-primary-foreground/10 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-highlight" />
              </div>
              <span className="font-display font-bold text-xl">
                CropHealth<span className="text-highlight">AI</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed">
              Revolutionizing agriculture with AI-driven crop health monitoring. 
              Early disease detection for sustainable farming and food security.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-display font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
                { icon: Github, href: '#', label: 'GitHub' },
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Mail, href: '#', label: 'Email' },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-primary-foreground/20 transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-primary-foreground/20 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-primary-foreground/60">
            © 2024 CropHealthAI. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60 flex items-center gap-1">
            Made with <Heart className="w-4 h-4 text-highlight" /> for sustainable agriculture
          </p>
        </div>
      </div>
    </footer>
  );
};
