'use client'

import { Header } from '@/components/layout/header'
import { Footer } from '@/components/layout/footer'
import { Hero } from '@/components/sections/hero'
import { ProductCard } from '@/components/common/product-card'
import { categories, products } from '@/lib/data/products'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [filteredProducts, setFilteredProducts] = useState(products)

  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products)
    } else {
      setFilteredProducts(products.filter((p) => p.category === selectedCategory))
    }
  }, [selectedCategory])

  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero */}
        <Hero
          title="Our Seafood Products"
          subtitle="Quality & Variety"
          description="Explore our comprehensive range of premium seafood products, from shrimp and fish to specialty items. All products meet international quality and food safety standards."
          showWhatsApp
        />

        {/* Products Section */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* Category Filter */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold text-foreground mb-6">Filter by Category</h2>
              <div className="flex flex-wrap gap-3">
                {categories.map((category) => (
                  <Button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    variant={selectedCategory === category ? 'default' : 'outline'}
                    className="px-6"
                  >
                    {category}
                  </Button>
                ))}
              </div>
            </div>

            {/* Product Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-lg text-muted-foreground">No products found in this category.</p>
                </div>
              )}
            </div>

            {/* Results Count */}
            <div className="text-center mt-12 text-muted-foreground">
              Showing {filteredProducts.length} product{filteredProducts.length !== 1 ? 's' : ''}
            </div>
          </div>
        </section>

        {/* Product Information Section */}
        <section className="py-16 md:py-24 bg-muted">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">
              Product Information & Specifications
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold text-lg text-foreground mb-4">Quality Standards</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>ISO 22000 Food Safety Management certified</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>HACCP compliance at all stages</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Regular testing and quality verification</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Cold chain management maintained</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 bg-background rounded-lg border border-border">
                <h3 className="font-bold text-lg text-foreground mb-4">Packaging & Shipping</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Vacuum-sealed and IQF (Individually Quick Frozen)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Refrigerated containers for optimal freshness</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Worldwide shipping with temperature monitoring</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold mt-1">✓</span>
                    <span>Flexible packaging sizes available</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Custom Products CTA */}
        <section className="py-16 md:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Don&apos;t See What You Need?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We offer custom products and specifications. Contact our team to discuss your specific requirements.
            </p>
            <Button asChild size="lg">
              <a href="/contact">Request Custom Products</a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
