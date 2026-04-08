export function JsonLd({ data }: { data: Record<string, unknown> }) {
  // Escapes </ sequences to prevent script injection in HTML context
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  )
}
