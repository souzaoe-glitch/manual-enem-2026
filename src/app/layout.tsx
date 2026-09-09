import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import FacebookPixel from '@/components/FacebookPixel'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Manual das Palavras-Chave ENEM 2026 | Método C.A.D.E.',
  description: 'Aprenda a identificar comandos, palavras-âncora, relações e distratores do ENEM com um guia visual de +1.000 expressões e 90 questões oficiais analisadas.',
  keywords: 'ENEM 2026, palavras-chave, método CADE, questões ENEM, interpretação, distratores, estudo ENEM',
  robots: 'index, follow',
  openGraph: {
    title: 'Manual das Palavras-Chave ENEM 2026 | Método C.A.D.E.',
    description: 'Aprenda a identificar comandos, palavras-âncora, relações e distratores do ENEM com +1.000 expressões e 90 questões oficiais analisadas.',
    type: 'website',
    locale: 'pt_BR',
    images: [{ url: '/assets/ebook/1.png', width: 800, height: 1200, alt: 'Manual das Palavras-Chave ENEM 2026' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manual das Palavras-Chave ENEM 2026',
    description: 'Método C.A.D.E. — Comando, Âncora, Direção, Eliminação.',
    images: ['/assets/ebook/1.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className={inter.className}>
        <FacebookPixel />
        {children}
      </body>
    </html>
  )
}
