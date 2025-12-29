
import React from 'react';
import { SectionProps } from '../types';
import { Database, Plane, Binary, GraduationCap, Sparkles } from 'lucide-react';

export const CharacterSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 md:py-32 bg-slate-50 relative overflow-hidden">
      {/* Abstract Background Decoration */}
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
            <div className="animate-fade-in">
              <span className="text-rose-500 font-bold tracking-widest uppercase text-xs md:text-sm mb-2 md:mb-4 block">The Visionary</span>
              <h2 className="font-serif text-3xl md:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight">
                Your Dreams, <br className="hidden md:block" />
                <span className="text-rose-600 italic">Across Borders</span>
              </h2>
              <div className="w-16 md:w-20 h-1 md:h-1.5 bg-rose-500 rounded-full mb-6 md:mb-8 mx-auto lg:mx-0" />
            </div>
            
            <p className="text-base md:text-lg text-slate-700 leading-relaxed font-light italic">
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
                <div key={idx} className="flex gap-4 p-4 md:p-6 bg-white rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300">
                  <div className={`flex-shrink-0 w-10 h-10 md:w-12 md:h-12 ${item.color} rounded-xl flex items-center justify-center`}>
                    <item.icon className="w-5 h-5 md:w-6 md:h-6" />
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm md:text-base mb-1">{item.title}</h3>
                    <p className="text-slate