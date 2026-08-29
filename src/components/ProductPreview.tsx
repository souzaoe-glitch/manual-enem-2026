'use client';

import { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';

const pages = [
  { src: '/assets/ebook/2.png', caption: 'Página 2: Método C.A.D.E. e os fundamentos da leitura estratégica.' },
  { src: '/assets/ebook/6.png', caption: 'Página 6: Dominando a interpretação em Linguagens e Humanas.' },
  { src: '/assets/ebook/11.png', caption: 'Página 11: Decodificando as questões de Ciências da Natureza.' },
  { src: '/assets/ebook/16.png', caption: 'Página 16: Atalhos e padrões em Matemática.' },
  { src: '/assets/ebook/20.png', caption: 'Página 20: O laboratório de distratores - como fugir das armadilhas.' },
  { src: '/assets/ebook/24.png', caption: 'Página 24: Revisão final e as 100 palavras essenciais.' }
];

export function ProductPreview() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [direction, setDirection] = useState(0);

  const navigate = useCallback((newDirection: number) => {
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let next = prev + newDirection;
      if (next >= pages.length) next = 0;
      if (next < 0) next = pages.length - 1;
      return next;
    });
  }, []);

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowRight') navigate(1);
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'Escape' && isLightboxOpen) setIsLightboxOpen(false);
  }, [navigate, isLightboxOpen]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  return (
    <section id="preview" className="bg-ice py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy mb-4 tracking-tight"
          >
            Veja como o material é por dentro.
          </motion.h2>
          <p className="text-gray-600">Arraste para os lados ou clique nas setas para navegar.</p>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Main Carousel Area */}
          <div className="relative aspect-[3/4] md:aspect-[4/3] bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 group">
            <AnimatePresence initial={false} custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ x: { type: "spring", stiffness: 300, damping: 30 }, opacity: { duration: 0.2 } }}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={1}
                onDragEnd={(e, { offset, velocity }) => {
                  const swipe = swipePower(offset.x, velocity.x);
                  if (swipe < -swipeConfidenceThreshold) {
                    navigate(1);
                  } else if (swipe > swipeConfidenceThreshold) {
                    navigate(-1);
                  }
                }}
                className="absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing"
                onClick={() => setIsLightboxOpen(true)}
              >
                <div className="w-full h-full relative">
                  <Image
                    src={pages[currentIndex].src}
                    alt={pages[currentIndex].caption}
                    fill
                    className="object-contain p-4"
                    priority={currentIndex === 0}
                    sizes="(max-width: 768px) 100vw, 800px"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <div className="bg-navy/80 text-white p-3 rounded-full backdrop-blur-sm shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-all">
                      <ZoomIn className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => { e.stopPropagation(); navigate(-1); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-navy hover:bg-white hover:scale-110 transition-all z-10 focus:outline-none"
              aria-label="Página anterior"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); navigate(1); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg flex items-center justify-center text-navy hover:bg-white hover:scale-110 transition-all z-10 focus:outline-none"
              aria-label="Próxima página"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption and Dots */}
          <div className="mt-6 text-center">
            <motion.p 
              key={currentIndex}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-navy font-medium mb-4 h-6"
            >
              {pages[currentIndex].caption}
            </motion.p>
            
            <div className="flex justify-center space-x-2">
              {pages.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setDirection(idx > currentIndex ? 1 : -1);
                    setCurrentIndex(idx);
                  }}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? 'bg-blue-cade w-8' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Ir para a página ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setIsLightboxOpen(false)}
          >
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="relative w-full h-full max-w-5xl" onClick={(e) => e.stopPropagation()}>
              <Image
                src={pages[currentIndex].src}
                alt={pages[currentIndex].caption}
                fill
                className="object-contain"
                sizes="100vw"
                quality={100}
              />
              
              {/* Lightbox Navigation */}
              <button
                onClick={(e) => { e.stopPropagation(); navigate(-1); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); navigate(1); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 bg-black/50 hover:bg-black/80 rounded-full flex items-center justify-center text-white transition-colors"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
              
              <div className="absolute bottom-6 left-0 right-0 text-center">
                <span className="bg-black/60 text-white px-4 py-2 rounded-full text-sm font-medium backdrop-blur-md">
                  {currentIndex + 1} de {pages.length}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};
