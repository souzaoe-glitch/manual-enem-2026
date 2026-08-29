'use client';

import { motion } from 'framer-motion';

export default function CADEMethod() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  const lineVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: '100%', 
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' } 
    }
  };

  const lineHorizontalVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: { 
      width: '100%', 
      opacity: 1,
      transition: { duration: 1.5, ease: 'easeInOut' } 
    }
  };

  return (
    <section id="cade" className="py-24 bg-ice overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6">
            Antes de procurar a resposta, descubra o que a questão quer de você.
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gray-200 -z-10 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-blue-cade via-yellow-cade to-green-cade"
              variants={lineHorizontalVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>

          {/* Connector Line (Mobile) */}
          <div className="block lg:hidden absolute top-0 bottom-0 left-12 w-1 bg-gray-200 -z-10 rounded-full overflow-hidden">
            <motion.div 
              className="w-full bg-gradient-to-b from-blue-cade via-yellow-cade to-green-cade"
              variants={lineVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            />
          </div>

          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-6 relative"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-50px' }}
          >
            {/* C */}
            <motion.div variants={cardVariants} className="flex flex-row lg:flex-col items-start lg:items-center relative">
              <div className="w-24 h-24 lg:w-48 lg:h-48 shrink-0 bg-blue-cade rounded-3xl lg:rounded-[3rem] shadow-xl flex items-center justify-center transform lg:-rotate-3 hover:rotate-0 transition-transform duration-300 z-10 border-4 border-white">
                <span className="text-white text-6xl lg:text-9xl font-black">C</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex-1 lg:w-full">
                <h3 className="text-xl font-bold text-blue-cade mb-2">COMANDO</h3>
                <p className="text-gray-700 font-medium mb-3">Qual ação o verbo está exigindo?</p>
                <div className="flex flex-wrap gap-2">
                  {['identificar', 'inferir', 'comparar', 'relacionar', 'avaliar', 'determinar'].map(word => (
                    <span key={word} className="text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-md font-medium border border-blue-100">{word}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* A */}
            <motion.div variants={cardVariants} className="flex flex-row lg:flex-col items-start lg:items-center relative">
              <div className="w-24 h-24 lg:w-48 lg:h-48 shrink-0 bg-yellow-cade rounded-3xl lg:rounded-[3rem] shadow-xl flex items-center justify-center transform lg:rotate-2 hover:rotate-0 transition-transform duration-300 z-10 border-4 border-white">
                <span className="text-navy text-6xl lg:text-9xl font-black">A</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex-1 lg:w-full">
                <h3 className="text-xl font-bold text-yellow-500 mb-2">ÂNCORA</h3>
                <p className="text-gray-700 font-medium mb-3">Qual palavra, dado ou trecho delimita o problema?</p>
                <div className="flex flex-wrap gap-2">
                  {['tempo', 'causa', 'gráfico', 'contexto', 'unidade', 'público-alvo'].map(word => (
                    <span key={word} className="text-xs bg-yellow-50 text-yellow-700 px-2 py-1 rounded-md font-medium border border-yellow-100">{word}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* D */}
            <motion.div variants={cardVariants} className="flex flex-row lg:flex-col items-start lg:items-center relative">
              <div className="w-24 h-24 lg:w-48 lg:h-48 shrink-0 bg-green-cade rounded-3xl lg:rounded-[3rem] shadow-xl flex items-center justify-center transform lg:-rotate-2 hover:rotate-0 transition-transform duration-300 z-10 border-4 border-white">
                <span className="text-white text-6xl lg:text-9xl font-black">D</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex-1 lg:w-full">
                <h3 className="text-xl font-bold text-green-cade mb-2">DIREÇÃO</h3>
                <p className="text-gray-700 font-medium mb-3">Qual relação lógica você precisa encontrar?</p>
                <div className="flex flex-col gap-2">
                  {['causa → efeito', 'texto → intenção', 'grandeza → variação'].map(word => (
                    <span key={word} className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded-md font-medium border border-green-100 block w-fit">{word}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* E */}
            <motion.div variants={cardVariants} className="flex flex-row lg:flex-col items-start lg:items-center relative">
              <div className="w-24 h-24 lg:w-48 lg:h-48 shrink-0 bg-red-cade rounded-3xl lg:rounded-[3rem] shadow-xl flex items-center justify-center transform lg:rotate-3 hover:rotate-0 transition-transform duration-300 z-10 border-4 border-white">
                <span className="text-white text-6xl lg:text-9xl font-black">E</span>
              </div>
              <div className="ml-6 lg:ml-0 lg:mt-8 bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex-1 lg:w-full">
                <h3 className="text-xl font-bold text-red-cade mb-2">ELIMINAÇÃO</h3>
                <p className="text-gray-700 font-medium mb-3">Qual alternativa não executa corretamente o comando?</p>
                <div className="flex flex-wrap gap-2">
                  {['extrapolação', 'inversão', 'unidade errada', 'generalização'].map(word => (
                    <span key={word} className="text-xs bg-red-50 text-red-700 px-2 py-1 rounded-md font-medium border border-red-100">{word}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
