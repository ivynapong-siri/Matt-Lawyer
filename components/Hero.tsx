import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Upload } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  // State for background image - Singapore Skyline
  const [bgImage, setBgImage] = useState("https://images.unsplash.com/photo-1565967511849-76a60a516170?q=80&w=2940&auto=format&fit=crop");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setBgImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative h-screen flex flex-col justify-center bg-stone-950 overflow-hidden group">
      {/* Cinematic Background with Slow Zoom/Drift */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          className="relative w-full h-full"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
        >
          {/* Background Image */}
          <img 
            src={bgImage} 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-50 grayscale-[10%] contrast-[1.15] transition-opacity duration-700"
          />
          
          {/* Enhanced Gradient Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-stone-950/80 via-stone-950/40 to-stone-950" />
          <div className="absolute inset-0 bg-stone-950/20" />
        </motion.div>
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 relative z-10 w-full pt-20">
        <motion.div 
          style={{ y, opacity }}
          className="max-w-5xl"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-stone-100 leading-[1.05] tracking-tight mb-8 drop-shadow-2xl">
              Investment Funds <br />
              <span className="text-stone-400 font-light">& Asset Management</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="flex items-center space-x-6"
          >
            <div className="h-[2px] w-12 bg-gold-500"></div>
            <p className="text-lg md:text-xl text-stone-200 tracking-wide font-normal drop-shadow-md">
              Counsel across the Asia-Pacific region.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1.5 }}
        className="absolute bottom-10 left-0 right-0 flex justify-center z-20 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-stone-400/50" size={24} strokeWidth={1} />
        </motion.div>
      </motion.div>

      {/* Upload Button - Hidden by default, visible on hover */}
      <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button
          onClick={() => fileInputRef.current?.click()}
          className="flex items-center gap-2 px-4 py-2 bg-stone-950/60 hover:bg-gold-600 text-stone-400 hover:text-stone-950 border border-stone-800 hover:border-transparent backdrop-blur-md transition-all duration-300 rounded-sm text-[10px] uppercase tracking-widest font-bold"
        >
          <Upload size={14} />
          <span>Update Cover</span>
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageUpload}
          className="hidden"
          accept="image/*"
        />
      </div>
    </section>
  );
};

export default Hero;