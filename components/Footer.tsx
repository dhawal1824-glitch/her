
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-12 bg-white border-t border-slate-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-slate-400 font-light text-sm tracking-widest uppercase mb-4">
          A Love Letter from Dhawal to his Jaan
        </p>
        <div className="w-12 h-px bg-slate-200 mx-auto mb-6" />
        <p className="text-slate-500 font-serif italic text-lg">
          “I want to love you in a way that helps you grow into who you’re meant to be, my sweetheart.”
        </p>
        <div className="mt-8 text-slate-300 text-xs">
          &copy; {new Date().getFullYear()} • Handcrafted with love for my Pookie
        </div>
      </div>
    </footer>
  );
};
