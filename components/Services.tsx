import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: "Fund Formation",
    description: "Structuring and establishing investment funds across multiple APAC jurisdictions.",
  },
  {
    title: "Regulatory Advisory",
    description: "Navigating licensing, compliance, and regulatory frameworks for asset managers.",
  },
  {
    title: "Ongoing Fund Counsel",
    description: "Day-to-day legal support for operational fund matters, investor relations, and governance.",
  },
  {
    title: "Transactional Support",
    description: "Advising on investments, co-investments, and fund-level transactions.",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const Services: React.FC = () => {
  return (
    <section id="services" className="relative py-24 md:py-32 lg:py-40 bg-stone-950 overflow-hidden">
      {/* Background Texture - Hong Kong (Unconventional/Dense) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1554902194-2795c6550785?q=80&w=2940&auto=format&fit=crop" 
          alt="Hong Kong Architecture" 
          className="w-full h-full object-cover opacity-[0.08] grayscale mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 via-stone-950/90 to-stone-950" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 md:mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl text-stone-100 mb-6 tracking-tight font-semibold">What I Do</h2>
          <div className="h-[2px] w-16 bg-gold-600"></div>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-stone-900/20 p-8 md:p-12 border border-stone-800/60 hover:border-stone-700 transition-all duration-500 hover:bg-stone-900/40 backdrop-blur-sm"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-gold-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left ease-out" />
              
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-mono text-stone-600 group-hover:text-gold-500 transition-colors duration-300 tracking-widest font-bold">
                    0{index + 1}
                  </span>
                </div>
                
                <h3 className="font-serif text-2xl md:text-3xl text-stone-100 mb-4 group-hover:text-white transition-colors duration-300 font-medium tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-stone-400 group-hover:text-stone-300 font-light leading-relaxed text-lg transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;