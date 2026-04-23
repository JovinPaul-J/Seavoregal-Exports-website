import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { InquiryForm } from '@/components/forms/inquiry-form'
import { ProductCard } from '@/components/common/product-card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getProductById, getProductsByCategory, products } from '@/lib/data/products'
import { notFound } from 'next/navigation'
import Link from 'next/link'

interface ProductDetailPageProps {
  params: Promise<{ id: string }>
}

export async function generateMetadata({ params }: ProductDetailPageProps) {
  const resolvedParams = await params
  const product = getProductById(resolvedParams.id)

  if (!product) {
    return {}
  }

  return {
    title: `${product.name} - Seavoregal Exports`,
    description: product.longDescription,
  }
}

export async function generateStaticParams() {
  return products.map((product) => ({
    id: product.id,
  }))
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const resolvedParams = await params
  const product = getProductById(resolvedParams.id)

  if (!product) {
    notFound()
  }

  // Get related products from same category
  const relatedProducts = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 3)

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Breadcrumb */}
        <div className="border-b border-border bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex items-center gap-2 text-sm">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <span className="text-muted-foreground">/</span>
              <Link href="/products" className="text-muted-foreground hover:text-primary">
                Products
              </Link>
              <span className="text-muted-foreground">/</span>
              <span className="text-foreground font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <section className="py-12 md:py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-12 md:grid-cols-2">
              {/* Left: Product Info */}
              <div>
                <Badge className="mb-4">{product.category}</Badge>
                <h1 className="text-4xl font-bold text-foreground mb-4">{product.name}</h1>
                <p className="text-xl text-muted-foreground mb-6">{product.description}</p>

                {/* Long Description */}
                <div className="prose prose-sm max-w-none mb-8">
                  <p className="text-muted-foreground leading-relaxed">{product.longDescription}</p>
                </div>

                {/* Specifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Specifications</h3>
                  <div className="space-y-3">
                    {Object.entries(product.specs).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b border-border last:border-b-0">
                        <span className="font-semibold text-foreground">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Details */}
                <div className="grid grid-cols-2 gap-4 p-4 bg-muted rounded-lg mb-8">
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Origin</p>
                    <p className="text-lg font-bold text-foreground">{product.origin}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Availability</p>
                    <p className={`text-lg font-bold ${
                      product.availability === 'In Stock'
                        ? 'text-green-600'
                        : product.availability === 'Available'
                          ? 'text-blue-600'
                          : 'text-amber-600'
                    }`}>
                      {product.availability}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Min Order</p>
                    <p className="text-lg font-bold text-foreground">{product.minOrder}</p>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">Packaging</p>
                    <p className="text-lg font-bold text-foreground">{product.packaging}</p>
                  </div>
                </div>

                {/* Certifications */}
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-foreground mb-4">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.certifications.map((cert) => (
                      <Badge key={cert} variant="secondary">
                        {cert}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Applications */}
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-4">Applications</h3>
                  <ul className="space-y-2">
                    {product.applications.map((app) => (
                      <li key={app} className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-primary" />
                        <span className="text-foreground">{app}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Right: Inquiry Form */}
              <div>
                <div className="sticky top-24 p-6 bg-muted rounded-lg border border-border">
                  <h2 className="text-2xl font-bold text-foreground mb-6">Interested in This Product?</h2>
                  <InquiryForm productId={product.id} productName={product.name} />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16 md:py-24 bg-muted">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
                Related Products
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((relatedProduct) => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </>
  )
}
