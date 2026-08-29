'use client'

import { motion } from 'framer-motion'

export function OfficialQuestions() {
  return (
    <section className="bg-ice py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-6">
          O método não fica só na teoria.
        </h2>
        <p className="text-lg text-navy/80 mb-12 max-w-2xl mx-auto">
          Ao longo do material, 90 questões oficiais de edições anteriores são usadas para demonstrar como comandos, âncoras, relações e distratores aparecem na prática.
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto text-left border border-gray-100"
        >
          <div className="text-sm font-bold text-navy/60 mb-6 uppercase tracking-wider">Raio-X da Questão</div>
          
          <div className="space-y-4 text-lg">
            <div className="flex flex-col md:flex-row md:items-center border-b border-gray-50 pb-3">
              <span className="font-bold text-navy w-32 shrink-0">Ano/Caderno</span>
              <span className="text-navy/80">ENEM 2019</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center border-b border-gray-50 pb-3">
              <span className="font-bold text-blue-cade w-32 shrink-0">Comando</span>
              <span className="text-navy/80">&quot;identificar a finalidade&quot;</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center border-b border-gray-50 pb-3">
              <span className="font-bold text-yellow-cade w-32 shrink-0">Âncora</span>
              <span className="text-navy/80">&quot;campanha publicitária&quot;</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center border-b border-gray-50 pb-3">
              <span className="font-bold text-green-cade w-32 shrink-0">O que quer</span>
              <span className="text-navy/80">Relação entre linguagem e intenção</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center border-b border-gray-50 pb-3">
              <span className="font-bold text-navy w-32 shrink-0">Pista Decisiva</span>
              <span className="text-navy/80">&quot;verbos no imperativo&quot;</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center border-b border-gray-50 pb-3">
              <span className="font-bold text-navy w-32 shrink-0">Resposta</span>
              <span className="font-bold text-navy/80">B</span>
            </div>
            <div className="flex flex-col md:flex-row md:items-center pt-1">
              <span className="font-bold text-red-cade w-32 shrink-0">Armadilha</span>
              <span className="text-navy/80">Alternativa que confunde tema com propósito</span>
            </div>
          </div>
        </motion.div>

        <p className="text-xs text-navy/50 mt-10">
          * Os enunciados são resumidos quando necessário. A conferência deve ser feita nas publicações oficiais do INEP.
        </p>
      </div>
    </section>
  )
}
