'use client'

import { useEffect, useRef, useCallback, useState } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/cn'
import { LogoIcon } from '@/components/icons/logo-icon'
import { Button } from '@/components/ui/button'

interface MobileDrawerProps {
  open: boolean
  onClose: () => void
  links: { href: string; label: string }[]
  pathname: string
}

export function MobileDrawer({ open, onClose, links, pathname }: MobileDrawerProps) {
  const drawerRef = useRef<HTMLDivElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const [visible, setVisible] = useState(false)
  const [animating, setAnimating] = useState(false)

  useEffect(() => {
    if (open) {
      setVisible(true)
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setAnimating(true))
      })
      closeButtonRef.current?.focus()
      document.body.style.overflow = 'hidden'
    } else {
      setAnimating(false)
      const timer = setTimeout(() => setVisible(false), 250)
      document.body.style.overflow = ''
      return () => clearTimeout(timer)
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      if (e.key === 'Tab' && drawerRef.current) {
        const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
        if (focusable.length === 0) return
        const first = focusable[0]
        const last = focusable[focusable.length - 1]
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault()
          last.focus()
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    },
    [onClose]
  )

  useEffect(() => {
    if (!open) return
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [open, handleKeyDown])

  if (!visible) return null

  return (
    <div
      id="mobile-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Navigation menu"
      className={cn(
        'fixed inset-0 z-[200] bg-bg-primary transition-transform duration-250 ease-[cubic-bezier(0.4,0,0.2,1)]',
        animating ? 'translate-x-0' : 'translate-x-full'
      )}
    >
      <div ref={drawerRef} className="flex flex-col h-full px-5 py-4">
        <div className="flex items-center justify-between">
          <LogoIcon className="h-8 w-8" />
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close navigation menu"
            className="p-2 text-text-secondary hover:text-cream"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-6 mt-12">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className={cn(
                'text-xl text-text-secondary hover:text-cream transition-colors',
                pathname.startsWith(link.href) && 'text-cream'
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="mt-auto pb-8">
          <Button variant="primary" href="/contact" className="w-full">
            Get Enterprise Access
          </Button>
        </div>
      </div>
    </div>
  )
}
