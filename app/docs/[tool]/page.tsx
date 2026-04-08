import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { CodeBlock } from '@/components/ui/code-block'
import { JsonLd } from '@/components/seo/json-ld'
import { TOOLS } from '@/lib/tools'
import { siteConfig } from '@/lib/metadata'

interface ToolPageProps {
  params: { tool: string }
}

export async function generateStaticParams() {
  return TOOLS.map((tool) => ({ tool: tool.slug }))
}

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { tool: slug } = params
  const tool = TOOLS.find((t) => t.slug === slug)
  if (!tool) return {}

  return {
    title: `${tool.name} — Documentation`,
    description: tool.longDescription,
  }
}

// Features and limitations now come from lib/tools.ts (single source of truth)

export default function ToolDocPage({ params }: ToolPageProps) {
  const { tool: slug } = params
  const tool = TOOLS.find((t) => t.slug === slug)

  if (!tool) {
    notFound()
  }

  const features = tool.features

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.longDescription,
    url: `${siteConfig.url}/docs/${tool.slug}`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    license: 'https://opensource.org/licenses/Apache-2.0',
    author: {
      '@type': 'Organization',
      name: 'AiExponent',
      url: siteConfig.url,
    },
    codeRepository: `https://github.com/${tool.repo}`,
    programmingLanguage: tool.language === 'docker' ? 'Python' : tool.language === 'python' ? 'Python' : 'TypeScript',
  }

  return (
    <Container className="py-16 sm:py-24">
      <JsonLd data={softwareSchema} />

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream">
              {tool.name}
            </h1>
            <Badge variant="gold">{tool.euAiActArticle}</Badge>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed">
            {tool.longDescription}
          </p>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cream mb-4">Quick Start</h2>
          <CodeBlock
            code={tool.installCommand}
            language={tool.language === 'docker' ? 'bash' : 'bash'}
          />
        </section>

        {/* Features */}
        {features.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cream mb-4">Features</h2>
            <ul className="space-y-2">
              {features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-3 text-text-secondary"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* EU AI Act Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cream mb-4">
            EU AI Act Context
          </h2>
          <Card hover={false}>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="gold">{tool.euAiActArticle}</Badge>
              <span className="text-sm font-medium text-cream">
                {tool.euAiActLabel}
              </span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {tool.euAiActDescription}
            </p>
          </Card>
        </section>

        {/* Known Limitations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cream mb-4">
            Known Limitations
          </h2>
          <ul className="space-y-2">
            {tool.limitations.map((limitation) => (
              <li
                key={limitation}
                className="flex items-start gap-3 text-text-secondary"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                {limitation}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-tertiary">
            For the most current status, see the{' '}
            <a
              href={`https://github.com/${tool.repo}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              GitHub issues
            </a>.
          </p>
        </section>

        {/* Contributing */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cream mb-4">Contributing</h2>
          <p className="text-text-secondary">
            Contributions are welcome. Please see the{' '}
            <a
              href={`https://github.com/${tool.repo}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              GitHub repository
            </a>{' '}
            for contribution guidelines, issue templates, and development setup
            instructions.
          </p>
        </section>

        {/* License */}
        <section>
          <h2 className="text-2xl font-semibold text-cream mb-4">License</h2>
          <p className="text-text-secondary">
            Licensed under the{' '}
            <a
              href="https://opensource.org/licenses/Apache-2.0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              Apache License 2.0
            </a>
            .
          </p>
        </section>
      </div>
    </Container>
  )
}
