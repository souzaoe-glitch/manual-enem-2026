import Image from 'next/image';
import { getCheckoutUrl } from '@/config/product';
import Link from 'next/link';

export default function ReviewSheet() {
  const checkoutUrl = getCheckoutUrl();

  return (
    <section className="bg-navy py-24 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Uma página para revisar antes da prova.
          </h2>
          <p className="text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
            100 expressões selecionadas entre comandos, conectivos, matemática, ciência, interpretação, argumentação e gráficos.
          </p>
          <div className="flex justify-center md:justify-start">
            <Link 
              href={checkoutUrl}
              className="inline-block bg-blue-cade text-white font-bold py-4 px-8 rounded-full text-lg hover:bg-blue-cade/90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              QUERO ESSA FOLHA NO MEU MATERIAL
            </Link>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="relative w-full max-w-md mx-auto aspect-[1/1.4] transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl rounded-sm">
            <Image
              src="/assets/ebook/24.png"
              alt="Página de Revisão"
              fill
              className="object-cover rounded-sm border border-gray-700/30"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
