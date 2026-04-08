import type { Metadata } from 'next'
import { Container } from '@/components/ui/container'
import { ContactForm } from '@/components/contact/contact-form'

export const metadata: Metadata = {
  title: 'Contact AiExponent — Enterprise AI Governance Enquiries',
  description:
    'Get in touch about enterprise AI governance, AgentShield deployment, partnership opportunities, or open source support.',
}

export default function ContactPage() {
  return (
    <Container className="py-16 sm:py-24">
      <div className="max-w-2xl mx-auto">
        <h1 className="font-serif text-4xl sm:text-5xl font-bold text-cream mb-4">
          Get in Touch
        </h1>
        <p className="text-lg text-text-secondary mb-2">
          Enterprise governance, AgentShield deployment, partnership opportunities.
        </p>
        <p className="text-sm text-steel mb-10">
          We respond within one business day.
        </p>

        <ContactForm />
      </div>
    </Container>
  )
}
