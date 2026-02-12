import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle submit logic here
    console.log("Form submitted:", formState);
  };

  return (
    <section id="contact" className="relative py-24 md:py-32 lg:py-40 bg-stone-950 text-stone-300 overflow-hidden">
      {/* Background Image - Tokyo (Moody/Night) */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=2940&auto=format&fit=crop" 
          alt="Tokyo Architecture"
          className="w-full h-full object-cover opacity-20 grayscale contrast-125"
        />
        <div className="absolute inset-0 bg-stone-950/90 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent" />
      </div>

      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
          
          {/* Left Side: Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-stone-100 mb-6 tracking-tight font-semibold">
              Get in Touch
            </h2>
            <div className="h-[2px] w-16 bg-gold-600 mb-10"></div>
            
            <p className="text-xl md:text-2xl font-light text-stone-300 mb-12 leading-relaxed">
              Referrals and inquiries welcome.
            </p>

            <div className="mb-16">
              <a
                href="mailto:matt@feldmann.law"
                className="text-2xl md:text-3xl font-serif text-stone-100 hover:text-gold-400 transition-colors duration-300 border-b border-stone-800 hover:border-gold-400 pb-2 inline-block font-medium"
              >
                matt@feldmann.law
              </a>
            </div>
            
            <div className="text-stone-500 text-sm font-sans tracking-widest font-medium leading-loose uppercase opacity-80">
              <p>Singapore</p>
              <p>By appointment only.</p>
            </div>
          </motion.div>

          {/* Right Side: Minimal Form */}
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="relative group">
                <input
                  type="text"
                  name="name"
                  placeholder="NAME"
                  value={formState.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-stone-800 py-4 text-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-all duration-500 font-light tracking-wide"
                  required
                />
              </div>
              
              <div className="relative group">
                <input
                  type="email"
                  name="email"
                  placeholder="EMAIL"
                  value={formState.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border-b border-stone-800 py-4 text-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-all duration-500 font-light tracking-wide"
                  required
                />
              </div>

              <div className="relative group">
                <textarea
                  name="message"
                  placeholder="MESSAGE"
                  value={formState.message}
                  onChange={handleChange}
                  rows={3}
                  className="w-full bg-transparent border-b border-stone-800 py-4 text-lg text-stone-100 placeholder-stone-600 focus:outline-none focus:border-gold-500 transition-all duration-500 font-light resize-none tracking-wide"
                  required
                />
              </div>

              <div className="pt-8">
                <button
                  type="submit"
                  className="group flex items-center gap-4 px-8 py-4 bg-gold-600 text-stone-950 font-bold uppercase tracking-widest text-xs hover:bg-gold-500 transition-all duration-300 shadow-lg hover:shadow-gold-600/20"
                >
                  <span>Send Message</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;