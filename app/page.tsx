import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { ProductCard } from '@/components/common/product-card'
import { TestimonialCard } from '@/components/sections/testimonial-card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { products } from '@/lib/data/products'
import { testimonials } from '@/lib/data/company'
import { certifications } from '@/lib/data/certifications'

export default function Home() {
  const featuredProducts = products.slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <Hero
          title="Premium Agricultural Products"
          subtitle="Global Quality, Local Expertise"
          description="Seavoregal Exports delivers high-quality agricultural products including premium Turmeric and Small Onions with international certifications. Trusted by distributors and retailers worldwide."
          primaryCta={{ text: 'Explore Products', href: '/products' }}
          secondaryCta={{ text: 'About Us', href: '/about' }}
          showWhatsApp
        />

        {/* Featured Products Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Featured Products
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Discover our premium selection of agricultural exports, carefully sourced and processed to the highest standards.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild size="lg">
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Certified Excellence
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We maintain the highest international standards with comprehensive certifications covering food safety, environmental responsibility, and sustainable practices.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {certifications.map((cert) => (
                <div key={cert.id} className="p-6 border border-border rounded-lg text-center hover:shadow-lg transition-shadow">
                  <div className="text-5xl mb-3">{cert.icon}</div>
                  <h3 className="font-bold text-lg text-foreground mb-2">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{cert.full_name}</p>
                  <div className="text-xs font-semibold text-primary">
                    Since {cert.year_obtained}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button asChild variant="outline" size="lg">
                <Link href="/certifications">View All Certifications</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Key Benefits Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Why Choose Seavoregal
              </h2>
            </div>

            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  title: 'Quality Assured',
                  description: 'SGS Certified with strict quality control at every stage.',
                },
                {
                  title: 'Sustainable Practices',
                  description: 'Committed to environmentally responsible farming practices.',
                },
                {
                  title: 'Global Experience',
                  description: 'Serving distributors and retailers in Europe, Asia, Middle East, and beyond.',
                },
              ].map((benefit, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border border-border">
                  <h3 className="font-bold text-lg text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                What Our Customers Say
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Trusted by leading distributors and retailers worldwide.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  author={testimonial.author}
                  company={testimonial.company}
                  text={testimonial.text}
                  rating={5}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 bg-primary text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Partner with Seavoregal?
            </h2>
            <p className="text-lg mb-8 text-primary-foreground/90 max-w-2xl mx-auto">
              Get in touch with our team to discuss your agricultural product requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild variant="secondary" size="lg">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                <a
                  href="https://wa.me/201234567890?text=Hi%20Seavoregal,%20I%20am%20interested%20in%20your%20products."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat on WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
