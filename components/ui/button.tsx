import { cn } from '@/lib/cn'
import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  external?: boolean
  children: React.ReactNode
  className?: string
  type?: 'button' | 'submit'
  disabled?: boolean
  onClick?: () => void
}

const variants: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-navy font-bold hover:bg-gold/90 active:bg-gold/80',
  secondary:
    'border-[1.5px] border-gold text-gold bg-transparent hover:bg-gold/10 active:bg-gold/20',
  ghost:
    'border border-bg-border text-cream bg-transparent hover:bg-bg-surface active:bg-bg-secondary',
}

const base =
  'inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-semibold transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus-visible:outline-2 focus-visible:outline-gold focus-visible:outline-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100'

export function Button({
  variant = 'primary',
  href,
  external,
  children,
  className,
  type = 'button',
  disabled,
  onClick,
}: ButtonProps) {
  const classes = cn(base, variants[variant], className)

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      )
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
