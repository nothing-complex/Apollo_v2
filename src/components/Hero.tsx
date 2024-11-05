import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sun, ChevronDown } from 'lucide-react';

const DecorativeShape = () => (
  <motion.div
    animate={{ rotate: 360 }}
    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
    className="absolute w-[600px] h-[600px] opacity-10"
  >
    <div className="w-full h-full border border-sand-300/20 rounded-full" />
    <div className="absolute inset-4 border border-sand-300/20 rounded-full" />
    <div className="absolute inset-8 border border-sand-300/20 rounded-full" />
  </motion.div>
);

export function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <motion.section
      ref={containerRef}
      style={{ opacity, scale }}
      className="relative min-h-screen flex items-center bg-noise"
    >
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-sand-50 via-sand-50/50 to-sand-50 mix-blend-soft-light z-10" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-20"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-white-sand-dunes-in-a-desert-4387-large.mp4" type="video/mp4" />
        </video>
      </div>

      <DecorativeShape />

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:ml-12"
          >
            <div className="flex items-center space-x-4 mb-8">
              <motion.div
                animate={{ 
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                <Sun className="w-12 h-12 text-bronze-500" />
              </motion.div>
              <div>
                <h2 className="text-xl text-bronze-400">Apollo</h2>
                <p className="text-sand-600">Radiance Fields</p>
              </div>
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-8 leading-tight text-sand-600">
              Capture Light,
              <span className="block text-bronze-500">
                Preserve Reality
              </span>
            </h1>
            
            <p className="text-xl text-sand-600/80 mb-12 max-w-xl">
              Revolutionary light field technology transforming architectural documentation into immersive digital experiences
            </p>

            <div className="flex flex-col sm:flex-row items-start gap-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-bronze-500 text-sand-50 font-medium text-lg hover:bg-bronze-600 transition-colors"
              >
                Experience Apollo
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-full bg-sand-200 text-bronze-500 font-medium text-lg hover:bg-sand-300 transition-colors"
              >
                View Projects
              </motion.button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square">
              <motion.div
                animate={{ y: [-20, 20, -20] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1629904853716-f0bc54eea481?auto=format&fit=crop&q=80"
                  alt="3D Visualization"
                  className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bronze-500/20 to-transparent rounded-2xl" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <ChevronDown className="w-8 h-8 text-bronze-500 animate-bounce" />
      </motion.div>
    </motion.section>
  );
}

export default Hero;