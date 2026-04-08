import { cn } from '@/lib/cn'

export function Card({
  children,
  className,
  hover = true,
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-bg-border bg-bg-surface p-6',
        hover && 'transition-colors duration-150 hover:border-gold/60',
        className
      )}
    >
      {children}
    </div>
  )
}
