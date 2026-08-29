'use client'

import { motion } from 'framer-motion'

const COMPARISON = [
  { before: 'Começa pelo texto-base', after: 'Começa pelo comando' },
  { before: 'Busca qualquer informação', after: 'Busca a evidência exata' },
  { before: 'Confunde o tema geral', after: 'Separa a tarefa pedida' },
  { before: 'Avalia a alternativa isolada', after: 'Compara alternativa com o comando' },
  { before: 'Cai no conceito certo em contexto errado', after: 'Elimina o incompatível com o texto' },
  { before: 'Calcula sem olhar unidade', after: 'Identifica a unidade primeiro' },
  { before: 'Vê gráfico como imagem', after: 'Lê título, eixos e escala' }
]

export function Comparison() {
  return (
    <section className="bg-ice py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-16 text-center">
          Ler sem direção × Ler com o Método C.A.D.E.
        </h2>
        
        {/* Desktop Table */}
        <div className="hidden md:block bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100">
          <div className="grid grid-cols-2">
            <div className="bg-red-cade/10 p-6 text-center border-b border-r border-gray-100">
              <h3 className="text-xl font-bold text-red-cade">SEM DIREÇÃO</h3>
            </div>
            <div className="bg-green-cade/10 p-6 text-center border-b border-gray-100">
              <h3 className="text-xl font-bold text-green-cade">MÉTODO C.A.D.E.</h3>
            </div>
          </div>
          
          {COMPARISON.map((row, i) => (
            <div key={i} className="grid grid-cols-2 border-b border-gray-50 last:border-0 hover:bg-gray-50 transition-colors">
              <div className="p-6 text-navy/70 border-r border-gray-100 flex items-center justify-center text-center">
                {row.before}
              </div>
              <div className="p-6 text-navy font-semibold flex items-center justify-center text-center">
                {row.after}
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Cards */}
        <div className="md:hidden space-y-6">
          {COMPARISON.map((row, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100"
            >
              <div className="mb-4">
                <span className="text-xs font-bold text-red-cade uppercase tracking-wider block mb-1">Sem Direção</span>
                <p className="text-navy/70 line-through decoration-red-cade/30">{row.before}</p>
              </div>
              <div className="pt-4 border-t border-gray-100">
                <span className="text-xs font-bold text-green-cade uppercase tracking-wider block mb-1">Método C.A.D.E.</span>
                <p className="text-navy font-semibold">{row.after}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
