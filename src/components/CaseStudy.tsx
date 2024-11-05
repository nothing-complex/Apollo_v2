import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Clock, Ruler } from 'lucide-react';

interface CaseStudyProps {
  title: string;
  description: string;
  image: string;
  metrics: {
    area: string;
    duration: string;
    accuracy: string;
  };
  index: number;
}

export function CaseStudy({ title, description, image, metrics, index }: CaseStudyProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-2xl aspect-[16/9]">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent" />
        
        <div className="absolute inset-0 p-8 flex flex-col justify-end">
          <h3 className="text-2xl font-bold mb-2">{title}</h3>
          <p className="text-cream/80 mb-6">{description}</p>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="flex items-center space-x-2">
              <Building2 className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-cream/80">{metrics.area}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-cream/80">{metrics.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Ruler className="w-5 h-5 text-blue-500" />
              <span className="text-sm text-cream/80">{metrics.accuracy}</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default CaseStudy;