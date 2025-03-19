
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from './ThemeToggle';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Work', path: '/work' },
    { name: 'Thoughts', path: '/thoughts' },
    { name: 'CV', path: '/cv' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="w-full py-4 px-6 md:px-10 flex justify-between items-center bg-background border-b border-border">
      <Link to="/" className="flex items-center gap-2 no-bg">
        <div className="relative w-12 h-12 rounded-full bg-brand-yellow flex items-center justify-center animate-fade-in border-2 border-primary">
          <img 
            src="/thatsmood-v9/assets/gi-logo.svg" 
            alt="Ginestra Ferraro - UI/UX Designer" 
            className="h-8 w-8"
          />
        </div>
        <span className="text-lg font-medium text-foreground">UX Designer</span>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className={cn(
              "text-sm font-medium transition-colors hover:text-foreground relative group",
              isActive(item.path) 
                ? "text-foreground" 
                : "text-muted-foreground"
            )}
          >
            {item.name}
            <span 
              className={cn(
                "absolute -bottom-1 left-0 w-full h-0.5 transition-all duration-300",
                isActive(item.path) 
                  ? "bg-brand-yellow opacity-100"
                  : "bg-brand-yellow opacity-0 group-hover:opacity-100"
              )}
            />
          </Link>
        ))}
        <ThemeToggle />
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="md:hidden flex items-center gap-4">
        <ThemeToggle />
        <button 
          onClick={toggleMenu} 
          className="text-foreground"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 right-0 left-0 bg-background z-50 border-b border-border animate-fade-in">
          <div className="flex flex-col py-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-6 py-3 text-sm font-medium transition-colors hover:bg-accent",
                  isActive(item.path) 
                    ? "text-foreground bg-accent" 
                    : "text-muted-foreground"
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
                {isActive(item.path) && (
                  <span className="absolute left-0 w-1 h-full bg-brand-yellow" />
                )}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
