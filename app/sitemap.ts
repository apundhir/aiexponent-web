import type { MetadataRoute } from 'next'
import { TOOLS } from '@/lib/tools'

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: 'https://aiexponent.com',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: 'https://aiexponent.com/products',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: 'https://aiexponent.com/about',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: 'https://aiexponent.com/contact',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
  ]

  const toolPages: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `https://aiexponent.com${tool.docsPath}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: tool.tier === 'tier-1' ? 0.8 : 0.7,
  }))

  return [...staticPages, ...toolPages]
}
