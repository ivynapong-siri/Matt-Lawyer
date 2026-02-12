import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ImageDividerProps {
  src?: string;
  height?: string;
  className?: string;
}

const ImageDivider: React.FC<ImageDividerProps> = ({ 
  src = "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=2940&auto=format&fit=crop", // Abstract Architecture
  height = "h-[300px] md:h-[400px]",
  className = ""
}) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    <div ref={ref} className={`w-full ${height} relative overflow-hidden bg-stone-950 ${className}`}>
      <motion.div style={{ y }} className="absolute inset-0 w-full h-[140%] -top-[20%]">
        <img 
          src={src} 
          alt="Visual Divider" 
          className="w-full h-full object-cover grayscale opacity-60 contrast-125"
        />
        <div className="absolute inset-0 bg-stone-950/20 mix-blend-multiply" />
      </motion.div>
    </div>
  );
};

export default ImageDivider;