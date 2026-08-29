import { Check, X } from 'lucide-react'

const FOR_YOU = [
  'Vai fazer o ENEM 2026',
  'Está no ensino médio',
  'Está em cursinho',
  'Está tentando novamente',
  'Perde tempo em interpretação',
  'Fica entre duas alternativas',
  'Quer melhorar leitura de gráficos',
  'Erra por unidade ou proporção',
  'Quer revisão objetiva para a reta final',
  'Prefere material visual e direto'
]

const NOT_FOR_YOU = [
  'Procura macetes mágicos',
  'Quer substituir estudo de conteúdo',
  'Acredita que uma palavra revela o gabarito',
  'Espera aprovação garantida',
  'Não pretende praticar'
]

export function Audience() {
  return (
    <section className="bg-ice py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-navy mb-12 text-center">
          Esse manual foi feito para você que...
        </h2>
        
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 mb-12">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FOR_YOU.map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <div className="bg-green-cade/10 p-1 rounded-full shrink-0 mt-1">
                  <Check className="w-5 h-5 text-green-cade stroke-[3]" />
                </div>
                <span className="text-lg text-navy/90 font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="text-center max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold text-navy mb-8 opacity-80">
            Talvez não seja para você se...
          </h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            {NOT_FOR_YOU.map((item, i) => (
              <li key={i} className="flex items-start gap-3 opacity-70">
                <X className="w-5 h-5 text-red-cade shrink-0 mt-0.5" />
                <span className="text-navy">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
