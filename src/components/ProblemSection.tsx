'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Clock, Target, CheckCircle2, Calculator, BarChart3 } from 'lucide-react';

const problems = [
  {
    icon: Target,
    quote: "Eu conhecia o conteúdo, mas marquei a alternativa errada.",
    cause: "Causa: não executar exatamente o comando.",
    color: "text-blue-cade",
    bg: "bg-blue-cade/10"
  },
  {
    icon: CheckCircle2,
    quote: "Duas alternativas pareciam corretas.",
    cause: "Causa: não separar resposta possível de resposta sustentada pelo texto.",
    color: "text-yellow-cade",
    bg: "bg-yellow-cade/10"
  },
  {
    icon: Clock,
    quote: "Perdi muito tempo lendo textos enormes.",
    cause: "Causa: começar a leitura sem saber o que procurar.",
    color: "text-navy",
    bg: "bg-navy/10"
  },
  {
    icon: Calculator,
    quote: "Errei uma conta simples.",
    cause: "Causa: usar a grandeza certa com a unidade errada.",
    color: "text-red-cade",
    bg: "bg-red-cade/10"
  },
  {
    icon: AlertTriangle,
    quote: "Caí numa alternativa que parecia perfeita.",
    cause: "Causa: distrator construído com conceito verdadeiro fora do contexto.",
    color: "text-red-cade",
    bg: "bg-red-cade/10"
  },
  {
    icon: BarChart3,
    quote: "Li o gráfico e mesmo assim errei.",
    cause: "Causa: olhar os números antes de identificar eixo, unidade, escala e ponto solicitado.",
    color: "text-green-cade",
    bg: "bg-green-cade/10"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function ProblemSection() {
  return (
    <section className="bg-ice py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight"
          >
            Você pode saber a matéria e ainda errar a questão.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto"
          >
            Muitos erros não acontecem porque o estudante &quot;não estudou&quot;. Acontecem porque ele identifica o assunto, mas não percebe exatamente qual relação o comando está exigindo.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {problems.map((problem, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col h-full"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${problem.bg}`}>
                <problem.icon className={`w-6 h-6 ${problem.color}`} />
              </div>
              <blockquote className="text-navy font-bold text-xl mb-4 flex-grow">
                &quot;{problem.quote}&quot;
              </blockquote>
              <div className="pt-4 border-t border-gray-100">
                <p className="text-gray-500 font-medium">
                  {problem.cause}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
