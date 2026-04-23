import { Card } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface TestimonialCardProps {
  author: string
  company: string
  text: string
  rating?: number
}

export function TestimonialCard({
  author,
  company,
  text,
  rating = 5,
}: TestimonialCardProps) {
  return (
    <Card className="p-6 flex flex-col h-full">
      {/* Rating Stars */}
      <div className="flex gap-1 mb-4">
        {Array.from({ length: rating }).map((_, i) => (
          <Star key={i} size={16} className="fill-secondary text-secondary" />
        ))}
      </div>

      {/* Quote */}
      <p className="text-foreground mb-6 flex-1 italic">"{text}"</p>

      {/* Author */}
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground text-sm">{author}</p>
        <p className="text-xs text-muted-foreground">{company}</p>
      </div>
    </Card>
  )
}
