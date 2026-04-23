import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { Timeline } from '@/components/sections/timeline'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { companyInfo, aboutContent, timeline } from '@/lib/data/company'

export const metadata = {
  title: 'About Seavoregal Exports',
  description: 'Learn about Seavoregal Exports, our mission, values, and commitment to sustainable seafood production since 2010.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <Hero
          title="About Seavoregal Exports"
          subtitle="Our Story"
          description="Since 2010, we have been committed to delivering premium seafood products with uncompromising quality and sustainability."
          showWhatsApp={false}
        />

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Mission</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutContent.mission}
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-4">Our Vision</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {aboutContent.vision}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Core Values</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {aboutContent.values.map((value, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border border-border">
                  <h3 className="font-bold text-lg text-foreground mb-3">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Facts */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">By the Numbers</h2>
            <div className="grid gap-8 md:grid-cols-4">
              {[
                { number: `${companyInfo.founded}`, label: 'Year Founded' },
                { number: `${companyInfo.employees}+`, label: 'Employees' },
                { number: `${companyInfo.markets.length}`, label: 'Export Markets' },
                { number: `${companyInfo.certifications.length}`, label: 'Certifications' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                    {stat.number}
                  </div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              <Timeline items={timeline} />
            </div>
          </div>
        </section>

        {/* Team & Expertise */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Our Team</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Our diverse team of {companyInfo.employees}+ professionals brings together decades of experience in aquaculture, seafood processing, quality assurance, and international trade. We are passionate about delivering excellence at every level.
                </p>
                <ul className="space-y-3">
                  {[
                    'Expert aquaculture specialists',
                    'Food safety and quality professionals',
                    'Experienced logistics coordinators',
                    'Dedicated customer service team',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="h-2 w-2 rounded-full bg-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Global Presence</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  We operate in multiple locations across Egypt, enabling us to maintain optimal production capacity and quality standards. Our export network spans across continents.
                </p>
                <div className="space-y-4">
                  <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <h4 className="font-semibold text-foreground mb-2">Export Markets</h4>
                    <p className="text-muted-foreground">{companyInfo.markets.join(', ')}</p>
                  </div>
                  <div className="p-4 bg-secondary/10 rounded-lg border border-secondary/20">
                    <h4 className="font-semibold text-foreground mb-2">Languages Supported</h4>
                    <p className="text-muted-foreground">{companyInfo.languages.join(', ')}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Interested in Partnership?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us to discuss how we can serve your seafood product needs.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
