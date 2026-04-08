import type { Metadata } from 'next'
import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { TOOLS } from '@/lib/tools'

export const metadata: Metadata = {
  title: 'Documentation',
  description:
    'Documentation for AiExponent open source AI governance tools. Installation guides, feature overviews, and EU AI Act context.',
}

export default function DocsIndexPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-4">
          Documentation
        </h1>
        <p className="text-lg text-text-secondary mb-12">
          Guides and references for AiExponent open source tools.
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {TOOLS.map((tool) => (
            <Link key={tool.slug} href={`/docs/${tool.slug}`}>
              <Card className="h-full">
                <div className="flex items-start justify-between gap-3 mb-2">
                  <h2 className="text-lg font-semibold text-cream">
                    {tool.name}
                  </h2>
                  <Badge variant="gold" className="shrink-0">
                    {tool.euAiActArticle}
                  </Badge>
                </div>
                <p className="text-sm text-text-secondary">{tool.description}</p>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </Container>
  )
}
