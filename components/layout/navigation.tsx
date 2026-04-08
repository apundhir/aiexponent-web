'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/cn'
import { LogoFull } from '@/components/icons/logo-full'
import { LogoIcon } from '@/components/icons/logo-icon'
import { Button } from '@/components/ui/button'
import { Container } from '@/components/ui/container'
import { MobileDrawer } from './mobile-drawer'

const navLinks = [
  { href: '/products', label: 'Products' },
  { href: '/docs/license-compliance-checker', label: 'Docs' },
  { href: '/about', label: 'About' },
]

export function Navigation() {
  const [drawerOpen, setDrawerOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-[100] border-b border-bg-border/50 bg-navy/[0.96] backdrop-blur-nav">
      <Container>
        <nav className="flex h-16 items-center justify-between" aria-label="Main navigation">
          <Link href="/" className="flex items-center gap-2" aria-label="AiExponent home">
            <LogoIcon className="h-8 w-8 md:hidden" />
            <LogoFull className="hidden md:block h-7" />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={pathname.startsWith(link.href) ? 'page' : undefined}
                className={cn(
                  'text-[15px] text-text-secondary transition-colors hover:text-cream',
                  pathname.startsWith(link.href) &&
                    'text-cream border-b-2 border-gold pb-0.5'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Button variant="secondary" href="/contact" className="text-sm px-4 py-2">
              Get Enterprise Access
            </Button>
          </div>

          <button
            className="md:hidden p-2 text-text-secondary hover:text-cream"
            onClick={() => setDrawerOpen(true)}
            aria-expanded={drawerOpen}
            aria-controls="mobile-menu"
            aria-label="Open navigation menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
          </button>
        </nav>
      </Container>

      <MobileDrawer
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        links={navLinks}
        pathname={pathname}
      />
    </header>
  )
}
