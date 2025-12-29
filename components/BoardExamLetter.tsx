
import React from 'react';
import { SectionProps } from '../types';
import { Sparkles, BarChart, Plane } from 'lucide-react';

export const BoardExamLetter: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 md:py-32 bg-rose-50/30 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-10 right-[10%] text-rose-200 rotate-12 opacity-50">
          <Sparkles size={120} />
        </div>
        <div className="absolute bottom-10 left-[5%] text-rose-200 -rotate-12 opacity-50">
          <Sparkles size={80} />
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16 opacity-0 animate-fade-up">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-slate-900 mb-4">A Private Note for Your Boards</h2>
          <p className="text-slate-500 uppercase tracking-widest text-sm">To the girl who turns data into magic</p>
        </div>

        <div className="relative group">
          {/* The "Letter" Card with settlement animation */}
          <div className="bg-white p-8 md:p-16 rounded-sm shadow-2xl border-t-[20px] border-rose-100 transform -rotate-1 hover:rotate-0 transition-all duration-700 opacity-0 animate-scale-in delay-200 group-hover:shadow-rose-100 group-hover:shadow-3xl">
            <div className="font-handwriting text-2xl md:text-3xl text-slate-800 leading-relaxed space-y-8">
              <p className="opacity-0 animate-fade-up delay-300">My Jaan, My Love, My Baby Girl,</p>
              
              <p className="opacity-0 animate-fade-up delay-500">
                I’ve watched you prepare, I’ve seen the late nights, and I’ve seen the sheer determination in your eyes as you work toward your dream of becoming a <strong>Data Analyst</strong>. 
                As your board exams approach, I want you to remember that these papers are just the gateway to the global stage you're meant to be on.
              </p>
              
              <p className="opacity-0 animate-fade-up delay-700">
                Whether you're moving far away to <strong>study abroad</strong> or staying close, my heart travels with you. 
                Your strength isn’t just in your grades; it’s in your resilience, your independence, and your beautiful, logical mind, my sweetheart.
              </p>
              
              <p className="text-rose-600 font-bold opacity-0 animate-fade-up delay-900">
                I believe in you more than words can explain. You have worked so hard, and I know in my heart that you will do better than you ever imagined. 
                You're already the smartest person I know—these exams are just waiting for you to conquer them!
              </p>
              
              <div className="pt-10 text-right opacity-0 animate-fade-up delay-1000">
                <p>With all my belief and love,</p>
                <p className="text-3xl md:text-4xl mt-2 text-rose-600 font-bold underline decoration-rose-200 underline-offset-4">Dhawal (Your Pookie)</p>
                <p className="text-sm italic text-slate-400 mt-1">Always your Babes & Cutie</p>
              </div>
            </div>
            
            <div className="absolute top-10 right-10 w-20 h-24 border-2 border-rose-200 rounded flex flex-col items-center justify-center rotate-6 opacity-30 pointer-events-none group-hover:rotate-12 transition-transform duration-1000">
              <BarChart size={20} className="mb-1 text-rose-500" />
              <div className="text-rose-400 text-center font-serif text-[10px] font-bold px-2 uppercase">
                D + <br/> DATA <br/> GENIUS
              </div>
            </div>
          </div>
          
          <div className="absolute -z-10 top-4 left-4 w-full h-full bg-white/50 rounded-sm shadow-lg transform rotate-1" />
          <div className="absolute -z-20 top-8 left-8 w-full h-full bg-white/30 rounded-sm shadow-md transform rotate-2" />
        </div>
        
        <div className="mt-16 text-center space-y-4 opacity-0 animate-fade-up delay-1000">
          <div className="flex justify-center gap-4">
            <Plane className="text-rose-400 animate-pulse" />
            <Sparkles className="text-rose-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
          </div>
          <p className="text-slate-400 font-light italic max-w-lg mx-auto leading-relaxed">
            "Your journey abroad is the next chapter in our story. D is ready to support you every mile, every byte, and every dream."
          </p>
        </div>
      </div>
    </section>
  );
};
