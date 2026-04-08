import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { Button } from '@/components/ui/button'
import { siteConfig } from '@/lib/metadata'

export const metadata: Metadata = {
  title: 'About AiExponent — Responsible AI Technology Company',
  description:
    'AiExponent builds open source tools and enterprise products for AI governance, EU AI Act compliance, and responsible deployment.',
}

export default function AboutPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-3xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-12">
          About AiExponent
        </h1>

        {/* Our Mission */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cream mb-4">Our Mission</h2>
          <p className="text-text-secondary leading-relaxed">
            Building AI that deserves to be trusted. AiExponent exists to close
            the gap between AI regulation and practical developer tooling. We
            believe compliance should be a natural by-product of good
            engineering, not a bureaucratic afterthought. Our tools make it
            straightforward for teams to build AI systems that meet the highest
            standards of transparency, accuracy, and accountability.
          </p>
        </section>

        {/* What We Build */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cream mb-4">What We Build</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            We maintain six open source tools spanning license compliance, document
            analysis, RAG benchmarking, retrieval infrastructure, AI literacy
            assessment, and governance ROI modelling. Each tool maps directly to a
            specific EU AI Act obligation, so adoption delivers measurable
            compliance progress from day one.
          </p>
          <p className="text-text-secondary leading-relaxed">
            On the commercial side, AgentShield is our real-time policy
            enforcement platform for AI agents. It provides audit logging,
            compliance reporting against the EU AI Act and NIST AI RMF, and
            team-level visibility into agent behaviour -- designed for
            organisations that need governance at scale without slowing down
            their AI deployments.
          </p>
        </section>

        {/* EU AI Act Context */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cream mb-4">EU AI Act Context</h2>
          <p className="text-text-secondary leading-relaxed">
            The EU AI Act is the world&apos;s first comprehensive AI regulation.
            Enforcement is already underway: AI literacy obligations under Article
            4 applied from February 2025, and GPAI model transparency requirements
            under Article 53 take effect in August 2025. High-risk system
            obligations follow in August 2026. These are not distant deadlines --
            they are active compliance requirements that organisations must meet
            now. Our tools exist because the gap between what the law requires and
            what developers can practically implement today is still far too wide.
          </p>
        </section>

        {/* Two-Entity Model */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-cream mb-4">Two-Entity Model</h2>
          <p className="text-text-secondary leading-relaxed">
            AiExponent builds the products -- open source tools and AgentShield.{' '}
            <a
              href="https://askajay.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              AskAjay.ai
            </a>{' '}
            is the separate advisory practice that provides strategic consulting,
            implementation guidance, and thought leadership on AI governance. The
            two entities are complementary: AskAjay.ai advises on strategy,
            AiExponent delivers the technology to execute it.
          </p>
        </section>

        {/* Contact CTA */}
        <section className="mt-14 rounded-lg border border-bg-border bg-bg-surface p-8">
          <h2 className="text-xl font-semibold text-cream mb-3">Get in touch</h2>
          <p className="text-text-secondary mb-6">
            Questions about our tools, AgentShield, or partnership opportunities?
            Reach us at{' '}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-gold hover:text-gold/80 underline underline-offset-2 transition-colors"
            >
              {siteConfig.email}
            </a>{' '}
            or use our contact form.
          </p>
          <Button href="/contact">Contact us</Button>
        </section>
      </div>
    </Container>
  )
}
