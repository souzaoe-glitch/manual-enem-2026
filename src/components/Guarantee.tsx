import { productConfig } from '@/config/product';
import { ShieldCheck } from 'lucide-react';

export default function Guarantee() {
  const { guaranteeDays } = productConfig;

  if (!guaranteeDays || guaranteeDays <= 0) {
    return null;
  }

  return (
    <section className="bg-ice py-16 px-6 border-y border-gray-200">
      <div className="max-w-2xl mx-auto flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
        <div className="flex-shrink-0 text-green-cade">
          <ShieldCheck size={80} strokeWidth={1.5} />
        </div>
        
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-navy mb-4">
            Teste o material por {guaranteeDays} dias.
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Se você não perceber que as palavras-chave clareiam a forma de ler e interpretar as questões, basta enviar um e-mail para o suporte e devolveremos 100% do seu investimento. Sem burocracia.
          </p>
        </div>
      </div>
    </section>
  );
}
