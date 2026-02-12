import React from 'react';
import { Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-950 py-12 border-t border-stone-900">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-stone-500 text-xs font-bold tracking-widest uppercase opacity-90">
          &copy; 2026 Feldmann Law
        </div>
        
        <a 
          href="https://linkedin.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-stone-500 hover:text-gold-500 transition-colors duration-300 p-2"
          aria-label="LinkedIn"
        >
          <Linkedin size={18} strokeWidth={1.5} />
        </a>
      </div>
    </footer>
  );
};

export default Footer;