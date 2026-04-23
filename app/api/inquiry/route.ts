import { NextRequest, NextResponse } from 'next/server'

interface InquiryRequest {
  name: string
  email: string
  phone: string
  company: string
  productId?: string
  productName?: string
  message: string
  quantity?: string
}

// Validation function
function validateInquiry(data: Partial<InquiryRequest>): { valid: boolean; errors: string[] } {
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

// Format inquiry data for email
function formatInquiryEmail(data: InquiryRequest): string {
  return `
Product Inquiry Request
======================

From: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Company: ${data.company}

${data.productName ? `Product: ${data.productName}` : ''}
${data.quantity ? `Quantity: ${data.quantity}` : ''}

Message:
${data.message}

---
Submitted: ${new Date().toISOString()}
  `.trim()
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json()

    // Validate inquiry
    const validation = validateInquiry(body)
    if (!validation.valid) {
      return NextResponse.json(
        { errors: validation.errors },
        { status: 400 }
      )
    }

    const inquiry = body as InquiryRequest

    // Log inquiry (in production, you'd send an email or save to database)
    console.log('[Inquiry] New inquiry received:', {
      name: inquiry.name,
      email: inquiry.email,
      company: inquiry.company,
      product: inquiry.productName || 'Not specified',
      timestamp: new Date().toISOString(),
    })

    // Format email content
    const emailContent = formatInquiryEmail(inquiry)

    // Here you would typically:
    // 1. Send email using a service like SendGrid, Resend, or nodemailer
    // 2. Save to a database
    // 3. Send confirmation email to the user

    // Example with Resend (if configured):
    // await resend.emails.send({
    //   from: 'noreply@seavoregal.com',
    //   to: 'sales@seavoregal.com',
    //   subject: `New Product Inquiry from ${inquiry.name}`,
    //   html: emailContent,
    // })

    // For now, return success response
    return NextResponse.json({
      success: true,
      message: 'Inquiry received. We will contact you soon.',
    })
  } catch (error) {
    console.error('[Inquiry] Error:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry. Please try again.' },
      { status: 500 }
    )
  }
}
