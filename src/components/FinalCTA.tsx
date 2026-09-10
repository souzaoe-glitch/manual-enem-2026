'use client'

import { motion } from 'framer-motion'
import { getCheckoutUrl } from '@/config/product'
import { fbEvents } from './FacebookPixel'

export function FinalCTA() {
  const checkoutUrl = typeof getCheckoutUrl === 'function' ? getCheckoutUrl() : (getCheckoutUrl || '#')

  return (
    <section className="bg-navy py-24 px-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 h-64 bg-yellow-cade/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-cade/10 rounded-full blur-3xl" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Na próxima questão, você pode continuar procurando tudo...
          </h2>
          <p className="text-xl md:text-2xl text-yellow-cade font-medium mb-12">
            ou começar sabendo exatamente o que precisa encontrar.
          </p>
          
          <a 
            href={checkoutUrl}
            onClick={() => fbEvents.initiateCheckout()}
            className="inline-block py-5 px-10 bg-blue-cade hover:bg-blue-cade/90 text-white font-bold text-xl rounded-xl transition-all shadow-lg hover:shadow-blue-cade/20 active:scale-95 mb-6"
          >
            QUERO O MANUAL DAS PALAVRAS-CHAVE
          </a>
          
          <p className="text-white/60 font-medium tracking-wide uppercase text-sm">
            Comando. Âncora. Direção. Eliminação.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
