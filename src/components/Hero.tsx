'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { getCheckoutUrl } from '@/config/product';
import { fbEvents } from './FacebookPixel';
import Link from 'next/link';

const floatingWords = [
  'IDENTIFIQUE', 'INFIRA', 'RELACIONE', 'COMPARE', 
  'JUSTIFIQUE', 'ANALISE', 'DETERMINE', 'EXPLIQUE'
];

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-navy bg-gradient-to-b from-navy to-[#08162A] overflow-hidden flex items-center pt-24 pb-16">
      {/* Floating words background */}
      <div className="absolute inset-0 overflow-hidden opacity-5 pointer-events-none select-none flex flex-wrap justify-center items-center gap-8 p-12">
        {floatingWords.map((word, i) => (
          <motion.span
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 1 }}
            className="text-4xl md:text-6xl lg:text-8xl font-black text-ice"
          >
            {word}
          </motion.span>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <div className="inline-block px-4 py-1.5 rounded-full bg-blue-cade/20 border border-blue-cade/40 text-blue-cade text-sm font-bold tracking-widest uppercase">
              MANUAL DAS PALAVRAS-CHAVE • ENEM 2026
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-ice leading-tight">
              Pare de ler a questão inteira <br className="hidden md:block" />
              <span className="text-yellow-cade">sem saber o que procurar.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-ice font-medium leading-relaxed opacity-90">
              Aprenda a identificar o comando, encontrar as pistas decisivas e eliminar alternativas que não respondem ao que o ENEM realmente perguntou.
            </p>
            
            <p className="text-ice/70">
              Um guia visual com +1.000 palavras e expressões estratégicas, 90 questões oficiais analisadas e o Método C.A.D.E. para tornar sua leitura mais rápida, consciente e objetiva.
            </p>

            <div className="flex flex-wrap gap-3">
              {['+1.000 expressões', '90 questões oficiais', '25 páginas', 'Método C.A.D.E.'].map((badge) => (
                <span key={badge} className="px-3 py-1 bg-white/5 border border-white/10 rounded-md text-ice text-sm font-medium">
                  {badge}
                </span>
              ))}
            </div>

            <div className="pt-4 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <a
                href={getCheckoutUrl()}
                onClick={() => fbEvents.initiateCheckout()}
                className="btn-primary w-full sm:w-auto bg-green-cade hover:bg-[#1a8a58] text-ice font-bold py-4 px-8 rounded-lg shadow-[0_4px_14px_0_rgba(32,163,106,0.39)] transition-all transform hover:-translate-y-1 text-center"
              >
                QUERO DOMINAR A LEITURA DAS QUESTÕES
              </a>
              <Link 
                href="#cade"
                className="btn-secondary w-full sm:w-auto px-8 py-4 border border-ice/20 hover:border-ice/50 hover:bg-white/5 text-ice font-bold rounded-lg transition-all text-center"
              >
                VER COMO O MÉTODO FUNCIONA
              </Link>
            </div>
            <p className="text-sm text-ice/60 mt-2">
              Acesso digital • leitura no celular, tablet ou computador
            </p>
          </motion.div>

          {/* Right Content - Ebook Cover */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative h-[500px] lg:h-[600px] flex items-center justify-center perspective-1000"
          >
            <div className="relative w-full max-w-[400px] aspect-[1/1.4] transform-gpu rotate-y-[-15deg] rotate-x-[5deg]">
              {/* Back page */}
              <div className="absolute inset-0 shadow-2xl transform translate-x-12 translate-y-8 -rotate-6 rounded-lg overflow-hidden border border-white/10">
                <Image src="/assets/ebook/5.png" alt="Página 5" fill className="object-cover opacity-80" />
              </div>
              {/* Middle page */}
              <div className="absolute inset-0 shadow-2xl transform translate-x-6 translate-y-4 -rotate-3 rounded-lg overflow-hidden border border-white/10">
                <Image src="/assets/ebook/3.png" alt="Página 3" fill className="object-cover opacity-90" />
              </div>
              {/* Front cover */}
              <div className="absolute inset-0 shadow-2xl rounded-lg overflow-hidden border border-white/20 transform hover:scale-105 transition-transform duration-500">
                <Image src="/assets/ebook/1.png" alt="Capa Manual ENEM 2026" fill className="object-cover" priority />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
