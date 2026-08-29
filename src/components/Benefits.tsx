'use client'

import { motion } from 'framer-motion'
import { Target, Timer, GitCompare, ShieldAlert, Brain, Zap } from 'lucide-react'

const BENEFITS = [
  { icon: Target, title: 'Você sabe o que procurar', desc: 'antes de voltar ao texto-base' },
  { icon: Timer, title: 'Você reduz leituras desnecessárias', desc: 'o comando orienta sua busca' },
  { icon: GitCompare, title: 'Você diferencia alternativas parecidas', desc: 'comparando com o pedido' },
  { icon: ShieldAlert, title: 'Você identifica armadilhas', desc: 'extrapolação, inversão, unidade errada' },
  { icon: Brain, title: 'Você ganha um roteiro mental', desc: 'aplicável em diferentes áreas' },
  { icon: Zap, title: 'Você revisa mais rápido', desc: 'mapas, listas, cards, folha de 100 expressões' }
]

export function Benefits() {
  return (
    <section className="bg-ice py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-16 text-center max-w-3xl mx-auto">
          O que muda quando você começa a ler com direção?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon
            return (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-start"
              >
                <div className="bg-blue-cade/10 p-4 rounded-xl mb-6">
                  <Icon className="w-8 h-8 text-blue-cade" />
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">{benefit.title}</h3>
                <p className="text-navy/70">{benefit.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
