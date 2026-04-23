import { Certification } from '@/lib/data/certifications'
import { Card } from '@/components/ui/card'

interface CertificationBadgeProps {
  certification: Certification
  compact?: boolean
}

export function CertificationBadge({ certification, compact = false }: CertificationBadgeProps) {
  if (compact) {
    return (
      <div className="flex items-center gap-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20">
        <span className="text-lg">{certification.icon}</span>
        <div className="flex-1">
          <div className="font-semibold text-sm text-foreground">{certification.name}</div>
          <div className="text-xs text-muted-foreground">{certification.year_obtained}</div>
        </div>
      </div>
    )
  }

  return (
    <Card className="p-6 text-center hover:shadow-lg transition-shadow">
      <div className="text-5xl mb-3">{certification.icon}</div>
      <h3 className="font-bold text-lg text-foreground mb-2">{certification.name}</h3>
      <p className="text-sm text-muted-foreground mb-3">{certification.full_name}</p>
      <p className="text-xs text-muted-foreground mb-4">{certification.description}</p>
      <div className="text-xs font-semibold text-primary">
        Certified: {certification.year_obtained}
      </div>
    </Card>
  )
}
