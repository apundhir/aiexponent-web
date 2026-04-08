import type { Metadata } from 'next'
import Script from 'next/script'
import { lato, jetbrainsMono, displayFont } from '@/lib/fonts'
import { baseMetadata, siteConfig } from '@/lib/metadata'
import { Navigation } from '@/components/layout/navigation'
import { Footer } from '@/components/layout/footer'
import { SkipLink } from '@/components/ui/skip-link'
import { JsonLd } from '@/components/seo/json-ld'
import './globals.css'

export const metadata: Metadata = baseMetadata

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${siteConfig.url}/#organization`,
  name: 'AiExponent LLC',
  alternateName: 'AiExponent',
  url: siteConfig.url,
  description: siteConfig.description,
  email: siteConfig.email,
  sameAs: [siteConfig.github, siteConfig.linkedin],
  knowsAbout: [
    'AI governance',
    'EU AI Act compliance',
    'open source AI tools',
    'AI risk management',
    'NIST AI RMF',
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${jetbrainsMono.variable} ${displayFont.variable}`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <JsonLd data={organizationSchema} />
        <JsonLd
          data={{
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: siteConfig.name,
            url: siteConfig.url,
          }}
        />
      </head>
      <body className="bg-bg-primary text-text-primary font-sans antialiased min-h-screen flex flex-col">
        <SkipLink />
        <Navigation />
        <main id="main-content" role="main" className="flex-1">
          {children}
        </main>
        <Footer />
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src={`${process.env.NEXT_PUBLIC_PLAUSIBLE_HOST || 'https://plausible.io'}/js/script.js`}
            strategy="lazyOnload"
          />
        )}
      </body>
    </html>
  )
}
