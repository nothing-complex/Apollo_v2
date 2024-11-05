import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Scan, Menu, X } from 'lucide-react';
import * as Dialog from '@radix-ui/react-dialog';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-zinc-900/80 backdrop-blur-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between py-4">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2"
          >
            <Scan className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">SCANTECH</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['Services', 'Case Studies', 'Gallery', 'Pricing', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-cream/80 hover:text-cream transition-colors relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
              >
                {item}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: '100%' }}
                />
              </motion.a>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <Dialog.Root open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <Dialog.Trigger asChild>
              <button className="md:hidden text-cream">
                <Menu className="w-6 h-6" />
              </button>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50" />
              <Dialog.Content className="fixed inset-y-0 right-0 w-[300px] bg-zinc-900 p-6 z-50">
                <div className="flex justify-end mb-8">
                  <Dialog.Close asChild>
                    <button className="text-cream">
                      <X className="w-6 h-6" />
                    </button>
                  </Dialog.Close>
                </div>

                <div className="flex flex-col space-y-6">
                  {['Services', 'Case Studies', 'Gallery', 'Pricing', 'Contact'].map((item) => (
                    <motion.a
                      key={item}
                      href={`#${item.toLowerCase()}`}
                      className="text-cream/80 hover:text-cream transition-colors text-lg"
                      whileHover={{ x: 10 }}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item}
                    </motion.a>
                  ))}
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors mt-4"
                  >
                    Get Started
                  </motion.button>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;