import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '@/components/ui/code-block'
import { GitHubIcon } from '@/components/icons/github-icon'
import { JsonLd } from '@/components/seo/json-ld'
import { DEVELOPER_TOOLS, ASSESSMENT_TOOLS, AGENTSHIELD } from '@/lib/tools'
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
      <section className="py-24 md:py-32">
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

      {/* Problem Statement */}
      <section className="bg-bg-secondary py-20">
        <Container>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto text-center">
            Every company shipping AI is one regulatory deadline away from a
            compliance gap they can&apos;t close. The EU AI Act is live. Most
            teams don&apos;t have the tools to respond.
          </p>
        </Container>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 scroll-mt-20">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-cream text-center mb-16">
            The Tools
          </h2>

          {/* Developer Tools */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-text-secondary mb-8 uppercase tracking-wider text-sm">
              Developer Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {DEVELOPER_TOOLS.map((tool, i) => (
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
                    language={tool.language === 'docker' ? 'bash' : 'bash'}
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
          </div>

          {/* Assessment Tools */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold text-text-secondary mb-8 uppercase tracking-wider text-sm">
              Assessment Tools
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ASSESSMENT_TOOLS.map((tool, i) => (
                <Card key={tool.slug}>
                  <Badge variant="gold" className="mb-4">
                    {String(DEVELOPER_TOOLS.length + i + 1).padStart(2, '0')}
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
          </div>

          {/* Flagship Product */}
          <div>
            <h3 className="text-xl font-semibold text-text-secondary mb-8 uppercase tracking-wider text-sm">
              Flagship Product
            </h3>
            <Card className="border-gold/40 max-w-2xl">
              <Badge variant="gold" className="mb-4">
                Flagship Product
              </Badge>
              <h4 className="font-bold text-xl text-cream mt-3">
                {AGENTSHIELD.name}
              </h4>
              <p className="text-sm text-text-secondary mt-2">
                {AGENTSHIELD.description}
              </p>
              <p className="text-sm text-text-secondary mt-2">
                {AGENTSHIELD.longDescription}
              </p>
              <div className="mt-4 flex gap-2">
                <Badge variant="gold">{AGENTSHIELD.euAiActArticles}</Badge>
                <Badge variant="steel">{AGENTSHIELD.euAiActLabel}</Badge>
              </div>
              <Button href="/products#agentshield" className="mt-6">
                Learn More
              </Button>
            </Card>
          </div>
        </Container>
      </section>

      {/* EU AI Act Enforcement Timeline */}
      <section className="bg-bg-secondary py-20">
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
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-gold bg-bg-secondary" />
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
                  <div className="absolute -left-5 top-1 w-3 h-3 rounded-full border-2 border-gold bg-bg-secondary" />
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

      {/* Social Proof */}
      <section className="py-16">
        <Container className="text-center">
          <p className="text-lg text-text-secondary">
            6 open source tools. Apache 2.0 licensed. Active development on{' '}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-link hover:underline inline-flex items-center gap-1.5"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </a>
            .
          </p>
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
