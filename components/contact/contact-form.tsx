'use client'

import { useEffect, useRef, useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/cn'
import { submitContactForm } from '@/app/contact/actions'

const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Please enter a valid email address'),
  company: z.string().min(1, 'Company is required'),
  jobTitle: z.string().min(1, 'Job title is required'),
  enquiryType: z.enum([
    'Enterprise evaluation',
    'Sigil demo',
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

type FormValues = z.infer<typeof schema>

const inputBase =
  'w-full rounded-md border border-bg-border bg-bg-surface px-4 py-3 text-cream placeholder:text-steel/60 focus:outline-none focus:ring-2 focus:ring-gold/60 focus:border-gold/60 transition-colors'
const labelBase = 'block text-sm font-medium text-text-secondary mb-1.5'
const errorBase = 'mt-1 text-sm text-red-400'

const ENQUIRY_TYPES = [
  'Enterprise evaluation',
  'Sigil demo',
  'Partnership',
  'Open source support',
  'Other',
] as const

const HOW_FOUND_OPTIONS = [
  'Google',
  'LinkedIn',
  'GitHub',
  'AskAjay.ai',
  'Colleague',
  'Conference',
  'AI search engine',
  'Other',
] as const

function SubmitButton() {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? 'Sending...' : 'Send message'}
    </Button>
  )
}

export function ContactForm() {
  const [mountTimestamp, setMountTimestamp] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  const [state, formAction] = useFormState(submitContactForm, null)

  const {
    register,
    formState: { errors },
    reset,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: 'onTouched',
  })

  useEffect(() => {
    setMountTimestamp(String(Date.now()))
  }, [])

  useEffect(() => {
    if (state?.success) {
      reset()
    }
  }, [state, reset])

  if (state?.success) {
    return (
      <div
        role="status"
        aria-live="polite"
        className="rounded-lg border border-gold/30 bg-gold/5 p-8 text-center"
      >
        <h2 className="text-xl font-semibold text-gold mb-2">Message sent</h2>
        <p className="text-text-secondary">{state.message}</p>
      </div>
    )
  }

  return (
    <form
      ref={formRef}
      action={formAction}
      noValidate
      className="space-y-6"
    >
      {/* Honeypot */}
      <div
        aria-hidden="true"
        className="absolute -left-[9999px] -top-[9999px]"
      >
        <label htmlFor="_company_url">Leave blank</label>
        <input
          type="text"
          id="_company_url"
          name="_company_url"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {/* Hidden timestamp */}
      <input type="hidden" name="_t" value={mountTimestamp} />

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelBase}>
          Name <span aria-hidden="true">*</span>
        </label>
        <input
          {...register('name')}
          id="name"
          type="text"
          autoComplete="name"
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={cn(inputBase, errors.name && 'border-red-400')}
        />
        {errors.name && (
          <p id="name-error" className={errorBase} role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelBase}>
          Email <span aria-hidden="true">*</span>
        </label>
        <input
          {...register('email')}
          id="email"
          type="email"
          autoComplete="email"
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={cn(inputBase, errors.email && 'border-red-400')}
        />
        {errors.email && (
          <p id="email-error" className={errorBase} role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      {/* Company */}
      <div>
        <label htmlFor="company" className={labelBase}>
          Company <span aria-hidden="true">*</span>
        </label>
        <input
          {...register('company')}
          id="company"
          type="text"
          autoComplete="organization"
          aria-required="true"
          aria-invalid={!!errors.company}
          aria-describedby={errors.company ? 'company-error' : undefined}
          className={cn(inputBase, errors.company && 'border-red-400')}
        />
        {errors.company && (
          <p id="company-error" className={errorBase} role="alert">
            {errors.company.message}
          </p>
        )}
      </div>

      {/* Job Title */}
      <div>
        <label htmlFor="jobTitle" className={labelBase}>
          Job Title <span aria-hidden="true">*</span>
        </label>
        <input
          {...register('jobTitle')}
          id="jobTitle"
          type="text"
          autoComplete="organization-title"
          aria-required="true"
          aria-invalid={!!errors.jobTitle}
          aria-describedby={errors.jobTitle ? 'jobTitle-error' : undefined}
          className={cn(inputBase, errors.jobTitle && 'border-red-400')}
        />
        {errors.jobTitle && (
          <p id="jobTitle-error" className={errorBase} role="alert">
            {errors.jobTitle.message}
          </p>
        )}
      </div>

      {/* Enquiry Type */}
      <div>
        <label htmlFor="enquiryType" className={labelBase}>
          Enquiry Type <span aria-hidden="true">*</span>
        </label>
        <select
          {...register('enquiryType')}
          id="enquiryType"
          aria-required="true"
          aria-invalid={!!errors.enquiryType}
          aria-describedby={errors.enquiryType ? 'enquiryType-error' : undefined}
          className={cn(inputBase, 'appearance-none', errors.enquiryType && 'border-red-400')}
          defaultValue=""
        >
          <option value="" disabled>
            Select an enquiry type
          </option>
          {ENQUIRY_TYPES.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
        {errors.enquiryType && (
          <p id="enquiryType-error" className={errorBase} role="alert">
            {errors.enquiryType.message}
          </p>
        )}
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className={labelBase}>
          Message <span aria-hidden="true">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={5}
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputBase, 'resize-y min-h-[120px]', errors.message && 'border-red-400')}
        />
        {errors.message && (
          <p id="message-error" className={errorBase} role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {/* How Found Us */}
      <div>
        <label htmlFor="howFoundUs" className={labelBase}>
          How did you find us?
        </label>
        <select
          {...register('howFoundUs')}
          id="howFoundUs"
          className={cn(inputBase, 'appearance-none')}
          defaultValue=""
        >
          <option value="">Prefer not to say</option>
          {HOW_FOUND_OPTIONS.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3">
        <input
          {...register('consent')}
          id="consent"
          type="checkbox"
          aria-required="true"
          aria-invalid={!!errors.consent}
          aria-describedby={errors.consent ? 'consent-error' : undefined}
          className="mt-1 h-4 w-4 rounded border-bg-border bg-bg-surface accent-gold"
        />
        <div>
          <label htmlFor="consent" className="text-sm text-text-secondary">
            I consent to AiExponent storing my data and contacting me regarding this enquiry.{' '}
            <span aria-hidden="true">*</span>
          </label>
          {errors.consent && (
            <p id="consent-error" className={errorBase} role="alert">
              {errors.consent.message}
            </p>
          )}
        </div>
      </div>

      {/* Server-side error */}
      {state && !state.success && (
        <div
          role="alert"
          aria-live="assertive"
          className="rounded-md border border-red-400/30 bg-red-400/5 px-4 py-3 text-sm text-red-400"
        >
          {state.message}
        </div>
      )}

      <SubmitButton />
    </form>
  )
}
