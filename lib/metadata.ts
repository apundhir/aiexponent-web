import type { Metadata } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://aiexponent.com'

export const siteConfig = {
  name: 'AiExponent',
  description: 'Open source tools and enterprise products for AI governance, EU AI Act compliance, and responsible deployment.',
  url: siteUrl,
  tagline: 'Building AI that deserves to be trusted.',
  email: 'hello@aiexponent.com',
  github: 'https://github.com/aiexponenthq',
  linkedin: 'https://linkedin.com/company/aiexponent',
  sigil: '/products#sigil',
  askajay: 'https://askajay.ai',
}

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'AiExponent — Building AI that deserves to be trusted',
    template: '%s | AiExponent',
  },
  description: siteConfig.description,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: siteConfig.name,
    images: [
      {
        url: '/og-default.png',
        width: 1200,
        height: 630,
        alt: 'AiExponent — Building AI that deserves to be trusted',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}
