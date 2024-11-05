import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const galleryImages = [
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1481026469463-66327c86e544?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80"
];

export function Gallery() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  return (
    <section ref={containerRef} className="py-32 overflow-hidden">
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl font-bold mb-16 text-center"
      >
        Our Work
      </motion.h2>

      <div className="relative h-[50vh] md:h-[80vh]">
        <div className="absolute w-full h-full">
          {galleryImages.map((image, index) => {
            const translateX = useTransform(
              scrollYProgress,
              [0, 1],
              [index % 2 === 0 ? -100 : 100, 0]
            );

            return (
              <motion.div
                key={index}
                style={{ translateX }}
                className="absolute w-1/2 h-1/2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                style={{
                  top: `${Math.floor(index / 2) * 50}%`,
                  left: `${(index % 2) * 50}%`,
                  translateX
                }}
              >
                <div className="absolute inset-4">
                  <div className="relative w-full h-full overflow-hidden rounded-2xl group">
                    <motion.img
                      src={image}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Gallery;