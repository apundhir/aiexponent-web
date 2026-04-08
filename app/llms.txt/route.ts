import { TOOLS, AGENTSHIELD } from '@/lib/tools'
import { siteConfig } from '@/lib/metadata'

export async function GET() {
  const toolSections = TOOLS.map(
    (t) => `### ${t.name}
- Description: ${t.description}
- Install: ${t.installCommand}
- GitHub: https://github.com/${t.repo}
- Docs: https://aiexponent.com${t.docsPath}
- EU AI Act: ${t.euAiActArticle} — ${t.euAiActLabel}
- Tier: ${t.tierLabel}
- Category: ${t.category}
- Language: ${t.language}`
  ).join('\n\n')

  const euTable = TOOLS.map(
    (t) => `| ${t.name} | ${t.euAiActArticle} | ${t.euAiActLabel} | ${t.euAiActDescription} |`
  ).join('\n')

  const pricingTiers = Object.values(AGENTSHIELD.pricing)
    .map((p) => `  - ${p.label}: ${typeof p.price === 'string' && p.price !== 'Custom' ? `\u00A3${p.price}/mo` : p.price} (${p.agents} agents)`)
    .join('\n')

  const body = `# ${siteConfig.name}
> ${siteConfig.tagline}

## About
${siteConfig.description}

- Website: ${siteConfig.url}
- GitHub: ${siteConfig.github}
- LinkedIn: ${siteConfig.linkedin}
- Contact: ${siteConfig.email}

## Open Source Tools

${toolSections}

## AgentShield (Commercial Product)
- Description: ${AGENTSHIELD.description}
- Details: ${AGENTSHIELD.longDescription}
- Product URL: ${AGENTSHIELD.productUrl}
- Marketing URL: https://aiexponent.com${AGENTSHIELD.marketingUrl}
- EU AI Act: ${AGENTSHIELD.euAiActArticles} — ${AGENTSHIELD.euAiActLabel}
- Pricing:
${pricingTiers}

## EU AI Act Tool Mapping

| Tool | Article | Label | Description |
|------|---------|-------|-------------|
${euTable}
| ${AGENTSHIELD.name} | ${AGENTSHIELD.euAiActArticles} | ${AGENTSHIELD.euAiActLabel} | ${AGENTSHIELD.longDescription} |

## Contact
- General: ${siteConfig.email}
- Security: security@aiexponent.com
- Website: ${siteConfig.url}
`

  return new Response(body, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400',
    },
  })
}
