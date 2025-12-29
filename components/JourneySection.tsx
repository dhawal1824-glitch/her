
import React from 'react';
import { SectionProps } from '../types';
import { GraduationCap, MapPin, Coffee, BookOpen } from 'lucide-react';

export const JourneySection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-24 md:py-40 bg-white overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <img src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="Focus" />
                <img src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?q=80&w=2076&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-48 object-cover" alt="Journey" />
              </div>
              <div className="space-y-4 pt-8">
                <img src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-48 object-cover" alt="Studying" />
                <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop" className="rounded-3xl shadow-lg w-full h-64 object-cover" alt="Growth" />
              </div>
            </div>
            {/* Float Badge */}
            <div className="absolute -bottom-10 -right-10 bg-rose-500 text-white p-8 rounded-full shadow-2xl hidden md:block border-8 border-white">
              <p className="font-serif text-lg font-bold">Respected <br/>Journey</p>
            </div>
          </div>

          <div className="lg:w-1/2 space-y-10">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-slate-900 mb-6">The Path to <span className="text-rose-600">Greatness</span></h2>
              <p className="text-slate-600 text-lg font-light leading-relaxed">
                “If your journey includes struggle, late nights of preparation, exams that feel overwhelming, or moving far away... I will respect that journey.”
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: Coffee, title: "Late Nights", text: "Endless hours of preparation and work." },
                { icon: BookOpen, title: "Tough Exams", text: "When the pressure feels overwhelming." },
                { icon: GraduationCap, title: "Scholarships", text: "The reward for your relentless hard work." },
                { icon: MapPin, title: "Distance", text: "Moving far away to build the life you deserve." }
              ].map((item, idx) => (
                <div key={idx} className="flex flex-col gap-3">
                  <div className="w-10 h-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-500">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.text}</p>
                </div>
              ))}
            </div>

            <blockquote className="border-l-4 border-rose-500 pl-6 italic text-slate-700 text-lg">
              “I will believe in you even on the days when you don’t fully believe in yourself.”
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};
