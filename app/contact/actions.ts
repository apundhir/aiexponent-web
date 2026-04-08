'use server'

import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  enquiryType: z.enum([
    'Enterprise evaluation',
    'AgentShield demo',
    'Partnership',
    'Open source support',
    'Other',
  ], { required_error: 'Please select an enquiry type' }),
  message: z.string().min(20, 'Message must be at least 20 characters'),
  howFoundUs: z.string().optional(),
  consent: z.literal(true, {
    errorMap: () => ({ message: 'You must consent to be contacted' }),
  }),
})

// In-memory rate limiting: 5 submissions per IP per hour
// NOTE: On Vercel serverless, this map resets per cold start. Provides basic
// protection but is not durable. Upgrade to Upstash Redis for persistent rate limiting.
const rateLimitMap = new Map<string, { count: number; resetAt: number }>()

function isRateLimited(ip: string): boolean {
  const now = Date.now()
  const entry = rateLimitMap.get(ip)

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + 60 * 60 * 1000 })
    return false
  }

  if (entry.count >= 5) {
    return true
  }

  entry.count++
  return false
}

export async function submitContactForm(
  _prevState: { success: boolean; message: string } | null,
  formData: FormData
): Promise<{ success: boolean; message: string }> {
  // Rate limit by IP (fallback to unknown)
  const { headers } = await import('next/headers')
  const headersList = await headers()
  const ip =
    headersList.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    headersList.get('x-real-ip') ||
    'unknown'

  if (isRateLimited(ip)) {
    return {
      success: false,
      message: 'Too many submissions. Please try again later.',
    }
  }

  // Honeypot check: silently accept if filled (bot trap)
  const honeypot = formData.get('_company_url')
  if (honeypot) {
    return { success: true, message: 'Thank you. We will be in touch within one business day.' }
  }

  // Timestamp check: reject if submitted too fast (< 3 seconds)
  const timestamp = Number(formData.get('_t'))
  if (timestamp && Date.now() - timestamp < 3000) {
    return { success: true, message: 'Thank you. We will be in touch within one business day.' }
  }

  // Parse and validate
  const raw = {
    name: formData.get('name'),
    email: formData.get('email'),
    company: formData.get('company'),
    jobTitle: formData.get('jobTitle'),
    enquiryType: formData.get('enquiryType'),
    message: formData.get('message'),
    howFoundUs: formData.get('howFoundUs') || undefined,
    consent: formData.get('consent') === 'on' ? true : undefined,
  }

  const result = contactSchema.safeParse(raw)

  if (!result.success) {
    const firstError = result.error.errors[0]
    return {
      success: false,
      message: firstError?.message || 'Please check your form inputs.',
    }
  }

  // Send notification email to team + confirmation to submitter
  const { sendContactNotification, sendContactConfirmation } = await import('@/lib/email')

  const [notifyResult] = await Promise.allSettled([
    sendContactNotification(result.data),
    sendContactConfirmation({ name: result.data.name, email: result.data.email }),
  ])

  if (notifyResult.status === 'rejected' || (notifyResult.status === 'fulfilled' && !notifyResult.value.success)) {
    console.error('[Contact] Notification email failed, but submission accepted')
  }

  return {
    success: true,
    message: 'Thank you. We will be in touch within one business day.',
  }
}
