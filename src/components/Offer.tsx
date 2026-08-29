'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { getFormattedPrice, getCheckoutUrl } from '@/config/product'

const INCLUSIONS = [
  'Ebook completo, 25 páginas',
  '+1.000 palavras e expressões estratégicas',
  '90 questões oficiais analisadas',
  'Método C.A.D.E.',
  'Laboratório dos Distratores',
  'Treino de 60 segundos',
  'Folha das 100 palavras',
  'Checklist final de prova'
]

export function Offer() {
  const price = typeof getFormattedPrice === 'function' ? getFormattedPrice() : (getFormattedPrice || '[INSERIR PREÇO]')
  const checkoutUrl = typeof getCheckoutUrl === 'function' ? getCheckoutUrl() : (getCheckoutUrl || '#')

  return (
    <section id="offer" className="bg-navy py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1 flex justify-center"
          >
            <div className="relative w-full max-w-md aspect-[3/4] lg:aspect-[4/5]">
              <img 
                src="/assets/ebook/1.png" 
                alt="Capa do Manual das Palavras-Chave ENEM 2026" 
                className="w-full h-full object-contain rounded-2xl shadow-2xl drop-shadow-2xl"
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Leve o Manual das Palavras-Chave ENEM 2026
            </h2>
            
            <ul className="space-y-4 mb-10">
              {INCLUSIONS.map((item, i) => (
                <li key={i} className="flex items-center gap-4">
                  <div className="bg-green-cade/20 p-1 rounded-full shrink-0">
                    <Check className="w-5 h-5 text-green-cade" />
                  </div>
                  <span className="text-lg text-white/90">{item}</span>
                </li>
              ))}
            </ul>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 mb-8 backdrop-blur-sm text-center">
              <div className="text-white/60 text-sm font-medium uppercase tracking-wider mb-1">Acesso Imediato</div>
              <div className="text-white/40 text-base line-through mb-2">De R$ 49,90</div>
              <div className="flex items-baseline justify-center gap-1 mb-1">
                <span className="text-white/70 text-2xl font-bold">R$</span>
                <span className="text-6xl font-black text-green-cade">19</span>
                <span className="text-3xl font-black text-green-cade">,90</span>
              </div>
              <div className="text-white/50 text-sm mb-6">ou 2x de R$ 9,95 no cartão</div>
              
              <a 
                href={checkoutUrl}
                className="block w-full py-5 px-8 bg-green-cade hover:brightness-110 text-navy text-center font-black text-xl rounded-xl transition-all shadow-lg shadow-green-cade/20 active:scale-95 uppercase tracking-wide"
              >
                QUERO ACESSAR O MANUAL AGORA
              </a>
              <p className="text-center text-sm text-white/50 mt-4">
                🔒 Pagamento seguro · Acesso digital imediato
              </p>
              <p className="text-center text-xs text-white/40 mt-2">
                ✅ 7 dias de garantia incondicional
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
