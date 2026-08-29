'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const DISTRACTORS = [
  { id: 1, name: 'Extrapolação', example: 'Vai além do que o texto afirma, adicionando informações não presentes.' },
  { id: 2, name: 'Inversão', example: 'Afirma o oposto do que o texto-base ou os dados indicam.' },
  { id: 3, name: 'Meia verdade', example: 'Começa correta, mas termina com uma afirmação falsa.' },
  { id: 4, name: 'Generalização', example: 'Trata um caso específico do texto como regra geral.' },
  { id: 5, name: 'Absolutização', example: 'Usa termos extremos (sempre, nunca, todos) quando o texto é condicional.' },
  { id: 6, name: 'Conceito certo contexto errado', example: 'A teoria está correta, mas não se aplica à situação da questão.' },
  { id: 7, name: 'Dado correto pergunta errada', example: 'Informa um dado real do gráfico que não responde ao comando.' },
  { id: 8, name: 'Unidade errada', example: 'Calcula o valor certo, mas apresenta em km/h em vez de m/s.' },
  { id: 9, name: 'Inversão de proporção', example: 'Trata grandezas diretamente proporcionais como inversamente.' },
  { id: 10, name: 'Leitura superficial', example: 'Resumo óbvio e senso comum que ignora a análise técnica pedida.' }
]

export function DistractorLab() {
  const [activeId, setActiveId] = useState<number | null>(null)

  return (
    <section className="bg-navy py-20 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-red-cade/5 rounded-full blur-3xl" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 text-center">
          A alternativa errada também foi escrita para parecer convincente.
        </h2>
        <p className="text-lg text-white/80 mb-16 max-w-2xl mx-auto text-center">
          O objetivo não é decorar pegadinhas. É identificar quando uma alternativa deixa de responder ao comando.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {DISTRACTORS.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setActiveId(activeId === item.id ? null : item.id)}
              onMouseEnter={() => setActiveId(item.id)}
              onMouseLeave={() => setActiveId(null)}
              className="bg-white/5 border border-white/10 p-6 rounded-xl cursor-pointer hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-4 mb-2">
                <span className="text-red-cade font-black text-xl w-8">{item.id}.</span>
                <h3 className="font-bold text-white text-lg">{item.name}</h3>
              </div>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeId === item.id ? 'max-h-24 opacity-100' : 'max-h-0 opacity-0 md:max-h-24 md:opacity-100 group-hover:max-h-24 group-hover:opacity-100'
                }`}
              >
                <p className="text-white/70 pl-12 text-sm mt-2">
                  {item.example}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
