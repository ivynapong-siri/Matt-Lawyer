import React, { useRef, useEffect, useState } from 'react';
import { motion, useScroll, useTransform, useInView, useMotionValue, useSpring } from 'framer-motion';
import { Upload } from 'lucide-react';

// Component for counting up numbers
const Counter = ({ value, suffix = "" }: { value: number, suffix?: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 50 });
  const isInView = useInView(ref, { once: true, margin: "-20%" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toFixed(0) + suffix;
      }
    });
  }, [springValue, suffix]);

  return <span ref={ref} className="tabular-nums">0{suffix}</span>;
};

const Experience: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  // State for image
  const [imageSrc, setImageSrc] = useState("https://images.unsplash.com/photo-1552906132-72ac46927906?q=80&w=2940&auto=format&fit=crop");
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

  return (
    <section id="experience" ref={containerRef} className="py-24 md:py-32 lg:py-40 bg-stone-950 relative overflow-hidden">
       <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 mb-24">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8 }}
           className="mb-20"
         >
            <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-6 tracking-tight font-semibold">Experience</h2>
            <div className="h-[2px] w-16 bg-gold-600"></div>
         </motion.div>

         {/* Stats Grid */}
         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 border-t border-stone-800 pt-16">
            
            {/* Stat 1 */}
            <div className="flex flex-col group">
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-stone-200 mb-4 font-bold tracking-tighter group-hover:text-white transition-colors duration-500">
                <Counter value={20} suffix="+" />
              </span>
              <span className="text-sm uppercase tracking-widest text-stone-500 font-bold group-hover:text-gold-500 transition-colors duration-300">Years in Fund Law</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col group">
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-stone-200 mb-4 font-bold tracking-tighter group-hover:text-white transition-colors duration-500">
                <Counter value={3} />
              </span>
              <span className="text-sm uppercase tracking-widest text-stone-500 font-bold group-hover:text-gold-500 transition-colors duration-300">Key Jurisdictions</span>
            </div>

            {/* Stat 3 - Static Text */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="flex flex-col group"
            >
              <span className="font-serif text-6xl md:text-7xl lg:text-8xl text-stone-200 mb-4 font-bold tracking-tighter group-hover:text-white transition-colors duration-500">
                Global
              </span>
              <span className="text-sm uppercase tracking-widest text-stone-500 font-bold group-hover:text-gold-500 transition-colors duration-300">APAC Focus</span>
            </motion.div>
         </div>

         {/* Jurisdiction Line */}
         <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-16 text-stone-400 font-serif text-xl md:text-2xl font-light tracking-wide text-center md:text-left"
         >
            Singapore &nbsp;<span className="text-gold-600">/</span>&nbsp; Hong Kong &nbsp;<span className="text-gold-600">/</span>&nbsp; Tokyo
         </motion.div>
       </div>

       {/* Cinematic Image Strip */}
       <div className="w-full h-[400px] md:h-[500px] relative overflow-hidden group">
          <motion.div style={{ y }} className="absolute inset-0 w-full h-[130%] -top-[15%]">
            <img 
              src={imageSrc} 
              alt="Experience Visual" 
              className="w-full h-full object-cover grayscale opacity-70 contrast-110"
            />
             {/* Overlay for integration */}
            <div className="absolute inset-0 bg-stone-950/40 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-transparent to-stone-950" />
          </motion.div>

          {/* Upload Button */}
          <div className="absolute bottom-6 right-6 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center gap-2 px-4 py-2 bg-stone-950/60 hover:bg-gold-600 text-stone-200 hover:text-stone-950 border border-stone-800 hover:border-transparent backdrop-blur-md transition-all duration-300 rounded-sm text-[10px] uppercase tracking-widest font-bold"
            >
              <Upload size={14} />
              <span>Update Image</span>
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
              accept="image/*"
            />
          </div>
       </div>
    </section>
  );
};

export default Experience;