'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PlayCircle, ArrowRight, Check } from 'lucide-react';
import { productConfig } from '@/config/product';
import { fbEvents } from './FacebookPixel';

export default function InteractiveDemo() {
  const [step, setStep] = useState(0);

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const resetDemo = () => setStep(0);

  return (
    <section className="py-24 bg-ice">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Veja o Método C.A.D.E. funcionando em 30 segundos.
          </h2>
          <p className="text-gray-600 text-lg">
            Acompanhe o passo a passo de como resolver uma questão de forma estratégica.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          {/* Question Text */}
          <div className="p-8 border-b border-gray-100 bg-gray-50/50">
            <p className="text-gray-800 text-lg leading-relaxed font-medium">
              Uma campanha pública apresenta a frase:{' '}
              <span className={`transition-all duration-500 ${step >= 2 ? 'bg-yellow-100 text-yellow-800 font-bold px-1 rounded' : ''}`}>
                "Feche a torneira
              </span>{' '}
              enquanto escova os dentes. Pequenas mudanças{' '}
              <span className={`transition-all duration-500 ${step >= 2 ? 'bg-yellow-100 text-yellow-800 font-bold px-1 rounded' : ''}`}>
                preservam recursos."
              </span>
            </p>
            <p className="mt-4 text-gray-800 text-lg font-medium">
              A{' '}
              <span className={`transition-all duration-500 ${step >= 1 ? 'bg-blue-100 text-blue-800 font-bold px-1 rounded' : ''}`}>
                principal finalidade
              </span>{' '}
              da mensagem é:
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Alternatives */}
              <div className="space-y-3">
                <div className={`p-4 rounded-lg border transition-all duration-300 flex items-start gap-3 ${step >= 4 ? 'bg-gray-50 border-gray-200 opacity-60 line-through decoration-red-cade decoration-2' : 'border-gray-200 hover:border-gray-300'}`}>
                  <span className="font-bold text-gray-500 min-w-[24px]">A)</span>
                  <span className="text-gray-700">comparar tipos de consumo</span>
                </div>
                
                <div className={`p-4 rounded-lg border transition-all duration-500 flex items-start gap-3 ${step === 5 ? 'bg-green-50 border-green-cade shadow-sm scale-[1.02]' : 'border-gray-200'}`}>
                  <span className={`font-bold min-w-[24px] ${step === 5 ? 'text-green-700' : 'text-gray-500'}`}>B)</span>
                  <span className={`${step === 5 ? 'text-green-800 font-medium' : 'text-gray-700'}`}>incentivar economia de água</span>
                  {step === 5 && <Check className="text-green-cade ml-auto" />}
                </div>
                
                <div className={`p-4 rounded-lg border transition-all duration-300 flex items-start gap-3 ${step >= 4 ? 'bg-gray-50 border-gray-200 opacity-60 line-through decoration-red-cade decoration-2' : 'border-gray-200 hover:border-gray-300'}`}>
                  <span className="font-bold text-gray-500 min-w-[24px]">C)</span>
                  <span className="text-gray-700">explicar o ciclo da água</span>
                </div>
                
                <div className={`p-4 rounded-lg border transition-all duration-300 flex items-start gap-3 ${step >= 4 ? 'bg-gray-50 border-gray-200 opacity-60 line-through decoration-red-cade decoration-2' : 'border-gray-200 hover:border-gray-300'}`}>
                  <span className="font-bold text-gray-500 min-w-[24px]">D)</span>
                  <span className="text-gray-700">divulgar uma empresa</span>
                </div>
                
                <div className={`p-4 rounded-lg border transition-all duration-300 flex items-start gap-3 ${step >= 4 ? 'bg-gray-50 border-gray-200 opacity-60 line-through decoration-red-cade decoration-2' : 'border-gray-200 hover:border-gray-300'}`}>
                  <span className="font-bold text-gray-500 min-w-[24px]">E)</span>
                  <span className="text-gray-700">criticar os serviços públicos</span>
                </div>
              </div>

              {/* Analysis Panel */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex flex-col h-full">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-6 border-b border-gray-200 pb-2">Análise Estratégica</h4>
                
                <div className="flex-1 space-y-4">
                  <AnimatePresence mode="popLayout">
                    {step === 0 && (
                      <motion.div 
                        initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.95 }}
                        className="h-full flex flex-col items-center justify-center text-center text-gray-500"
                      >
                        <PlayCircle className="w-12 h-12 mb-4 text-gray-300" />
                        <p>Inicie a análise para ver o método em ação.</p>
                      </motion.div>
                    )}

                    {step >= 1 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-blue-cade text-white flex items-center justify-center font-bold shrink-0">C</div>
                        <div>
                          <p className="text-sm font-bold text-blue-cade">COMANDO</p>
                          <p className="text-gray-700 text-sm">"principal finalidade" = intenção do texto.</p>
                        </div>
                      </motion.div>
                    )}

                    {step >= 2 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-cade text-navy flex items-center justify-center font-bold shrink-0">A</div>
                        <div>
                          <p className="text-sm font-bold text-yellow-600">ÂNCORA</p>
                          <p className="text-gray-700 text-sm">"feche a torneira" e "preservam recursos".</p>
                        </div>
                      </motion.div>
                    )}

                    {step >= 3 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-cade text-white flex items-center justify-center font-bold shrink-0">D</div>
                        <div>
                          <p className="text-sm font-bold text-green-cade">DIREÇÃO</p>
                          <p className="text-gray-700 text-sm">identificar a ação que a mensagem quer provocar.</p>
                        </div>
                      </motion.div>
                    )}

                    {step >= 4 && (
                      <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-cade text-white flex items-center justify-center font-bold shrink-0">E</div>
                        <div>
                          <p className="text-sm font-bold text-red-cade">ELIMINAÇÃO</p>
                          <p className="text-gray-700 text-sm">A, C, D, E não são a intenção de "fechar a torneira".</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div className="mt-6 pt-4 border-t border-gray-200">
                  {step < 5 ? (
                    <button 
                      onClick={nextStep}
                      className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
                    >
                      {step === 0 ? 'Iniciar Análise' : 'Próximo Passo'}
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  ) : (
                    <button 
                      onClick={resetDemo}
                      className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition-colors text-sm"
                    >
                      Recomeçar Demo
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {step === 5 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <a 
              href={productConfig?.checkoutUrl || "#"} 
              onClick={() => fbEvents.initiateCheckout()}
              className="inline-flex items-center justify-center bg-green-cade hover:bg-green-600 text-white font-bold text-lg py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
            >
              AGORA EU ENTENDI O MÉTODO
            </a>
          </motion.div>
        )}
      </div>
    </section>
  );
}
