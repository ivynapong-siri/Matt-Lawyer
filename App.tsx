import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans">
      <Navigation />
      <main>
        <Hero />
        <Services />
        <About />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;