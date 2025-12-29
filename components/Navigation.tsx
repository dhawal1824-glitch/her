
import React from 'react';
import { Heart } from 'lucide-react';

interface NavigationProps {
  scrolled: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ scrolled }) => {
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/70 backdrop-blur-lg py-4 shadow-sm' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          <Heart className={`w-6 h-6 transition-colors duration-300 ${scrolled ? 'text-rose-500' : 'text-slate-100'}`} fill={scrolled ? 'currentColor' : 'none'} />
          <span className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-300 ${scrolled ? 'text-slate-900' : 'text-slate-100'}`}>
            Her Journey
          </span>
        </div>
        
        <div className={`hidden md:flex gap-8 font-medium transition-colors duration-300 ${scrolled ? 'text-slate-600' : 'text-slate-100'}`}>
          <a href="#home" className="hover:text-rose-500 transition-colors">Home</a>
          <a href="#vision" className="hover:text-rose-500 transition-colors">Vision</a>
          <a href="#power" className="hover:text-rose-500 transition-colors">Your Power</a>
          <a href="#letter" className="hover:text-rose-500 transition-colors">A Note for You</a>
        </div>
      </div>
    </nav>
  );
};
