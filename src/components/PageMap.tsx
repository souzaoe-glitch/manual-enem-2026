'use client';

import { motion } from 'framer-motion';

const blocks = [
  {
    number: "BLOCO 1",
    title: "FUNDAMENTOS",
    pages: "p.1-5",
    items: [
      "Método C.A.D.E.",
      "Anatomia de uma questão",
      "Famílias de raciocínio",
      "Comandos fundamentais"
    ]
  },
  {
    number: "BLOCO 2",
    title: "LINGUAGENS + HUMANAS",
    pages: "p.6-10",
    items: [
      "Interpretação, gêneros, conectivos",
      "Literatura e artes",
      "História e Geografia",
      "Filosofia e Sociologia"
    ]
  },
  {
    number: "BLOCO 3",
    title: "NATUREZA",
    pages: "p.11-15",
    items: [
      "Biologia",
      "Química",
      "Física",
      "Experimentos e relações científicas"
    ]
  },
  {
    number: "BLOCO 4",
    title: "MATEMÁTICA + DISTRATORES",
    pages: "p.16-20",
    items: [
      "Porcentagem, proporção, unidades",
      "Gráficos, funções, geometria",
      "Estatística e probabilidade",
      "Laboratório de distratores"
    ]
  },
  {
    number: "BLOCO 5",
    title: "REVISÃO E TREINO",
    pages: "p.21-25",
    items: [
      "Palavras transversais",
      "Matriz de comandos",
      "Treino de 60 segundos",
      "100 palavras para circular",
      "Checklist final"
    ]
  }
];

export function PageMap() {
  return (
    <section className="bg-navy py-24 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-white mb-16 text-center tracking-tight"
        >
          O que você encontra em cada bloco
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {blocks.map((block, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="bg-[#122A4F] rounded-2xl p-6 border border-white/5 shadow-xl relative group hover:-translate-y-1 transition-transform duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-blue-cade/10 rounded-bl-[100px] rounded-tr-2xl -z-10 transition-colors group-hover:bg-blue-cade/20" />
              
              <div className="flex justify-between items-start mb-4">
                <span className="text-blue-cade font-bold text-sm tracking-wider">
                  {block.number}
                </span>
                <span className="bg-white/10 text-white/80 text-xs px-2 py-1 rounded-md font-medium">
                  {block.pages}
                </span>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-6 leading-tight">
                {block.title}
              </h3>
              
              <ul className="space-y-3">
                {block.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start text-gray-300 text-sm">
                    <span className="text-blue-cade mr-2 mt-0.5">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
