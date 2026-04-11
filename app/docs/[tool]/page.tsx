import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CodeBlock } from '@/components/ui/code-block'
import { GitHubIcon } from '@/components/icons/github-icon'
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
    alternates: {
      canonical: `${siteConfig.url}/docs/${slug}`,
    },
  }
}

export default function ToolDocPage({ params }: ToolPageProps) {
  const { tool: slug } = params
  const tool = TOOLS.find((t) => t.slug === slug)

  if (!tool) notFound()

  const softwareSchema = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: tool.name,
    description: tool.longDescription,
    url: `${siteConfig.url}/docs/${tool.slug}`,
    applicationCategory: 'DeveloperApplication',
    operatingSystem: 'Cross-platform',
    license: 'https://opensource.org/licenses/Apache-2.0',
    author: { '@type': 'Organization', name: 'AiExponent', url: siteConfig.url },
    codeRepository: `https://github.com/${tool.repo}`,
    programmingLanguage: tool.language === 'docker' ? 'Python' : 'Python',
    ...(tool.releaseVersion && { softwareVersion: tool.releaseVersion }),
    offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
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
            <Badge variant="steel">{tool.tierLabel}</Badge>
          </div>
          <p className="text-lg text-text-secondary leading-relaxed mb-6">
            {tool.longDescription}
          </p>

          {/* Links row */}
          <div className="flex flex-wrap gap-3">
            <Button
              variant="ghost"
              href={`https://github.com/${tool.repo}`}
              external
              className="text-sm gap-2"
            >
              <GitHubIcon className="h-4 w-4" />
              View on GitHub
            </Button>
            {tool.releaseVersion && (
              <Button
                variant="ghost"
                href={`https://github.com/${tool.repo}/releases/tag/${tool.releaseVersion}`}
                external
                className="text-sm"
              >
                {tool.releaseVersion}
              </Button>
            )}
            {tool.pypiPackage && (
              <Button
                variant="ghost"
                href={`https://pypi.org/project/${tool.pypiPackage}/`}
                external
                className="text-sm"
              >
                PyPI ↗
              </Button>
            )}
          </div>
        </div>

        {/* Quick Start */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cream mb-4">Quick Start</h2>
          <CodeBlock code={tool.installCommand} language="bash" />
          {tool.quickStartCode && (
            <div className="mt-4">
              <CodeBlock code={tool.quickStartCode} language="python" />
            </div>
          )}
        </section>

        {/* Benchmark Results — only shown when real data exists */}
        {tool.benchmarkResults && tool.benchmarkResults.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cream mb-2">Benchmark Results</h2>
            <p className="text-text-secondary text-sm mb-6">
              Measured on the 50-sample golden dataset using{' '}
              <code className="font-mono text-gold text-xs">gemini-2.5-flash</code> as judge
              at <code className="font-mono text-gold text-xs">temperature=0.0</code>.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {tool.benchmarkResults.map((result) => (
                <Card key={result.metric} hover={false} className="text-center py-4">
                  <div className="text-2xl font-bold text-gold mb-1">
                    {(result.score * 100).toFixed(0)}%
                  </div>
                  <div className="text-xs text-cream font-medium mb-1">
                    {result.metric}
                  </div>
                  <div className="text-xs text-text-tertiary">{result.label}</div>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* Features */}
        {tool.features.length > 0 && (
          <section className="mb-12">
            <h2 className="text-2xl font-semibold text-cream mb-4">Features</h2>
            <ul className="space-y-2">
              {tool.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-text-secondary">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gold" />
                  {feature}
                </li>
              ))}
            </ul>
          </section>
        )}

        {/* EU AI Act Context */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cream mb-4">EU AI Act Context</h2>
          <Card hover={false}>
            <div className="flex items-center gap-3 mb-3">
              <Badge variant="gold">{tool.euAiActArticle}</Badge>
              <span className="text-sm font-medium text-cream">{tool.euAiActLabel}</span>
            </div>
            <p className="text-text-secondary text-sm leading-relaxed">
              {tool.euAiActDescription}
            </p>
          </Card>
        </section>

        {/* Known Limitations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-cream mb-4">Known Limitations</h2>
          <ul className="space-y-2">
            {tool.limitations.map((limitation) => (
              <li key={limitation} className="flex items-start gap-3 text-text-secondary">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-warning" />
                {limitation}
              </li>
            ))}
          </ul>
          <p className="mt-4 text-sm text-text-tertiary">
            For the most current status, see{' '}
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
            Contributions are welcome — Apache 2.0 licensed. See the{' '}
            <a
              href={`https://github.com/${tool.repo}/blob/main/CONTRIBUTING.md`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              contributing guide
            </a>{' '}
            and{' '}
            <a
              href={`https://github.com/${tool.repo}/issues`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              open issues
            </a>.
          </p>
        </section>

        {/* License */}
        <section className="mb-12">
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
            </a>.
          </p>
        </section>

        {/* Upgrade path to Sigil */}
        <section className="border-t border-bg-border pt-10">
          <Card className="border-gold/30">
            <p className="text-xs text-text-tertiary uppercase tracking-wider mb-2">Enterprise</p>
            <h3 className="font-semibold text-cream mb-2">Need governance at scale?</h3>
            <p className="text-text-secondary text-sm mb-4">
              Sigil extends evaluation with real-time policy enforcement, audit logging,
              and EU AI Act compliance reporting for AI agents across your organisation.
            </p>
            <Button variant="secondary" href="/products#sigil" className="text-sm">
              Learn about Sigil →
            </Button>
          </Card>
        </section>

      </div>
    </Container>
  )
}
