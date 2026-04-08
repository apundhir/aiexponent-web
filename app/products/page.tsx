import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { CodeBlock } from '@/components/ui/code-block'
import { GitHubIcon } from '@/components/icons/github-icon'
import { JsonLd } from '@/components/seo/json-ld'
import { DEVELOPER_TOOLS, AGENTSHIELD } from '@/lib/tools'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'AI Governance Tools — Open Source + Enterprise',
  description:
    'Explore AiExponent open source AI governance tools and AgentShield enterprise platform. EU AI Act compliance, risk management, and responsible AI deployment.',
}

const AGENTSHIELD_FEATURES = [
  'Real-time policy enforcement for AI agents',
  'Audit logging with full action traceability',
  'EU AI Act and NIST AI RMF compliance reporting',
  'Team-level visibility dashboard',
  'Role-based access controls',
  'Custom policy rule authoring',
  'API-first architecture for CI/CD integration',
  'SSO and enterprise authentication',
]

const pricingTiers = [
  {
    ...AGENTSHIELD.pricing.free,
    features: ['Up to 3 agents', 'Basic audit logging', 'Community support'],
  },
  {
    ...AGENTSHIELD.pricing.pro,
    features: [
      'Up to 25 agents',
      'Full audit logging',
      'Compliance reports',
      'Email support',
    ],
  },
  {
    ...AGENTSHIELD.pricing.team,
    features: [
      'Up to 100 agents',
      'Team dashboard',
      'Custom policies',
      'Priority support',
      'SSO',
    ],
    highlighted: true,
  },
  {
    ...AGENTSHIELD.pricing.enterprise,
    features: [
      'Unlimited agents',
      'Dedicated account manager',
      'Custom integrations',
      'SLA guarantees',
      'On-premises option',
    ],
  },
]

export default function ProductsPage() {
  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'WebPage',
          name: 'AI Governance Tools — Open Source + Enterprise',
          description:
            'Open source AI governance tools and AgentShield enterprise platform.',
          url: `${siteConfig.url}/products`,
        }}
      />

      {/* Portfolio Overview */}
      <section className="py-24 md:py-32">
        <Container>
          <h1 className="font-serif text-5xl md:text-6xl text-cream max-w-4xl">
            Open Source AI Governance Tools
          </h1>
          <p className="mt-6 text-lg text-text-secondary max-w-3xl">
            A growing portfolio of open source tools designed to help teams
            build, evaluate, and govern AI systems responsibly. Every tool maps
            to specific EU AI Act requirements so you know exactly what
            compliance gap it addresses.
          </p>
        </Container>
      </section>

      {/* Developer Tools */}
      <section className="bg-bg-secondary py-20">
        <Container>
          <h2 className="font-serif text-3xl md:text-4xl text-cream mb-4">
            Developer Tools
          </h2>
          <p className="text-text-secondary mb-12 max-w-2xl">
            Production-ready libraries and frameworks for building compliant AI
            systems. Install via pip or Docker.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {DEVELOPER_TOOLS.map((tool) => (
              <Card key={tool.slug} className="flex flex-col">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Badge variant="gold" className="mb-3">
                      {tool.euAiActArticle}
                    </Badge>
                    <h3 className="font-bold text-xl text-cream">
                      {tool.name}
                    </h3>
                  </div>
                  <Badge variant="steel">{tool.tierLabel}</Badge>
                </div>
                <p className="text-text-secondary mt-3 flex-1">
                  {tool.longDescription}
                </p>
                <div className="mt-4 rounded-md bg-bg-secondary/50 p-4">
                  <p className="text-xs text-text-tertiary uppercase tracking-wider mb-2">
                    EU AI Act Relevance
                  </p>
                  <p className="text-sm text-text-secondary">
                    <span className="text-gold font-semibold">
                      {tool.euAiActArticle} — {tool.euAiActLabel}:
                    </span>{' '}
                    {tool.euAiActDescription}
                  </p>
                </div>
                <CodeBlock
                  code={tool.installCommand}
                  language={tool.language === 'docker' ? 'bash' : 'bash'}
                  className="mt-4"
                />
                <div className="mt-4 flex gap-3">
                  <Button
                    variant="ghost"
                    href={tool.docsPath}
                    className="text-sm flex-1"
                  >
                    View Documentation
                  </Button>
                  <Button
                    variant="ghost"
                    href={`https://github.com/${tool.repo}`}
                    external
                    className="text-sm"
                  >
                    <GitHubIcon className="h-4 w-4 mr-2" />
                    GitHub
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* AgentShield Section */}
      <section id="agentshield" className="bg-bg-secondary py-20 scroll-mt-20">
        <Container>
          <div className="max-w-3xl mb-16">
            <Badge variant="gold" className="mb-4">
              Enterprise Product
            </Badge>
            <h2 className="font-serif text-3xl md:text-4xl text-cream mt-2">
              AgentShield: Enterprise AI Agent Governance
            </h2>
            <p className="text-lg text-text-secondary mt-4">
              {AGENTSHIELD.longDescription}
            </p>
          </div>

          {/* Features */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-cream mb-6">
              Platform Features
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {AGENTSHIELD_FEATURES.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="text-gold mt-0.5 shrink-0" aria-hidden="true">
                    &#10003;
                  </span>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pricing */}
          <div>
            <h3 className="text-xl font-bold text-cream mb-8">Pricing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {pricingTiers.map((tier) => (
                <Card
                  key={tier.label}
                  className={
                    'highlighted' in tier && tier.highlighted
                      ? 'border-gold/60 relative'
                      : ''
                  }
                >
                  {'highlighted' in tier && tier.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge variant="gold">Most Popular</Badge>
                    </div>
                  )}
                  <h4 className="font-bold text-lg text-cream">{tier.label}</h4>
                  <div className="mt-3 mb-4">
                    {tier.price === 'Custom' ? (
                      <span className="text-3xl font-bold text-cream">
                        Custom
                      </span>
                    ) : (
                      <>
                        <span className="text-3xl font-bold text-cream">
                          &pound;{tier.price}
                        </span>
                        <span className="text-text-tertiary text-sm">
                          /month
                        </span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-text-secondary mb-4">
                    {typeof tier.agents === 'number'
                      ? `Up to ${tier.agents} agents`
                      : `${tier.agents} agents`}
                  </p>
                  <ul className="space-y-2 mb-6">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="text-sm text-text-secondary flex items-start gap-2"
                      >
                        <span className="text-gold shrink-0" aria-hidden="true">
                          &#10003;
                        </span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  {tier.label === 'Enterprise' ? (
                    <Button
                      variant="secondary"
                      href="/contact"
                      className="w-full text-sm"
                    >
                      Contact Sales
                    </Button>
                  ) : (
                    <Button
                      variant={
                        'highlighted' in tier && tier.highlighted
                          ? 'primary'
                          : 'secondary'
                      }
                      href="/contact"
                      className="w-full text-sm"
                    >
                      Get Started
                    </Button>
                  )}
                </Card>
              ))}
            </div>
          </div>

          {/* Enterprise CTA */}
          <div className="mt-16 border-l-2 border-gold pl-8 max-w-2xl">
            <h3 className="font-serif text-2xl text-cream mb-3">
              Need a custom deployment?
            </h3>
            <p className="text-text-secondary mb-6">
              On-premises installation, custom integrations, dedicated support,
              and SLA guarantees for enterprise teams.
            </p>
            <Button href="/contact">Talk to Us</Button>
          </div>
        </Container>
      </section>
    </>
  )
}
