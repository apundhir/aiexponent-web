import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const NOTIFY_TO = process.env.RESEND_NOTIFY_TO || 'hello@aiexponent.com'
const FROM = 'AiExponent <noreply@aiexponent.com>'

interface ContactSubmission {
  name: string
  email: string
  company: string
  jobTitle: string
  enquiryType: string
  message: string
  howFoundUs?: string
}

export async function sendContactNotification(data: ContactSubmission) {
  if (!process.env.RESEND_API_KEY) {
    console.log('[Email] RESEND_API_KEY not set, logging submission:', data)
    return { success: true, fallback: true }
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: NOTIFY_TO,
    replyTo: data.email,
    subject: `[AiExponent] ${data.enquiryType} — ${data.company}`,
    text: `New enquiry from aiexponent.com/contact

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}
Job Title: ${data.jobTitle}
Enquiry Type: ${data.enquiryType}
How Found Us: ${data.howFoundUs || 'Not specified'}

Message:
${data.message}

---
Submitted at: ${new Date().toISOString()}`,
  })

  if (error) {
    console.error('[Email] Failed to send notification:', error)
    return { success: false, error }
  }

  return { success: true }
}

export async function sendContactConfirmation(data: { name: string; email: string }) {
  if (!process.env.RESEND_API_KEY) {
    return { success: true, fallback: true }
  }

  const { error } = await resend.emails.send({
    from: FROM,
    to: data.email,
    subject: 'We received your enquiry — AiExponent',
    text: `Hi ${data.name},

Thank you for reaching out to AiExponent. We have received your enquiry and will respond within one business day.

In the meantime, you can explore our open source tools at https://aiexponent.com/products or visit our documentation at https://aiexponent.com/docs.

Best regards,
The AiExponent Team
hello@aiexponent.com
https://aiexponent.com`,
  })

  if (error) {
    console.error('[Email] Failed to send confirmation:', error)
    return { success: false, error }
  }

  return { success: true }
}
