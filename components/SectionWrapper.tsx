import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionWrapperProps {
  children: ReactNode;
  id: string;
  className?: string;
  containerClass?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({ children, id, className = "", containerClass = "" }) => {
  return (
    <section id={id} className={`py-24 md:py-32 lg:py-40 relative overflow-hidden ${className}`}>
      <div className={`max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 ${containerClass}`}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
};

export default SectionWrapper;