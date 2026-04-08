import { NextResponse } from 'next/server'
import { fetchPortfolioStats } from '@/lib/github'

export const revalidate = 3600

export async function GET() {
  const stats = await fetchPortfolioStats()
  return NextResponse.json(stats)
}
