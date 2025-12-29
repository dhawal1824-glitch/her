
import React, { useEffect, useState } from 'react';
import { SectionProps } from '../types';
import { ChevronDown, BarChart3, Globe, Sparkles } from 'lucide-react';

export const Hero: React.FC<SectionProps> = ({ id }) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id={id} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 will-change-transform"
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2044&auto=format&fit=crop')",
            transform: `translateY(${scrollY * 0.4}px) scale(1.1)`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-900/40 to-slate-950/90" />
      </div>

      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center text-white">
        <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-6 md:mb-8 opacity-0 animate-fade-up">
          <span className="flex items-center gap-2 px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-rose-500/20 backdrop-blur-md rounded-full border border-rose-500/30 text-rose-300">
            <BarChart3 size={12} className="md:w-[14px]" /> Future Data Analyst
          </span>
          <span className="flex items-center gap-2 px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-500/30 text-blue-300">
            <Globe size={12} className="md:w-[14px]" /> Global Scholar
          </span>
          <span className="flex items-center gap-2 px-3 md:px-4 py-1.5 text-[10px] md:text-xs font-bold tracking-widest uppercase bg-amber-500/20 backdrop-blur-md rounded-full border border-amber-500/30 text-amber-300">
            <Sparkles size={12} className="md:w-[14px]" /> My Jaan
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight drop-shadow-2xl opacity-0 animate-fade-up delay-200">
          To My Darling, <br />
          <span className="italic font-light opacity-90 text-rose-300 underline decoration-rose-500/30 underline-offset-4 md:underline-offset-8">The World</span> <br />
          <span className="text-rose-400 font-serif">Is Your Stage.</span>
        </h1>
        
        <p className="text-base md:text-xl font-light max-w-2xl mx-auto opacity-0 animate-fade-up delay-300 leading-relaxed mb-8 md:mb-10 drop-shadow-lg px-4">
          “From analyzing complex data to navigating new countries... I see a girl who is brave enough to choose growth, even when the path is difficult. D is so proud of you, sweetheart.”
        </p>
        
        <div className="flex flex-col items-center gap-4 animate-bounce mt-8 md:mt-12 opacity-0 animate-fade-up delay-500">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.3em] font-medium opacity-60">Scroll to see your power</p>
          <ChevronDown className="w-5 h-5 md:w-6 md:h-6 opacity-60 text-rose-400" />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-full h-16 md:h-24 fill-slate-50">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};
