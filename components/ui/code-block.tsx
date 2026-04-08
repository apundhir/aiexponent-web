'use client'

import { useState } from 'react'
import { cn } from '@/lib/cn'

export function CodeBlock({
  code,
  language,
  className,
}: {
  code: string
  language?: string
  className?: string
}) {
  const [copied, setCopied] = useState(false)

  async function handleCopy() {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn('relative group', className)}>
      <pre className="rounded-md border border-bg-border bg-[#020C18] px-4 py-3 font-mono text-sm text-cream/90 overflow-x-auto">
        {language && (
          <span className="absolute top-2 left-3 text-xs text-steel opacity-60">
            {language}
          </span>
        )}
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        aria-label={copied ? 'Copied to clipboard' : 'Copy install command to clipboard'}
        className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity rounded px-2 py-1 text-xs text-text-secondary hover:text-cream bg-bg-surface border border-bg-border"
      >
        {copied ? 'Copied!' : 'Copy'}
      </button>
      <div role="status" aria-live="polite" className="sr-only">
        {copied ? 'Install command copied to clipboard' : ''}
      </div>
    </div>
  )
}
