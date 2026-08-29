import Link from 'next/link';
import { productConfig } from '@/config/product';

export default function Footer() {
  const currentYear = new Date().getFullYear(); // 2026

  return (
    <footer className="bg-navy text-gray-400 py-12 px-6 border-t border-gray-800 text-sm leading-relaxed">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
        <div className="space-y-4">
          <h3 className="text-white font-bold text-lg mb-4">MANUAL DAS PALAVRAS-CHAVE ENEM 2026</h3>
          <p>
            Material educacional independente. Não possui vínculo, chancela ou parceria com INEP ou MEC. As marcas eventualmente mencionadas pertencem aos respectivos titulares.
          </p>
          <div className="space-y-1 pt-4">
            <h4 className="text-white font-medium">Fontes:</h4>
            <p>Instituto Nacional de Estudos e Pesquisas Educacionais Anísio Teixeira — INEP, Matriz de Referência do ENEM, Provas e Gabaritos oficiais de edições anteriores.</p>
          </div>
          <p className="italic pt-2">
            Questões e gabaritos foram utilizados como referência educacional a partir das publicações oficiais correspondentes.
          </p>
        </div>

        <div className="flex flex-col md:items-end space-y-4">
          <h4 className="text-white font-medium mb-2">Links Úteis</h4>
          <nav className="flex flex-col gap-3 md:items-end">
            <a href={productConfig.termsUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Termos de Uso</a>
            <a href={productConfig.privacyUrl} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Política de Privacidade</a>
            <a href={`mailto:${productConfig.supportEmail || ''}`} className="hover:text-white transition-colors">Contato</a>
            <a href={productConfig.supportUrl || '#'} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Suporte</a>
            {productConfig.author?.instagram && (
              <a href={`https://instagram.com/${productConfig.author.instagram}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                Instagram: @{productConfig.author.instagram}
              </a>
            )}
          </nav>
        </div>
      </div>

      <div className="max-w-5xl mx-auto pt-8 border-t border-gray-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© {currentYear}. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}
