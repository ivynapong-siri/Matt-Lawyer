import React, { useState, useRef } from 'react';
import SectionWrapper from './SectionWrapper';
import { Linkedin, Upload } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  const [imageSrc, setImageSrc] = useState("https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageSrc(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  return (
    <SectionWrapper id="about" className="bg-stone-950 relative">
       {/* Background Texture - Dark Bokeh */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1495312040802-a929cd14a6ab?q=80&w=2832&auto=format&fit=crop" 
          alt="Dark abstract texture" 
          className="w-full h-full object-cover opacity-[0.1] grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-stone-950" />
      </div>

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Portrait Image */}
        <div className="lg:col-span-5 order-2 lg:order-1">
            <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative group"
            >
                {/* Decorative border frame */}
                <div className="absolute -inset-3 border border-stone-800 translate-x-3 translate-y-3 z-0 transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                
                <div className="relative aspect-[3/4] overflow-hidden bg-stone-900 z-10">
                    <div className="absolute inset-0 bg-stone-500/10 mix-blend-overlay z-20 pointer-events-none" />
                     <img 
                        src={imageSrc} 
                        alt="Matt Feldmann" 
                        className="w-full h-full object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-700 ease-in-out contrast-110"
                    />

                    {/* Upload Overlay */}
                    <div className="absolute inset-0 z-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/60 backdrop-blur-[2px]">
                        <button 
                            onClick={triggerUpload}
                            className="flex items-center gap-2 px-5 py-3 bg-stone-100 text-stone-950 font-sans text-xs uppercase tracking-widest font-bold hover:bg-gold-500 transition-colors duration-300 shadow-xl rounded-sm"
                        >
                            <Upload size={14} strokeWidth={2} />
                            <span>Update Portrait</span>
                        </button>
                    </div>
                    <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={handleImageUpload} 
                        className="hidden" 
                        accept="image/*"
                    />
                </div>
            </motion.div>
        </div>

        {/* Content */}
        <div className="lg:col-span-7 order-1 lg:order-2">
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2 }}
          >
              <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-8 tracking-tight font-semibold">Who I Am</h2>
              <div className="h-[2px] w-16 bg-gold-600 mb-10"></div>
              
              <div className="space-y-6 text-lg md:text-xl font-normal leading-relaxed text-stone-300">
                <p>
                  With over two decades of experience in investment fund law across the Asia-Pacific region, I provide focused legal counsel to asset managers navigating complex regulatory landscapes.
                </p>
                <p>
                   Based in Singapore, my practice spans fund formation, regulatory compliance, and ongoing advisory — built on the belief that legal counsel should be precise, accessible, and grounded in deep market understanding.
                </p>
              </div>

              <div className="mt-12">
                 <a 
                   href="https://linkedin.com" 
                   target="_blank" 
                   rel="noopener noreferrer"
                   className="inline-flex items-center gap-4 text-stone-300 hover:text-gold-400 transition-colors duration-300 group"
                 >
                    <div className="p-3 border border-stone-700 rounded-full group-hover:border-gold-500 group-hover:bg-gold-500/10 transition-all duration-300">
                        <Linkedin size={18} strokeWidth={1.5} />
                    </div>
                    <span className="uppercase tracking-[0.2em] text-xs font-bold text-stone-400 group-hover:text-gold-400 transition-colors">
                        Connect on LinkedIn
                    </span>
                 </a>
              </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;