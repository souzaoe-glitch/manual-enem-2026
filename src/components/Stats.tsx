'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ from, to, duration, prefix = '', suffix = '' }: { from: number, to: number, duration: number, prefix?: string, suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (isInView) {
      let startTime: number;
      let animationFrame: number;

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = timestamp - startTime;
        const current = Math.min(Math.floor((progress / duration) * (to - from) + from), to);
        setCount(current);

        if (progress < duration) {
          animationFrame = requestAnimationFrame(animate);
        } else {
          setCount(to);
        }
      };

      animationFrame = requestAnimationFrame(animate);
      return () => cancelAnimationFrame(animationFrame);
    }
  }, [isInView, from, to, duration]);

  const formattedCount = count >= 1000 ? count.toLocaleString('pt-BR') : count;

  return <span ref={ref}>{prefix}{formattedCount}{suffix}</span>;
}

export default function Stats() {
  const stats = [
    { num: 1000, prefix: '+', suffix: '', text: 'palavras e expressões estratégicas' },
    { num: 90, prefix: '', suffix: '', text: 'questões oficiais analisadas' },
    { num: 25, prefix: '', suffix: '', text: 'páginas visuais' },
    { num: 4, prefix: '', suffix: ' etapas', text: 'no Método C.A.D.E.' },
  ];

  return (
    <section className="py-16 bg-ice text-navy border-b border-gray-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <div className="text-4xl md:text-5xl font-black text-blue-cade mb-2">
                <Counter 
                  from={0} 
                  to={stat.num} 
                  duration={2000} 
                  prefix={stat.prefix} 
                  suffix={stat.suffix} 
                />
              </div>
              <p className="text-sm md:text-base font-medium text-gray-700 max-w-[200px]">
                {stat.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
