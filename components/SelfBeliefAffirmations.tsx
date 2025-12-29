
import React from 'react';
import { SectionProps } from '../types';
import { Zap, Flame, Trophy, Sun } from 'lucide-react';

export const SelfBeliefAffirmations: React.FC<SectionProps> = ({ id }) => {
  const affirmations = [
    {
      icon: Zap,
      title: "Unstoppable Energy",
      text: "You have a fire within you that no exam or difficulty can extinguish. Wake up every day knowing you are capable.",
      color: "text-amber-500",
      bg: "bg-amber-50"
    },
    {
      icon: Flame,
      title: "Built for Greatness",
      text: "Every challenge you face is just fuel for your success. You aren't just passing time; you're building an empire.",
      color: "text-orange-500",
      bg: "bg-orange-50"
    },
    {
      icon: Trophy,
      title: "The Winner's Mindset",
      text: "Believe you have already won. Walk into those exams with the confidence of someone who knows their worth.",
      color: "text-rose-500",
      bg: "bg-rose-50"
    },
    {
      icon: Sun,
      title: "Radiant Potential",
      text: "Your intelligence is a light that will open doors you haven't even seen yet. Trust your light.",
      color: "text-yellow-500",
      bg: "bg-yellow-50"
    }
  ];

  return (
    <section id={id} className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0 opacity-20 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-orange-500 rounded-full blur-[150px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-rose-500 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6">
            Ignite Your <span className="text-orange-400">Motivation</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-orange-400 to-rose-500 rounded-full mx-auto mb-8" />
          <p className="text-slate-400 text-xl font-light max-w-2xl mx-auto italic">
            "Your only limit is the one you set yourself. Break through every wall, because you are meant to fly."
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {affirmations.map((item, idx) => (
            <div 
              key={idx} 
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-[2.5rem] hover:bg-white/10 transition-all duration-500 hover:-translate-y-2 shadow-2xl overflow-hidden"
            >
              {/* Decorative accent */}
              <div className={`absolute top-0 right-0 w-24 h-24 ${item.bg} opacity-10 rounded-bl-full group-hover:scale-150 transition-transform duration-700`} />
              
              <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.color} mb-6 shadow-inner`}>
                <item.icon size={28} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed font-light">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <div className="inline-block p-[2px] rounded-full bg-gradient-to-r from-orange-400 via-rose-500 to-purple-600">
            <div className="px-8 py-3 bg-slate-900 rounded-full">
              <span className="text-white font-bold tracking-widest uppercase text-sm">
                You are stronger than you think
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
