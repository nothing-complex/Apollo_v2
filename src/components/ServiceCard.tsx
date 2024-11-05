import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

export function ServiceCard({ icon, title, description, index }: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      whileHover={{ y: -10 }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-bronze-400/10 to-sand-400/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
      
      <div className="relative bg-sand-50/90 backdrop-blur-lg p-8 rounded-2xl border border-sand-200 h-full transform transition-transform duration-300 group-hover:scale-[1.02]">
        <div className="text-bronze-500 mb-6">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 text-sand-600">{title}</h3>
        <p className="text-sand-600/80">{description}</p>
      </div>
    </motion.div>
  );
}

export default ServiceCard;