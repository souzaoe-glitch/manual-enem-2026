'use client';

import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Search, Lightbulb } from 'lucide-react';

export default function BeliefBreaker() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section id="method" className="py-24 bg-navy text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.h2 
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Palavra-chave não é <span className="text-red-cade">atalho mágico</span>.
          </motion.h2>
          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto"
          >
            É um sinal que mostra qual raciocínio você precisa executar.
          </motion.p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 mb-20"
        >
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl flex items-center gap-4 w-full md:w-auto">
            <Search className="text-blue-cade w-8 h-8" />
            <div>
              <p className="text-gray-400 text-sm font-medium">A palavra-chave</p>
              <p className="text-2xl font-bold text-white">PALAVRA-CHAVE <span className="text-blue-cade">→ ORIENTA</span></p>
            </div>
          </div>
          
          <div className="hidden md:block text-gray-500">
            <ArrowRight className="w-8 h-8" />
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-6 rounded-xl flex items-center gap-4 w-full md:w-auto">
            <CheckCircle className="text-green-cade w-8 h-8" />
            <div>
              <p className="text-gray-400 text-sm font-medium">No texto ou na imagem</p>
              <p className="text-2xl font-bold text-white">EVIDÊNCIA <span className="text-green-cade">→ CONFIRMA</span></p>
            </div>
          </div>
        </motion.div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={containerVariants}
          className="grid md:grid-cols-3 gap-8"
        >
          {/* Example 1 */}
          <motion.div variants={itemVariants} className="bg-navy border border-gray-800 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-cade/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb className="w-16 h-16 text-blue-cade" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-cade">"INFERIR"</h3>
            <p className="text-gray-300 leading-relaxed">
              Não entrega a alternativa correta. <span className="text-green-cade font-medium">Mas avisa que a resposta provavelmente não estará escrita literalmente.</span>
            </p>
          </motion.div>

          {/* Example 2 */}
          <motion.div variants={itemVariants} className="bg-navy border border-gray-800 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-cade/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb className="w-16 h-16 text-blue-cade" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-cade">"COMPARAR"</h3>
            <p className="text-gray-300 leading-relaxed">
              Não revela o resultado. <span className="text-green-cade font-medium">Mas avisa que você deve procurar semelhanças e diferenças.</span>
            </p>
          </motion.div>

          {/* Example 3 */}
          <motion.div variants={itemVariants} className="bg-navy border border-gray-800 rounded-2xl p-8 relative overflow-hidden group hover:border-blue-cade/50 transition-colors">
            <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
              <Lightbulb className="w-16 h-16 text-blue-cade" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-blue-cade">"JUSTIFICAR"</h3>
            <p className="text-gray-300 leading-relaxed">
              Não resolve a questão. <span className="text-green-cade font-medium">Mas mostra que você precisa localizar a evidência que sustenta uma afirmação.</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
