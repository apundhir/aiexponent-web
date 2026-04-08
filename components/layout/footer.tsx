import Link from 'next/link'
import { Container } from '@/components/ui/container'
import { LogoIcon } from '@/components/icons/logo-icon'
import { GitHubIcon } from '@/components/icons/github-icon'
import { siteConfig } from '@/lib/metadata'

const footerLinks = [
  { href: '/products', label: 'Products' },
  { href: '/docs/license-compliance-checker', label: 'Docs' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

export function Footer() {
  return (
    <footer role="contentinfo" className="border-t border-bg-border bg-navy">
      <Container className="py-12 md:py-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <LogoIcon className="h-6 w-6" />
              <span className="font-bold text-cream">AiExponent</span>
            </div>
            <p className="text-sm text-text-secondary max-w-xs">
              Building AI that deserves to be trusted. Open source tools and enterprise
              products for AI governance.
            </p>
          </div>

          <nav className="flex flex-col gap-3 sm:flex-row sm:gap-8" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-text-secondary hover:text-cream transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-4">
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub (opens in new tab)"
                className="text-text-secondary hover:text-cream transition-colors"
              >
                <GitHubIcon />
              </a>
              <a
                href={siteConfig.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn (opens in new tab)"
                className="text-text-secondary hover:text-cream transition-colors"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-sm text-text-secondary hover:text-cream transition-colors"
            >
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-bg-border flex flex-col gap-2 sm:flex-row sm:justify-between text-xs text-text-tertiary">
          <p>&copy; {new Date().getFullYear()} AI Exponent LLC. All rights reserved.</p>
          <p>
            <a href={siteConfig.askajay} target="_blank" rel="noopener noreferrer" className="hover:text-cream transition-colors">
              AskAjay.ai
            </a>
            {' '}— Advisory & thought leadership
          </p>
        </div>
      </Container>
    </footer>
  )
}
