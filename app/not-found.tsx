import Link from 'next/link'
import { Container } from '@/components/ui/container'

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-serif font-bold tracking-tight text-cream">Page Not Found</h1>
      <p className="mt-4 text-lg text-text-secondary">
        The page you are looking for does not exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition-colors hover:bg-gold/90"
      >
        Back to Home
      </Link>
    </Container>
  )
}
