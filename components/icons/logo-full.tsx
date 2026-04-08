import { cn } from '@/lib/cn'

export function LogoFull({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 950 200"
      role="img"
      aria-hidden="true"
      focusable="false"
      className={cn('h-8 w-auto', className)}
    >
      <g transform="translate(0,0)">
        <path d="M85,18 L14,172 L47,172 L70,110 Z" fill="#C9A84C" />
        <path d="M85,18 L156,172 L123,172 L100,110 Z" fill="#C9A84C" />
        <path d="M70,110 L100,110 L106,130 L64,130 Z" fill="#C9A84C" />
        <path d="M47,172 C47,192 85,196 85,196 C85,196 123,192 123,172 Z" fill="#C9A84C" />
        <rect x="163" y="18" width="11" height="11" rx="2" fill="#C9A84C" opacity="1.0" />
        <rect x="178" y="18" width="11" height="11" rx="2" fill="#C9A84C" opacity="0.78" />
        <rect x="163" y="33" width="11" height="11" rx="2" fill="#C9A84C" opacity="0.78" />
        <rect x="178" y="33" width="11" height="11" rx="2" fill="#C9A84C" opacity="0.42" />
      </g>
      <text
        y="150"
        fontFamily="'Lato Black','Lato','Liberation Sans',sans-serif"
        fontWeight="900"
        fontSize="120"
      >
        <tspan x="210" fill="#C9A84C">Ai</tspan>
        <tspan fill="#FAF7F2">Exponent</tspan>
      </text>
    </svg>
  )
}
