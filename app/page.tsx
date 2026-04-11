import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '@/components/ui/code-block'
import { AnimateOnScroll } from '@/components/ui/animate-on-scroll'
import { JsonLd } from '@/components/seo/json-ld'
import { TOOLS, SIGIL } from '@/lib/tools'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'AiExponent — Open Source AI Governance Tools & EU AI Act Compliance',
  description:
    'Open source tools and enterprise products for AI governance, EU AI Act compliance, and responsible AI deployment. Apache 2.0 licensed.',
}

const TIMELINE = [
  {
    date: 'Feb 2025',
    label: 'Prohibited AI Practices',
    article: 'Article 5',
    status: 'enforced' as const,
    consequence: 'Fines up to €35M. 8 AI practices are illegal now.',
    tools: [],
  },
  {
    date: 'Aug 2025',
    label: 'GPAI & AI Literacy',
    article: 'Articles 4 & 53',
    status: 'enforced' as const,
    consequence: 'GPAI providers must publish documentation. All deployers must evidence staff AI literacy.',
    tools: ['License Compliance Checker'],
  },
  {
    date: 'Aug 2026',
    label: 'High-Risk AI Systems',
    article: 'Articles 9–15',
    status: 'upcoming' as const,
    consequence: 'Accuracy, data governance, transparency, human oversight — all required for high-risk AI.',
    tools: ['Agentic Document Analyser', 'RAG Benchmarking'],
  },
  {
    date: 'Aug 2027',
    label: 'AI in Regulated Products',
    article: 'Annex I',
    status: 'upcoming' as const,
    consequence: 'AI embedded in medical devices, machinery, and vehicles. Sector-specific — not full enforcement.',
    tools: ['Sigil'],
  },
]

const FEATURED_TOOLS = TOOLS.filter((t) =>
  ['license-compliance-checker', 'agentic-document-analyser'].includes(t.slug)
)

export default function HomePage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'AiExponent — Open Source AI Governance Tools',
          description: siteConfig.description,
          url: siteConfig.url,
        }}
      />

      {/* Hero — dramatic spacing, cinematic pacing */}
      <section className="bg-bg-primary py-28 md:py-40">
        <Container className="text-center">
          <AnimateOnScroll>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-cream max-w-4xl mx-auto leading-[1.08]">
              Building AI that deserves to be trusted.
            </h1>
          </AnimateOnScroll>
          <AnimateOnScroll delay={200}>
            <p className="mt-8 text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
              Open source tools for EU AI Act compliance, AI governance, and
              responsible deployment. Built by practitioners, for practitioners.
            </p>
          </AnimateOnScroll>
          <AnimateOnScroll delay={400}>
            <div className="mt-12">
              <Button href="#products">See How It Works</Button>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Problem Statement — CREAM INVERSION */}
      <section className="bg-cream py-16 md:py-20">
        <Container className="text-center">
          <AnimateOnScroll>
            <p className="uppercase tracking-wider text-sm text-gold-accessible font-semibold mb-6">
              The Challenge
            </p>
            <p className="text-xl md:text-2xl text-navy max-w-3xl mx-auto leading-relaxed font-light">
              Every company shipping AI is one regulatory deadline away from a
              compliance gap they can&apos;t close. The EU AI Act is live. Most
              teams don&apos;t have the tools to respond.
            </p>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* EU AI Act Enforcement Timeline */}
      <section className="bg-bg-primary py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
              EU AI Act Enforcement Timeline
            </h2>
            <p className="text-text-secondary text-center mb-16 max-w-2xl mx-auto">
              The primary regulatory forcing function for responsible AI. Tools for every enforcement milestone.
            </p>
          </AnimateOnScroll>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-bg-border" />
            <div className="grid grid-cols-4 gap-8">
              {TIMELINE.map((milestone, i) => (
                <AnimateOnScroll key={milestone.date} delay={i * 150}>
                  <div className="relative pt-12">
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gold bg-bg-primary" />
                    <p className="text-gold font-semibold text-sm mb-2">
                      {milestone.date}
                    </p>
                    <h4 className="text-cream font-bold text-base mb-1">
                      {milestone.label}
                    </h4>
                    <p className="text-text-tertiary text-xs mb-2">
                      {milestone.article}
                    </p>
                    {milestone.status === 'enforced' && (
                      <Badge variant="gold">Enforced</Badge>
                    )}
                    {'consequence' in milestone && (
                      <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                        {milestone.consequence}
                      </p>
                    )}
                    {milestone.tools.length > 0 && (
                      <div className="mt-3 space-y-1">
                        {milestone.tools.map((t) => (
                          <p key={t} className="text-xs text-steel">
                            {t}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative pl-8">
            <div className="absolute top-0 bottom-0 left-3 w-px bg-bg-border" />
            <div className="space-y-10">
              {TIMELINE.map((milestone) => (
                <AnimateOnScroll key={milestone.date}>
                  <div className="relative">
                    <div className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-gold bg-bg-primary" />
                    <p className="text-gold font-semibold text-sm mb-1">
                      {milestone.date}
                    </p>
                    <h4 className="text-cream font-bold text-base mb-1">
                      {milestone.label}
                    </h4>
                    <p className="text-text-tertiary text-xs mb-2">
                      {milestone.article}
                    </p>
                    {milestone.status === 'enforced' && (
                      <Badge variant="gold">Enforced</Badge>
                    )}
                    {'consequence' in milestone && (
                      <p className="text-text-secondary text-xs mt-2 leading-relaxed">
                        {milestone.consequence}
                      </p>
                    )}
                    {milestone.tools.length > 0 && (
                      <div className="mt-2 space-y-1">
                        {milestone.tools.map((t) => (
                          <p key={t} className="text-xs text-steel">
                            {t}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </AnimateOnScroll>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Open Source Tools */}
      <section id="products" className="bg-bg-secondary py-20 md:py-28 scroll-mt-20">
        <Container>
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-2">
              Open Source Tools
            </h2>
            <p className="text-gold text-center text-sm font-semibold tracking-wider uppercase mb-4">
              Free. Apache 2.0. No account required.
            </p>
            <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
              Each tool maps to a specific EU AI Act article. Install via pip and ship compliance evidence today.
            </p>
          </AnimateOnScroll>

          {/* Two OSS tools side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {FEATURED_TOOLS.map((tool, i) => (
              <AnimateOnScroll key={tool.slug} delay={i * 150}>
                <Card className="h-full">
                  <Badge variant="gold" className="mb-4">
                    {String(i + 1).padStart(2, '0')}
                  </Badge>
                  <h4 className="font-bold text-xl text-cream mt-3">
                    {tool.name}
                  </h4>
                  <p className="text-sm text-text-secondary mt-2">
                    {tool.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <Badge variant="gold">{tool.euAiActArticle}</Badge>
                    <Badge variant="steel">{tool.tierLabel}</Badge>
                  </div>
                  <CodeBlock
                    code={tool.installCommand}
                    language="bash"
                    className="mt-4"
                  />
                  <Button
                    variant="ghost"
                    href={tool.docsPath}
                    className="mt-4 w-full text-sm"
                  >
                    View Documentation
                  </Button>
                </Card>
              </AnimateOnScroll>
            ))}
          </div>

          {/* View all link */}
          <AnimateOnScroll>
            <div className="text-center">
              <Link
                href="/products"
                className="text-gold hover:text-gold/80 hover:underline text-base font-medium inline-flex items-center gap-1 transition-colors"
              >
                View all open source tools
                <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </AnimateOnScroll>
        </Container>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Enterprise Platform — Sigil */}
      <section className="bg-bg-surface py-20 md:py-28">
        <Container>
          <AnimateOnScroll>
            <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-4">
              Enterprise Platform
            </h2>
            <p className="text-text-secondary text-center mb-16 max-w-xl mx-auto">
              For teams that need governance at scale — policy enforcement, audit logging, and compliance reporting across your entire AI portfolio.
            </p>
          </AnimateOnScroll>

          {/* Sigil — flagship hero card */}
          <AnimateOnScroll>
            <Card className="border-gold/60 bg-bg-secondary p-8 shadow-[0_0_0_1px_rgba(212,175,55,0.2),0_8px_32px_rgba(212,175,55,0.08)]">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                <div className="flex-1">
                  <Badge variant="gold" className="mb-4">
                    Flagship Product
                  </Badge>
                  <h3 className="font-serif font-bold text-2xl md:text-3xl text-cream mt-3">
                    {SIGIL.name}
                  </h3>
                  <p className="text-base text-text-secondary mt-3 leading-relaxed">
                    {SIGIL.longDescription}
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    <Badge variant="gold">{SIGIL.euAiActArticles}</Badge>
                    <Badge variant="steel">{SIGIL.euAiActLabel}</Badge>
                  </div>
                  <Button href="/products#sigil" className="mt-6">
                    Learn More
                  </Button>
                </div>
              </div>
            </Card>
          </AnimateOnScroll>
        </Container>
      </section>
    </>
  )
}
