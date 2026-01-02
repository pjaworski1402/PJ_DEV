import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen font-sans selection:bg-emerald-900/30 selection:text-emerald-200">
        <Background />
        
        {/* Navbar is fixed, placed outside relative flow to avoid stacking context issues */}
        <Navbar />
        
        {/* Content wrapper with z-index to sit above background */}
        <div className="relative z-10">
          <main className="flex flex-col">
            <Hero />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
        </div>
      </div>
    </LanguageProvider>
  );
}

export default App;