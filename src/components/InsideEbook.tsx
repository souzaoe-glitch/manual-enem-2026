'use client';

import { motion } from 'framer-motion';
import { 
  TerminalSquare, 
  MessageSquareQuote, 
  Users, 
  Dna, 
  FlaskConical, 
  Zap, 
  Calculator, 
  XOctagon 
} from 'lucide-react';

const subjects = [
  {
    title: "Comandos do ENEM",
    items: "identificar, inferir, relacionar, analisar...",
    icon: TerminalSquare,
    color: "blue",
    borderClass: "border-l-blue-cade",
    iconClass: "text-blue-cade",
    bgClass: "bg-blue-cade/10"
  },
  {
    title: "Linguagens",
    items: "intenção, ironia, gênero, conectivos...",
    icon: MessageSquareQuote,
    color: "blue",
    borderClass: "border-l-blue-cade",
    iconClass: "text-blue-cade",
    bgClass: "bg-blue-cade/10"
  },
  {
    title: "Ciências Humanas",
    items: "poder, território, cidadania, conflito...",
    icon: Users,
    color: "purple",
    borderClass: "border-l-purple-600",
    iconClass: "text-purple-600",
    bgClass: "bg-purple-600/10"
  },
  {
    title: "Biologia",
    items: "ecologia, genética, imunidade, evolução...",
    icon: Dna,
    color: "green",
    borderClass: "border-l-green-cade",
    iconClass: "text-green-cade",
    bgClass: "bg-green-cade/10"
  },
  {
    title: "Química",
    items: "pH, concentração, oxidação, equilíbrio...",
    icon: FlaskConical,
    color: "green",
    borderClass: "border-l-green-cade",
    iconClass: "text-green-cade",
    bgClass: "bg-green-cade/10"
  },
  {
    title: "Física",
    items: "movimento, energia, eletricidade, ondas...",
    icon: Zap,
    color: "green",
    borderClass: "border-l-green-cade",
    iconClass: "text-green-cade",
    bgClass: "bg-green-cade/10"
  },
  {
    title: "Matemática",
    items: "proporção, porcentagem, gráficos, estatística...",
    icon: Calculator,
    color: "yellow",
    borderClass: "border-l-yellow-cade",
    iconClass: "text-yellow-cade",
    bgClass: "bg-yellow-cade/10"
  },
  {
    title: "Distratores",
    items: "10 padrões que fazem alternativas erradas parecerem certas.",
    icon: XOctagon,
    color: "red",
    borderClass: "border-l-red-cade",
    iconClass: "text-red-cade",
    bgClass: "bg-red-cade/10"
  }
];

export function InsideEbook() {
  return (
    <section id="inside" className="bg-ice py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold text-navy mb-6 tracking-tight"
          >
            Você não recebe uma lista de palavras. Recebe um sistema de leitura.
          </motion.h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {subjects.map((subject, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              className={`bg-white p-5 md:p-6 rounded-xl shadow-sm border-y border-r border-l-4 border-y-gray-100 border-r-gray-100 ${subject.borderClass} hover:shadow-md transition-all group`}
            >
              <div className={`w-10 h-10 md:w-12 md:h-12 rounded-lg flex items-center justify-center mb-4 ${subject.bgClass}`}>
                <subject.icon className={`w-5 h-5 md:w-6 md:h-6 ${subject.iconClass}`} />
              </div>
              <h3 className="text-navy font-bold text-lg mb-2 group-hover:text-opacity-80 transition-colors">
                {subject.title}
              </h3>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                {subject.items}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
