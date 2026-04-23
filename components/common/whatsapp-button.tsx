import { MessageCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { companyInfo } from '@/lib/data/company'

interface WhatsAppButtonProps {
  message?: string
  className?: string
}

export function WhatsAppButton({ message = 'Hi, I am interested in your products.', className = '' }: WhatsAppButtonProps) {
  const encodedMessage = encodeURIComponent(message)
  const whatsappLink = `https://wa.me/${companyInfo.socialLinks.whatsapp.replace(/[^0-9]/g, '')}?text=${encodedMessage}`

  return (
    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <Button className={`gap-2 ${className}`}>
        <MessageCircle size={18} />
        Chat on WhatsApp
      </Button>
    </a>
  )
}
