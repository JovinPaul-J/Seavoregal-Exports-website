import { NextRequest, NextResponse } from 'next/server'

interface ContactRequest {
  name: string
  email: string
  phone: string
  company: string
  message: string
}

// Validation function
function validateContact(data: Partial<ContactRequest>): { valid: boolean; errors: string[] } {
  const errors: string[] = []

  if (!data.name?.trim()) errors.push('Name is required')
  if (!data.email?.trim()) errors.push('Email is required')
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errors.push('Invalid email format')
  if (!data.phone?.trim()) errors.push('Phone is required')
  if (!data.company?.trim()) errors.push('Company is required')
  if (!data.message?.trim()) errors.push('Message is required')

  return {
    valid: errors.length === 0,
    errors,
  }
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate contact
    const validation = validateContact(body)
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      )
    }

    const contact = body as ContactRequest

    // Log contact (in production, you'd send an email or save to database)
    console.log('[Contact] New contact form submission:', {
      name: contact.name,
      email: contact.email,
      company: contact.company,
      timestamp: new Date().toISOString(),
    })

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or nodemailer
    // 2. Save to a database
    // 3. Send confirmation email to the user

    // For now, return success response
    return NextResponse.json({
      success: true,
      message: 'Message received. We will contact you soon.',
    })
  } catch (error) {
    console.error('[Contact] Error:', error)
    return NextResponse.json(
      { error: 'Failed to process contact form. Please try again.' },
      { status: 500 }
    )
  }
}
