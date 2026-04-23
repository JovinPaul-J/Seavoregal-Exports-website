import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { CertificationBadge } from '@/components/common/certification-badge'
import { certifications } from '@/lib/data/certifications'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Certifications - Seavoregal Exports',
  description: 'Seavoregal Exports holds multiple international certifications including ISO 22000, HACCP, GlobalGAP, and ISO 14001.',
}

export default function CertificationsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <Hero
          title="Our Certifications"
          subtitle="Quality & Compliance"
          description="Our commitment to excellence is demonstrated through comprehensive international certifications in food safety, environmental management, and sustainable practices."
          showWhatsApp={false}
        />

        {/* Certifications Grid */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certifications.map((cert) => (
                <CertificationBadge key={cert.id} certification={cert} />
              ))}
            </div>
          </div>
        </section>

        {/* Certification Details */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              What These Certifications Mean
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-6 bg-background rounded-lg border border-border">
                  <div className="flex items-start gap-4">
                    <span className="text-4xl">{cert.icon}</span>
                    <div>
                      <h3 className="font-bold text-lg text-foreground mb-2">{cert.name}</h3>
                      <p className="text-sm font-medium text-primary mb-3">{cert.full_name}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                        {cert.description}
                      </p>
                      <div className="text-xs text-muted-foreground space-y-1">
                        <p><span className="font-semibold">Issuing Body:</span> {cert.issuing_body}</p>
                        <p><span className="font-semibold">Scope:</span> {cert.scope}</p>
                        <p><span className="font-semibold">Obtained:</span> {cert.year_obtained}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Commitment */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Compliance Commitment
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Food Safety',
                  icon: '🛡️',
                  description:
                    'ISO 22000 and HACCP certifications ensure every product meets the highest food safety standards from production to distribution.',
                },
                {
                  title: 'Environmental Responsibility',
                  icon: '🌍',
                  description:
                    'ISO 14001 certification demonstrates our commitment to environmental protection and sustainable aquaculture practices.',
                },
                {
                  title: 'Sustainable Practices',
                  icon: '🌱',
                  description:
                    'GlobalGAP certification confirms responsible aquaculture operations with proper environmental management and social practices.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6 text-center bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
                  <div className="text-5xl mb-4">{item.icon}</div>
                  <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Verification */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Verify Our Certifications
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              All our certifications are regularly audited and renewed. You can verify our credentials and audit reports upon request.
            </p>
            <div className="text-center">
              <Button asChild size="lg">
                <a href="/contact">Request Certification Documentation</a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
