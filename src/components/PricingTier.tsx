import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

interface PricingTierProps {
  name: string;
  price: string;
  features: string[];
  index: number;
}

export function PricingTier({ name, price, features, index }: PricingTierProps) {
  const isPopular = index === 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2 }}
      className="relative group"
    >
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}

      <div className={`relative p-8 rounded-2xl backdrop-blur-lg border transition-all duration-300
        ${isPopular 
          ? 'bg-zinc-800/70 border-blue-500/50 shadow-lg shadow-blue-500/20' 
          : 'bg-zinc-800/50 border-zinc-700/50'}`}
      >
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">${price}</span>
          {price !== "Custom" && <span className="text-cream/60 ml-2">/project</span>}
        </div>

        <ul className="space-y-4 mb-8">
          {features.map((feature, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1) }}
              className="flex items-center space-x-3"
            >
              <Check className="w-5 h-5 text-blue-500 flex-shrink-0" />
              <span className="text-cream/80">{feature}</span>
            </motion.li>
          ))}
        </ul>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`w-full py-3 rounded-lg font-medium transition-colors
            ${isPopular 
              ? 'bg-blue-500 hover:bg-blue-600 text-white' 
              : 'bg-zinc-700 hover:bg-zinc-600 text-cream'}`}
        >
          Get Started
        </motion.button>
      </div>
    </motion.div>
  );
}

export default PricingTier;