export const productConfig = {
  productName: 'Manual das Palavras-Chave ENEM 2026',
  subtitle: 'Método C.A.D.E.',
  tagline: 'Você não precisa ler uma questão procurando tudo. Leia sabendo o que precisa encontrar.',
  price: '19,90',
  installments: '2x de 9,95',
  checkoutUrl: 'https://pay.kirvano.com/6ce3c3ea-ec00-4d6e-ad5a-28281041e298',
  guaranteeDays: 7,
  pixEnabled: true,
  cardEnabled: true,
  author: {
    name: null as string | null,
    bio: null as string | null,
    photo: null as string | null,
    instagram: null as string | null,
    youtube: null as string | null,
  },
  testimonials: [] as Array<{
    name: string
    photo?: string
    text: string
    course?: string
    result?: string
    source?: string
  }>,
  analytics: {
    ga4Id: null as string | null,
    metaPixelId: null as string | null,
  },
  supportUrl: null as string | null,
  supportEmail: null as string | null,
  termsUrl: '#',
  privacyUrl: '#',
}

export type ProductConfig = typeof productConfig

export function getCheckoutUrl(): string {
  return productConfig.checkoutUrl || '#'
}

export function getFormattedPrice(): string {
  return productConfig.price ? `R$ ${productConfig.price}` : '[INSERIR PREÇO]'
}
