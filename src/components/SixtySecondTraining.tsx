'use client'

import { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw } from 'lucide-react';

const PHASES = [
  { label: 'CIRCULE O VERBO', color: '#1F6FEB', tailwindClass: 'text-blue-cade' },
  { label: 'MARQUE DUAS ÂNCORAS', color: '#FFC857', tailwindClass: 'text-yellow-cade' },
  { label: 'COMPLETE: "PRECISO ENCONTRAR ____."', color: '#20A36A', tailwindClass: 'text-green-cade' },
  { label: 'ELIMINE O QUE NÃO EXECUTA O COMANDO', color: '#E85D5D', tailwindClass: 'text-red-cade' },
];

export default function SixtySecondTraining() {
  const [isActive, setIsActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(60);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => setIsActive(!isActive);
  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(60);
  };

  const currentPhaseIndex = Math.min(3, Math.floor((60 - timeLeft) / 15));
  const currentPhase = PHASES[currentPhaseIndex];

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - ((60 - timeLeft) / 60) * circumference;

  return (
    <section className="bg-ice py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12">
          Treine o cérebro para localizar o comando antes de mergulhar no conteúdo.
        </h2>

        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative w-72 h-72 flex items-center justify-center">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 280 280">
              {PHASES.map((phase, i) => {
                const startAngle = (i * 90) * (Math.PI / 180);
                const endAngle = ((i + 1) * 90) * (Math.PI / 180);
                const largeArcFlag = 0;
                
                const startX = 140 + radius * Math.cos(startAngle);
                const startY = 140 + radius * Math.sin(startAngle);
                const endX = 140 + radius * Math.cos(endAngle);
                const endY = 140 + radius * Math.sin(endAngle);

                const d = [
                  `M ${startX} ${startY}`,
                  `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`
                ].join(' ');

                return (
                  <path
                    key={i}
                    d={d}
                    fill="none"
                    stroke={phase.color}
                    strokeWidth="8"
                    strokeOpacity="0.2"
                  />
                );
              })}
              
              <circle
                cx="140"
                cy="140"
                r={radius}
                fill="none"
                stroke={currentPhase.color}
                strokeWidth="12"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                className="transition-all duration-1000 ease-linear"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-5xl font-bold text-navy font-mono mb-2">
                00:{timeLeft.toString().padStart(2, '0')}
              </span>
              <span className={`text-sm font-bold uppercase tracking-wider text-center px-4 ${currentPhase.tailwindClass}`}>
                {currentPhase.label}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-6 text-left w-full md:w-auto">
            <div className="space-y-4">
              {PHASES.map((phase, i) => (
                <div 
                  key={i} 
                  className={`flex items-center gap-3 p-3 rounded-lg transition-colors ${
                    i === currentPhaseIndex && isActive ? 'bg-white shadow-sm' : 'opacity-70'
                  }`}
                >
                  <div className="w-4 h-4 rounded-full" style={{ backgroundColor: phase.color }} />
                  <div>
                    <span className="font-bold text-navy text-sm block">FASE {i + 1} ({15}s)</span>
                    <span className="text-sm font-medium text-gray-700">{phase.label}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-4 justify-center md:justify-start mt-4">
              <button
                onClick={toggleTimer}
                className="flex items-center gap-2 bg-navy text-white px-6 py-3 rounded-full font-bold hover:bg-navy/90 transition-colors"
              >
                {isActive ? <Pause size={20} /> : <Play size={20} />}
                {isActive ? 'Pausar' : 'Iniciar demonstração'}
              </button>
              <button
                onClick={resetTimer}
                className="flex items-center gap-2 bg-gray-200 text-navy px-4 py-3 rounded-full font-bold hover:bg-gray-300 transition-colors"
                aria-label="Reiniciar"
              >
                <RotateCcw size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
