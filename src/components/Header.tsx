'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { getCheckoutUrl } from '@/config/product';
import { fbEvents } from './FacebookPixel';
import Link from 'next/link';

const navLinks = [
  { name: 'Como funciona', href: '#method' },
  { name: 'O que você recebe', href: '#inside' },
  { name: 'Método C.A.D.E.', href: '#cade' },
  { name: 'Por dentro', href: '#preview' },
  { name: 'Dúvidas', href: '#faq' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ backgroundColor: 'rgba(11, 31, 58, 0)' }}
      animate={{ backgroundColor: scrolled ? 'rgba(11, 31, 58, 1)' : 'rgba(11, 31, 58, 0)' }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'shadow-lg py-4' : 'py-6'}`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-xl md:text-2xl font-bold text-ice">
          MANUAL <span className="text-blue-cade">ENEM</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-ice">
          {navLinks.map((link) => (
            <Link key={link.name} href={link.href} className="hover:text-yellow-cade transition-colors">
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:block">
          <a
            href={getCheckoutUrl()}
            onClick={() => fbEvents.initiateCheckout()}
            className="btn-primary bg-blue-cade hover:bg-[#185bc0] text-ice font-bold py-2 px-6 rounded-full transition-all transform hover:scale-105 inline-block"
          >
            QUERO O MANUAL
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-ice" onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden absolute top-full left-0 w-full bg-navy border-t border-white/10 p-4 shadow-xl"
        >
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-ice hover:text-yellow-cade text-lg block py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <a
              href={getCheckoutUrl()}
              className="btn-primary bg-blue-cade text-center text-ice font-bold py-3 px-6 rounded-full w-full mt-4 block"
              onClick={() => { fbEvents.initiateCheckout(); setIsOpen(false); }}
            >
              QUERO O MANUAL
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
