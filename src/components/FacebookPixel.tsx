'use client'

import Script from 'next/script'
import { useEffect } from 'react'
import { productConfig } from '@/config/product'

const PIXEL_ID = productConfig.analytics.metaPixelId

// Helper global para disparar eventos do Facebook Pixel
export function trackEvent(eventName: string, params?: Record<string, unknown>) {
  if (typeof window !== 'undefined' && (window as any).fbq) {
    (window as any).fbq('track', eventName, params)
  }
}

// Eventos específicos para a landing page
export const fbEvents = {
  // Quando clica em qualquer botão de compra
  initiateCheckout: () => trackEvent('InitiateCheckout', {
    content_name: 'Manual das Palavras-Chave ENEM 2026',
    content_category: 'Ebook',
    value: 19.90,
    currency: 'BRL',
  }),

  // Quando vê a seção de oferta/preço
  viewContent: () => trackEvent('ViewContent', {
    content_name: 'Manual das Palavras-Chave ENEM 2026',
    content_type: 'product',
    value: 19.90,
    currency: 'BRL',
  }),

  // Quando rola até 50% da página (lead qualificado)
  lead: () => trackEvent('Lead', {
    content_name: 'Manual das Palavras-Chave ENEM 2026',
  }),

  // Quando rola até 75% da página
  addToWishlist: () => trackEvent('AddToWishlist', {
    content_name: 'Manual das Palavras-Chave ENEM 2026',
    value: 19.90,
    currency: 'BRL',
  }),
}

export default function FacebookPixel() {
  if (!PIXEL_ID) return null

  useEffect(() => {
    let hasFiredLead = false
    let hasFiredWishlist = false
    let hasFiredViewContent = false

    const handleScroll = () => {
      const scrollPercent = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight

      // ViewContent quando rola 25% (viu conteúdo relevante)
      if (!hasFiredViewContent && scrollPercent > 0.25) {
        fbEvents.viewContent()
        hasFiredViewContent = true
      }

      // Lead quando rola 50% (interesse real)
      if (!hasFiredLead && scrollPercent > 0.50) {
        fbEvents.lead()
        hasFiredLead = true
      }

      // AddToWishlist quando rola 75% (alta intenção)
      if (!hasFiredWishlist && scrollPercent > 0.75) {
        fbEvents.addToWishlist()
        hasFiredWishlist = true
      }
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <Script
        id="fb-pixel"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '${PIXEL_ID}');
            fbq('track', 'PageView');
          `,
        }}
      />
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src={`https://www.facebook.com/tr?id=${PIXEL_ID}&ev=PageView&noscript=1`}
          alt=""
        />
      </noscript>
    </>
  )
}
