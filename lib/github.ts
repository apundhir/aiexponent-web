import { TOOLS } from './tools'

export interface RepoStats {
  slug: string
  stars: number
  forks: number
}

export interface PortfolioStats {
  tools: RepoStats[]
  totalStars: number
  totalForks: number
}

export async function fetchPortfolioStats(): Promise<PortfolioStats> {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github.v3+json',
  }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  const results = await Promise.allSettled(
    TOOLS.map(async (tool) => {
      const res = await fetch(`https://api.github.com/repos/${tool.repo}`, {
        headers,
        next: { revalidate: 3600 },
      })
      if (!res.ok) return { slug: tool.slug, stars: 0, forks: 0 }
      const data = await res.json()
      return {
        slug: tool.slug,
        stars: data.stargazers_count ?? 0,
        forks: data.forks_count ?? 0,
      }
    })
  )

  const tools = results.map((r) =>
    r.status === 'fulfilled' ? r.value : { slug: '', stars: 0, forks: 0 }
  )

  return {
    tools,
    totalStars: tools.reduce((sum, t) => sum + t.stars, 0),
    totalForks: tools.reduce((sum, t) => sum + t.forks, 0),
  }
}
