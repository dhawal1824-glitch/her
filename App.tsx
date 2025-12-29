
import React, { useEffect, useState } from 'react';
import { Hero } from './components/Hero';
import { CharacterSection } from './components/CharacterSection';
import { ThePromise } from './components/ThePromise';
import { JourneySection } from './components/JourneySection';
import { SelfBeliefAffirmations } from './components/SelfBeliefAffirmations';
import { BoardExamLetter } from './components/BoardExamLetter';
import { FinalNote } from './components/FinalNote';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen selection:bg-rose-200 selection:text-rose-900">
      <Navigation scrolled={scrolled} />
      
      <main>
        <Hero id="home" />
        <CharacterSection id="vision" />
        <ThePromise id="promise" />
        <JourneySection id="journey" />
        <SelfBeliefAffirmations id="power" />
        <BoardExamLetter id="letter" />
        <FinalNote id="final" />
      </main>

      <Footer />
      
      {/* Decorative floating elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute floating-element"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${6 + Math.random() * 10}s`
            }}
          >
            <div className={`w-${Math.floor(Math.random() * 8 + 4)} h-${Math.floor(Math.random() * 8 + 4)} rounded-full bg-rose-200 blur-xl opacity-20`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
