
import React from 'react';
import { SectionProps } from '../types';
import { Database, Plane, Binary, GraduationCap } from 'lucide-react';

export const CharacterSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-slate-900">
          <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
          </pattern>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="space-y-6 md:space-y-8 order-2 lg:order-1 text-center lg:text-left">
            <div className="opacity-0 animate-fade-up">
              <span className="text-rose-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4 block">The Visionary</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                Your Dreams, <br className="hidden md:block" />
                <span className="text-rose-600 italic">Across Borders</span>
              </h2>
              <div className="w-16 md:w-20 h-1 md:h-1.5 bg-rose-500 rounded-full mb-6 md:mb-8 mx-auto lg:mx-0" />
            </div>
            
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-light italic opacity-0 animate-fade-up delay-100">
              “Seeing you dream big about becoming a <strong>Data Analyst</strong> and wanting to <strong>study abroad</strong> doesn’t scare me—it makes me proud. It shows the depth of your character, Jaan.”
            </p>
            
            <div className="grid gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-1 text-left">
              {[
                { 
                  icon: Database, 
                  title: "Future Data Analyst", 
                  text: "Turning complex numbers into insights. Your logical mind is your greatest superpower.",
                  color: "bg-blue-50 text-blue-600"
                },
                { 
                  icon: Plane, 
                  title: "Global Ambition", 
                  text: "The world is your campus. Studying abroad is just the beginning of your journey.",
                  color: "bg-emerald-50 text-emerald-600"
                },
                { 
                  icon: Binary, 
                  title: "Analytical Brilliance", 
                  text: "Mastering the language of data to earn your place in the world.",
                  color: "bg-purple-50 text-purple-600"
                }
              ].map((item, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-4 p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 opacity-0 animate-scale-in delay-${(idx + 1) * 100}`}
                >
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-xs md:text-sm leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative group order-1 lg:order-2 max-w-md mx-auto lg:max-w-none opacity-0 animate-scale-in">
            <div className="absolute -top-6 -left-6 md:-top-10 md:-left-10 w-24 h-24 md:w-40 md:h-40 bg-rose-200 rounded-full blur-2xl md:blur-3xl opacity-30 animate-pulse" />
            <div className="absolute -bottom-6 -right-6 md:-bottom-10 md:-right-10 w-24 h-24 md:w-40 md:h-40 bg-blue-200 rounded-full blur-2xl md:blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative">
              <div className="bg-white p-3 pb-16 md:p-4 md:pb-20 rounded-lg shadow-xl border border-slate-200 transform md:rotate-1 group-hover:rotate-0 transition-transform duration-700 ease-out">
                <div className="relative aspect-[3/4] rounded-sm overflow-hidden bg-slate-100 shadow-inner">
                  <img 
                    src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    alt="The girl with the world in her eyes"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                </div>
                
                <div className="mt-6 md:mt-10 text-center relative">
                   <p className="font-handwriting text-3xl md:text-4xl text-slate-800">My Jaan</p>
                   <p className="text-[10px] uppercase tracking-[0.2em] md:tracking-[0.3em] text-slate-400 mt-2 md:mt-3 font-black">Future Data Analyst • 2025</p>
                </div>
              </div>

              <div className="absolute top-2 -left-2 md:top-4 md:-left-6 bg-white text-slate-900 px-3 py-1.5 md:px-4 md:py-2 rounded-full shadow-lg border border-slate-100 transform -rotate-12 font-bold text-[10px] md:text-xs flex items-center gap-2 transition-transform group-hover:-translate-y-2">
                ✌️ Peace & Progress
              </div>

              <div className="absolute -bottom-4 -left-4 md:-bottom-8 md:-left-8 bg-slate-900 text-white p-4 md:p-6 rounded-2xl shadow-2xl transform -rotate-3 md:-rotate-6 group-hover:-rotate-3 transition-transform border border-white/10">
                <div className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-rose-500/20 flex items-center justify-center">
                    <GraduationCap className="text-rose-400 w-4 h-4 md:w-5 md:h-5" />
                  </div>
                  <div>
                    <p className="text-[8px] md:text-[10px] uppercase tracking-tighter text-slate-400 font-bold">Next Stop:</p>
                    <p className="font-serif italic text-sm md:text-base">Study Abroad</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
