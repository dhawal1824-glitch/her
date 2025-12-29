
import React from 'react';
import { SectionProps } from '../types';
import { Anchor, Wind, HeartPulse } from 'lucide-react';

export const ThePromise: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 md:py-32 bg-slate-900 text-white relative">
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 opacity-0 animate-fade-up">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">A Promise of <span className="text-rose-400">Honesty & Presence</span></h2>
          <p className="text-slate-400 text-lg font-light leading-relaxed">
            “I don’t promise perfection. But I promise to be a quiet strength beside you, never a limit to your wings.”
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {[
            { 
              icon: Anchor, 
              title: "Quiet Strength", 
              text: "When the storms of life hit, I’ll be the steady ground beside you, not a fear in your mind." 
            },
            { 
              icon: Wind, 
              title: "No Limits", 
              text: "I don’t want to tie you down. I want to love you in a way that helps you grow into who you're meant to be." 
            },
            { 
              icon: HeartPulse, 
              title: "Unconditional Support", 
              text: "My care is not conditional on distance, timing, or outcomes. I respect your pace and your choices." 
            }
          ].map((item, idx) => (
            <div 
              key={idx} 
              className={`group p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 opacity-0 animate-fade-up delay-${(idx + 1) * 100}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-rose-500/20 flex items-center justify-center text-rose-400 mb-6 group-hover:scale-110 transition-transform">
                <item.icon className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-serif font-bold mb-4">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed font-light">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 p-12 rounded-[2.5rem] bg-gradient-to-br from-rose-500/20 to-purple-500/20 border border-white/10 text-center opacity-0 animate-scale-in delay-500">
          <p className="text-2xl md:text-3xl font-serif italic text-rose-100 max-w-2xl mx-auto leading-snug">
            “When you’re tired, I’ll remind you to breathe. <br className="hidden md:block"/>
            When you doubt yourself, I’ll remind you of your strength.”
          </p>
        </div>
      </div>
    </section>
  );
};
