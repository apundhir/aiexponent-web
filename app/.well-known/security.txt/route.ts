export async function GET() {
  const expires = new Date()
  expires.setFullYear(expires.getFullYear() + 1)

  const body = `Contact: mailto:security@aiexponent.com
Expires: ${expires.toISOString()}
Preferred-Languages: en
Canonical: https://aiexponent.com/.well-known/security.txt
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  })
}
