'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const QUESTIONS = [
  { q: 'O material substitui estudar o conteúdo?', a: 'Não. Ele ajuda a interpretar melhor o que a questão está pedindo.' },
  { q: 'A palavra-chave revela automaticamente a resposta?', a: 'Não. A palavra-chave orienta o raciocínio.' },
  { q: 'O material contém questões do ENEM 2026?', a: 'Não. O ENEM 2026 ainda não foi aplicado. Usa questões de edições anteriores.' },
  { q: 'São questões oficiais?', a: 'Sim, microanálises de questões de edições anteriores.' },
  { q: 'Posso ler pelo celular?', a: 'Sim, formato vertical digital.' },
  { q: 'O material cobre quais áreas?', a: 'Linguagens, Humanas, Natureza e Matemática.' },
  { q: 'Quantas páginas são?', a: '25 páginas visuais.' },
  { q: 'Quantas palavras e expressões?', a: 'Mais de 1.000.' },
  { q: 'Quantas questões foram analisadas?', a: '90 questões oficiais.' },
  { q: 'Quando recebo?', a: 'Acesso imediato após confirmação do pagamento.' },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-ice py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">
          Dúvidas frequentes
        </h2>
        
        <div className="space-y-4">
          {QUESTIONS.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-cade"
                >
                  <span className="font-semibold text-navy pr-4">{item.q}</span>
                  <ChevronDown 
                    className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    size={20}
                  />
                </button>
                
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="p-5 pt-0 text-gray-600 border-t border-gray-50">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
