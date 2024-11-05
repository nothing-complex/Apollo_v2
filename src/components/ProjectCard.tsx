import React from 'react';
import { motion } from 'framer-motion';
import * as HoverCard from '@radix-ui/react-hover-card';

interface ProjectCardProps {
  project: {
    title: string;
    category: string;
    image: string;
    description: string;
  };
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <HoverCard.Root>
      <HoverCard.Trigger asChild>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.2 }}
          whileHover={{ y: -10 }}
          className="relative group cursor-pointer"
        >
          <div className="relative overflow-hidden rounded-lg aspect-video">
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black via-black/80 to-transparent">
            <h3 className="text-xl font-bold mb-1">{project.title}</h3>
            <p className="text-cream/80">{project.category}</p>
          </div>
        </motion.div>
      </HoverCard.Trigger>

      <HoverCard.Portal>
        <HoverCard.Content
          className="bg-wine p-4 rounded-lg shadow-xl w-64 z-50"
          sideOffset={5}
        >
          <div className="flex flex-col gap-2">
            <h4 className="font-bold">{project.title}</h4>
            <p className="text-sm text-cream/80">{project.description}</p>
          </div>
          <HoverCard.Arrow className="fill-wine" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  );
}

export default ProjectCard;