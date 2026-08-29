'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { getCheckoutUrl, getFormattedPrice } from '@/config/product';
import Link from 'next/link';

export default function MobileStickyCTA() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const dismissed = sessionStorage.getItem('mobileCTA_dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsVisible(false);
    sessionStorage.setItem('mobileCTA_dismissed', 'true');
  };

  if (isDismissed) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          exit={{ y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-navy border-t border-gray-800 shadow-[0_-4px_20px_rgba(0,0,0,0.3)] h-[72px]"
        >
          <div className="flex items-center justify-between px-4 h-full max-w-md mx-auto relative">
            <div className="flex flex-col justify-center">
              <span className="text-white font-bold text-sm">Manual ENEM 2026</span>
              <span className="text-green-cade font-bold text-xs">{getFormattedPrice()}</span>
            </div>
            
            <div className="flex items-center gap-3">
              <Link 
                href={getCheckoutUrl()}
                className="bg-green-cade text-navy text-xs font-black py-2 px-4 rounded-full shadow-lg"
              >
                QUERO ACESSAR
              </Link>
              <button 
                onClick={handleDismiss}
                className="text-gray-400 hover:text-white p-1"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
