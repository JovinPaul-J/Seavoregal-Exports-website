'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { toast } from '@/hooks/use-toast'

interface InquiryFormProps {
  productId?: string
  productName?: string
}

export function InquiryForm({ productId, productName }: InquiryFormProps) {
  const [isLoading, setIsLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsLoading(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
      company: formData.get('company'),
      productId,
      productName,
      message: formData.get('message'),
      quantity: formData.get('quantity'),
    }

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        toast({
          title: 'Inquiry Sent',
          description: 'We will contact you soon with more information.',
        })
        e.currentTarget.reset()
      } else {
        toast({
          title: 'Error',
          description: 'Failed to send inquiry. Please try again.',
          variant: 'destructive',
        })
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'An error occurred. Please try again.',
        variant: 'destructive',
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1">
            Full Name *
          </label>
          <Input
            id="name"
            name="name"
            required
            placeholder="John Doe"
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1">
            Email Address *
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            placeholder="john@example.com"
            disabled={isLoading}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1">
            Phone Number *
          </label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="+20 (0) 1234 567 890"
            disabled={isLoading}
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-foreground mb-1">
            Company Name *
          </label>
          <Input
            id="company"
            name="company"
            required
            placeholder="Your Company"
            disabled={isLoading}
          />
        </div>
      </div>

      {productName && (
        <div>
          <label className="block text-sm font-medium text-foreground mb-1">
            Interested Product
          </label>
          <Input
            value={productName}
            disabled
            className="bg-muted"
          />
        </div>
      )}

      {!productName && (
        <div>
          <label htmlFor="quantity" className="block text-sm font-medium text-foreground mb-1">
            Required Quantity
          </label>
          <Input
            id="quantity"
            name="quantity"
            placeholder="e.g., 5000 kg"
            disabled={isLoading}
          />
        </div>
      )}

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1">
          Message *
        </label>
        <Textarea
          id="message"
          name="message"
          required
          placeholder="Tell us about your requirements..."
          rows={5}
          disabled={isLoading}
        />
      </div>

      <Button type="submit" className="w-full" disabled={isLoading}>
        {isLoading ? 'Sending...' : 'Send Inquiry'}
      </Button>
    </form>
  )
}
