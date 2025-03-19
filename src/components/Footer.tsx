
import React from 'react';
import { Github, Twitter, Linkedin, Mail, Wifi } from 'lucide-react';

const Footer = () => {
  const year = new Date().getFullYear();
  
  return (
    <footer className="w-full bg-background border-t border-border py-8 mt-auto">
      <div className="container max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="relative w-12 h-12 rounded-full bg-brand-yellow border-2 border-primary flex items-center justify-center animate-fade-in">
              <img 
                src="./assets/gi-logo.svg" 
                alt="Ginestra Ferraro - UI/UX Designer" 
                className="h-8 w-8"
              />
            </div>
            <span className="text-sm font-medium text-foreground">UX Designer</span>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href="https://github.com/ginestra" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ginestra on GitHub"
              className="text-foreground hover:text-brand-dark transition-colors"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://mastodon.social/@ginez_17" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ginestra on Mastodon"
              className="text-foreground hover:text-brand-dark transition-colors"
            >
              <Wifi size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ginestraferraro/" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Ginestra Ferraro's LinkedIn profile"
              className="text-foreground hover:text-brand-dark transition-colors"
            >
              <Linkedin size={20} />
            </a>
            {/* <a 
              href="mailto:contact@example.com" 
              aria-label="Email"
              className="text-foreground hover:text-brand-dark transition-colors"
            >
              <Mail size={20} />
            </a> */}
          </div>
          
          <p className="text-sm text-foreground">
            © {year} / gi / UX Designer / All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
