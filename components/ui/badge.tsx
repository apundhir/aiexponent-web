import { cn } from '@/lib/cn'

type BadgeVariant = 'gold' | 'steel' | 'default'

const variants: Record<BadgeVariant, string> = {
  gold: 'bg-gold/15 text-gold border-gold/30',
  steel: 'bg-steel/15 text-steel border-steel/30',
  default: 'bg-bg-surface text-text-secondary border-bg-border',
}

export function Badge({
  children,
  variant = 'default',
  className,
}: {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
}) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  )
}
