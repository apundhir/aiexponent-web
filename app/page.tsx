import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '@/components/ui/code-block'
import { JsonLd } from '@/components/seo/json-ld'
import { TOOLS, AGENTSHIELD, DEVELOPER_TOOLS } from '@/lib/tools'
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
    tools: [],
  },
  {
    date: 'Aug 2025',
    label: 'GPAI Model Obligations',
    article: 'Article 53',
    status: 'upcoming' as const,
    tools: ['License Compliance Checker'],
  },
  {
    date: 'Aug 2026',
    label: 'High-Risk AI Systems',
    article: 'Article 6',
    status: 'upcoming' as const,
    tools: ['Agentic Document Analyser', 'RAG Benchmarking'],
  },
  {
    date: 'Aug 2027',
    label: 'Full Enforcement',
    article: 'All Articles',
    status: 'upcoming' as const,
    tools: ['AgentShield'],
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

      {/* Hero */}
      <section className="bg-bg-primary py-24 md:py-32">
        <Container className="text-center">
          <h1 className="font-serif text-5xl md:text-6xl text-cream max-w-4xl mx-auto">
            Building AI that deserves to be trusted.
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-2xl mx-auto">
            Open source tools for EU AI Act compliance, AI governance, and
            responsible deployment. Built by practitioners, for practitioners.
          </p>
          <div className="mt-10">
            <Button href="#products">See How It Works</Button>
          </div>
        </Container>
      </section>

      {/* Problem Statement — CREAM INVERSION for visual rhythm */}
      <section className="bg-cream py-20">
        <Container className="text-center">
          <p className="uppercase tracking-wider text-sm text-gold-accessible font-semibold mb-6">
            The Challenge
          </p>
          <p className="text-xl text-navy max-w-3xl mx-auto leading-relaxed">
            Every company shipping AI is one regulatory deadline away from a
            compliance gap they can&apos;t close. The EU AI Act is live. Most
            teams don&apos;t have the tools to respond.
          </p>
        </Container>
      </section>

      {/* EU AI Act Enforcement Timeline — moved up */}
      <section className="bg-bg-primary py-20">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-16">
            EU AI Act Enforcement Timeline
          </h2>

          {/* Desktop horizontal timeline */}
          <div className="hidden md:block relative">
            <div className="absolute top-6 left-0 right-0 h-px bg-bg-border" />
            <div className="grid grid-cols-4 gap-6">
              {TIMELINE.map((milestone) => (
                <div key={milestone.date} className="relative pt-12">
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
                  {milestone.tools.length > 0 && (
                    <div className="mt-3 space-y-1">
                      {milestone.tools.map((t) => (
                        <p key={t} className="text-xs text-text-secondary">
                          {t}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Mobile vertical timeline */}
          <div className="md:hidden relative pl-8">
            <div className="absolute top-0 bottom-0 left-3 w-px bg-bg-border" />
            <div className="space-y-10">
              {TIMELINE.map((milestone) => (
                <div key={milestone.date} className="relative">
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
                  {milestone.tools.length > 0 && (
                    <div className="mt-2 space-y-1">
                      {milestone.tools.map((t) => (
                        <p key={t} className="text-xs text-text-secondary">
                          {t}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Gold divider */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

      {/* Featured Tools */}
      <section id="products" className="bg-bg-secondary py-20 scroll-mt-20">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-16">
            Featured Tools
          </h2>

          {/* AgentShield — flagship hero card */}
          <Card className="border-gold/40 mb-8">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
              <div className="flex-1">
                <Badge variant="gold" className="mb-4">
                  Flagship Product
                </Badge>
                <h3 className="font-bold text-2xl md:text-3xl text-cream mt-3">
                  {AGENTSHIELD.name}
                </h3>
                <p className="text-base text-text-secondary mt-3">
                  {AGENTSHIELD.description}
                </p>
                <p className="text-base text-text-secondary mt-2">
                  {AGENTSHIELD.longDescription}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Badge variant="gold">{AGENTSHIELD.euAiActArticles}</Badge>
                  <Badge variant="steel">{AGENTSHIELD.euAiActLabel}</Badge>
                </div>
                <Button href="/products#agentshield" className="mt-6">
                  Learn More
                </Button>
              </div>
            </div>
          </Card>

          {/* Two OSS tools side by side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {FEATURED_TOOLS.map((tool, i) => (
              <Card key={tool.slug}>
                <Badge variant="gold" className="mb-4">
                  {String(i + 1).padStart(2, '0')}
                </Badge>
                <h4 className="font-bold text-xl text-cream mt-3">
                  {tool.name}
                </h4>
                <p className="text-sm text-text-secondary mt-2">
                  {tool.description}
                </p>
                <div className="mt-4">
                  <Badge variant="gold">{tool.euAiActArticle}</Badge>
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
            ))}
          </div>

          {/* View all link */}
          <div className="text-center">
            <Link
              href="/products"
              className="text-text-link hover:underline text-base font-medium inline-flex items-center gap-1"
            >
              View all 6 open source tools
              <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </Container>
      </section>

      {/* Enterprise CTA */}
      <section className="bg-bg-surface py-16">
        <Container>
          <div className="border-l-2 border-gold pl-8 max-w-2xl">
            <h2 className="font-serif text-2xl md:text-3xl text-cream mb-4">
              Need governance at scale?
            </h2>
            <p className="text-text-secondary mb-6">
              Enterprise AI governance with AgentShield. Audit logging,
              compliance reporting, and team-level visibility.
            </p>
            <Button href="/contact">Talk to Us</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
