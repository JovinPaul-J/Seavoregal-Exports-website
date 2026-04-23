import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const metadata = {
  title: 'Quality Assurance - Seavoregal Exports',
  description: 'Learn about Seavoregal Exports quality assurance processes, testing procedures, and commitment to excellence.',
}

export default function QualityPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <Hero
          title="Quality Assurance"
          subtitle="Excellence in Every Product"
          description="Our comprehensive quality assurance program ensures every product meets the highest international standards from production to delivery."
          showWhatsApp={false}
        />

        {/* Quality Process */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Our Quality Process
            </h2>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: '1',
                  title: 'Farm Management',
                  description:
                    'Strict environmental controls and monitoring at our farms ensure optimal conditions for healthy aquaculture production.',
                },
                {
                  step: '2',
                  title: 'Harvesting',
                  description:
                    'Products are harvested at peak maturity using gentle methods to maintain quality and freshness.',
                },
                {
                  step: '3',
                  title: 'Processing',
                  description:
                    'Modern processing facilities with temperature control and sanitation protocols ensure safety and quality.',
                },
                {
                  step: '4',
                  title: 'Testing & Certification',
                  description:
                    'Comprehensive testing for pathogens, chemicals, and quality parameters before shipping.',
                },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="p-6 bg-primary/10 rounded-lg border border-primary/20 h-full">
                    <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-primary-foreground font-bold text-lg mb-4">
                      {item.step}
                    </div>
                    <h3 className="font-bold text-lg text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 h-0.5 w-8 bg-border -translate-y-1/2" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing & Analysis */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Testing & Analysis
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Microbiological Testing</h3>
                <ul className="space-y-4">
                  {[
                    'Pathogenic bacteria screening (E. coli, Salmonella, Listeria)',
                    'Vibrio species detection',
                    'Total viable count analysis',
                    'Indicator organism testing',
                    'Regular audits and testing updates',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Chemical Analysis</h3>
                <ul className="space-y-4">
                  {[
                    'Heavy metal screening (Mercury, Cadmium, Lead)',
                    'Pesticide residue analysis',
                    'Antibiotic residue testing',
                    'Nutritional composition analysis',
                    'Allergen detection protocols',
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Physical Quality Standards */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Physical Quality Standards
            </h2>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Appearance',
                  points: ['Natural coloring', 'No deformities', 'Proper texture', 'No discoloration'],
                },
                {
                  title: 'Size & Uniformity',
                  points: ['Consistent sizing', 'Weight accuracy', 'Grading compliance', 'Customer specifications'],
                },
                {
                  title: 'Freshness',
                  points: ['Optimal firmness', 'Clear eyes', 'Distinct aroma', 'Proper freezing'],
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-primary/5 rounded-lg border border-primary/10">
                  <h3 className="font-bold text-lg text-foreground mb-4">{item.title}</h3>
                  <ul className="space-y-2">
                    {item.points.map((point, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-foreground text-sm">
                        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Traceability & Documentation */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">
              Traceability & Documentation
            </h2>
            <p className="text-lg text-muted-foreground text-center mb-8 max-w-3xl mx-auto">
              We maintain complete traceability for all products, allowing us to track every batch from production through delivery. Full documentation is available upon request.
            </p>

            <div className="grid gap-6 md:grid-cols-4">
              {[
                { label: 'Batch Records', value: 'Complete' },
                { label: 'Test Reports', value: 'On File' },
                { label: 'Certificates', value: 'Available' },
                { label: 'Audit Trail', value: 'Digital' },
              ].map((item, index) => (
                <div key={index} className="p-4 bg-background rounded-lg text-center border border-border">
                  <p className="text-sm text-muted-foreground mb-2">{item.label}</p>
                  <p className="font-bold text-foreground text-lg">{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Laboratory */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">
              Our Testing Laboratory
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-6">Facility & Equipment</h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Our dedicated quality assurance laboratory is equipped with state-of-the-art testing equipment, including microbiological incubators, HPLC systems, and spectrometers. Our trained technicians perform rigorous testing on every batch.
                </p>
                <ul className="space-y-3">
                  {[
                    'Modern laboratory equipment',
                    'Trained and certified technicians',
                    'Daily quality checks',
                    'Regular equipment calibration',
                    'Continuous staff training',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="text-primary font-bold">✓</span>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-6 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg border border-border">
                <h3 className="text-2xl font-bold text-foreground mb-6">Quality Commitment</h3>
                <blockquote className="text-lg text-muted-foreground italic border-l-4 border-primary pl-4">
                  &ldquo;At Seavoregal Exports, quality is not an afterthought—it&apos;s fundamental to everything we do. Every product that leaves our facilities is backed by comprehensive testing and documentation.&rdquo;
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">
              Questions About Our Quality Process?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our quality team is ready to discuss our procedures and provide documentation for verification.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Contact Our Quality Team</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
