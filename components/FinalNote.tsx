
import React from 'react';
import { SectionProps } from '../types';
import { Heart } from 'lucide-react';

export const FinalNote: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-32 md:py-48 bg-slate-50 relative overflow-hidden text-center">
      {/* Background Decorative */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-rose-200/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-rose-500 rounded-full text-white mb-10 shadow-xl shadow-rose-200 animate-pulse">
          <Heart className="w-10 h-10" fill="currentColor" />
        </div>
        
        <h2 className="font-serif text-4xl md:text-6xl font-bold text-slate-900 mb-10 leading-tight">
          Beside Your <span className="text-rose-600">Dreams</span>, <br />
          <span className="italic font-light text-rose-500">My Baby Girl.</span>
        </h2>
        
        <div className="space-y-8 text-lg md:text-xl text-slate-700 font-light leading-relaxed max-w-2xl mx-auto">
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            “You don’t owe me anything for my support, Jaan. I give it freely because I believe in you, and because seeing you become strong, confident, and fulfilled genuinely matters to me.”
          </p>
          <p className="font-serif italic text-2xl md:text-3xl text-slate-900 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            “Whatever you become, wherever you go, Dhawal will always wish the best for you—and I will always be someone who stood beside your dreams.”
          </p>
        </div>

        <div className="mt-20">
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="px-10 py-4 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl active:scale-95"
          >
            I Love You, My Darling
          </button>
        </div>
      </div>
    </section>
  );
};
