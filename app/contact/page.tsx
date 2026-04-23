import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { InquiryForm } from '@/components/forms/inquiry-form'
import { Mail, MessageCircle, MapPin, Phone } from 'lucide-react'
import { companyInfo } from '@/lib/data/company'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Contact Us - Seavoregal Exports',
  description: 'Get in touch with Seavoregal Exports. We are here to help with your seafood product inquiries and business partnerships.',
}

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <Hero
          title="Get in Touch"
          subtitle="Contact Us"
          description="Have questions about our products or services? Our team is ready to help. Contact us today to discuss your requirements."
          showWhatsApp
        />

        {/* Contact Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-3 mb-12">
              {/* Email */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-primary/10 mb-4">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Email</h3>
                <a
                  href={companyInfo.socialLinks.email}
                  className="text-primary hover:underline"
                >
                  {companyInfo.email}
                </a>
              </div>

              {/* Phone */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-secondary/10 mb-4">
                  <Phone className="h-6 w-6 text-secondary" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">Phone</h3>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-foreground hover:text-primary"
                >
                  {companyInfo.phone}
                </a>
              </div>

              {/* WhatsApp */}
              <div className="text-center">
                <div className="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-green-100 mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-bold text-lg text-foreground mb-2">WhatsApp</h3>
                <a
                  href={companyInfo.socialLinks.whatsapp}
                  className="text-foreground hover:text-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="p-6 bg-muted rounded-lg border border-border text-center mb-12">
              <div className="inline-flex items-center justify-center gap-2 mb-3">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="font-bold text-lg text-foreground">Headquarters</h3>
              </div>
              <p className="text-muted-foreground">{companyInfo.address}, Egypt</p>
            </div>

            {/* Contact Form */}
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Send us a Message</h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Fill out the form below and our team will get back to you as soon as possible.
                </p>
                <InquiryForm />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-foreground mb-6">Quick Links</h2>

                {/* Business Hours */}
                <div className="p-6 bg-primary/5 rounded-lg border border-primary/20 mb-6">
                  <h3 className="font-bold text-lg text-foreground mb-4">Business Hours</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </li>
                  </ul>
                </div>

                {/* Inquiry Types */}
                <div className="p-6 bg-secondary/5 rounded-lg border border-secondary/20 mb-6">
                  <h3 className="font-bold text-lg text-foreground mb-4">We Can Help With:</h3>
                  <ul className="space-y-2">
                    {[
                      'Product inquiries and specifications',
                      'Bulk ordering and pricing',
                      'Custom product requests',
                      'Distribution partnerships',
                      'Certification documentation',
                      'Technical questions',
                    ].map((item, index) => (
                      <li key={index} className="flex items-center gap-2 text-foreground">
                        <span className="h-2 w-2 rounded-full bg-secondary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct WhatsApp CTA */}
                <Button
                  asChild
                  className="w-full gap-2 bg-green-600 hover:bg-green-700"
                >
                  <a
                    href={companyInfo.socialLinks.whatsapp}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle size={18} />
                    Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Frequently Asked Questions
            </h2>

            <div className="grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
              {[
                {
                  q: 'What is your minimum order quantity?',
                  a: 'Minimum order quantities vary by product. Contact us for specific requirements for your desired product.',
                },
                {
                  q: 'Do you provide samples?',
                  a: 'Yes, we can provide product samples for qualified buyers. Please contact our sales team for details.',
                },
                {
                  q: 'What payment methods do you accept?',
                  a: 'We accept various payment methods including bank transfers, L/C, and other commercial terms based on the buyer\'s preference.',
                },
                {
                  q: 'How long is the delivery time?',
                  a: 'Delivery times depend on destination and product type, typically 2-4 weeks. We work with reliable shipping partners worldwide.',
                },
                {
                  q: 'Can you customize products?',
                  a: 'Yes, we offer custom packaging, sizing, and other specifications. Contact our team to discuss your requirements.',
                },
                {
                  q: 'Are you certified for food exports?',
                  a: 'Yes, we hold ISO 22000, HACCP, GlobalGAP, and ISO 14001 certifications. All documentation available upon request.',
                },
              ].map((item, index) => (
                <div key={index} className="p-6 bg-background rounded-lg border border-border">
                  <h3 className="font-bold text-foreground mb-3">{item.q}</h3>
                  <p className="text-muted-foreground text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
