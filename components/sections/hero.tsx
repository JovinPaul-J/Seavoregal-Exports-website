import { Button } from '@/components/ui/button'
import { WhatsAppButton } from '@/components/common/whatsapp-button'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle: string
  description?: string
  primaryCta?: {
    text: string
    href: string
  }
  secondaryCta?: {
    text: string
    href: string
  }
  showWhatsApp?: boolean
  backgroundImage?: string
}

export function Hero({
  title,
  subtitle,
  description,
  primaryCta = { text: 'Explore Products', href: '/products' },
  secondaryCta = { text: 'Learn More', href: '/about' },
  showWhatsApp = true,
  backgroundImage,
}: HeroProps) {
  return (
    <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-secondary/10" />
      {backgroundImage && (
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      )}

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 bg-secondary/20 rounded-full border border-secondary/30">
              <p className="text-sm font-medium text-secondary">{subtitle}</p>
            </div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-balance">
            {title}
          </h1>

          {description && (
            <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance">
              {description}
            </p>
          )}

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center flex-wrap">
            <Button asChild size="lg" className="gap-2">
              <Link href={primaryCta.href}>
                {primaryCta.text}
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href={secondaryCta.href}>
                {secondaryCta.text}
              </Link>
            </Button>
            {showWhatsApp && (
              <WhatsAppButton message="Hi Seavoregal, I am interested in your products." />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
