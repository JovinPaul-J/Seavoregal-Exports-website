'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { Product } from '@/lib/data/products'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const [imageError, setImageError] = useState(false)

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative h-48 w-full bg-muted overflow-hidden">
        {!imageError && (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            onError={() => setImageError(true)}
          />
        )}
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-sm text-muted-foreground">{product.name}</div>
        </div>
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <Badge variant="outline" className="mb-2">
            {product.category}
          </Badge>
          <h3 className="font-semibold text-foreground text-sm line-clamp-2">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2 mt-1">
            {product.description}
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground bg-muted p-2 rounded">
          <div>
            <span className="font-semibold">Origin:</span> {product.origin}
          </div>
          <div>
            <span className="font-semibold">Min Order:</span> {product.minOrder}
          </div>
        </div>

        {/* Certifications */}
        <div className="flex flex-wrap gap-1">
          {product.certifications.slice(0, 2).map((cert) => (
            <Badge key={cert} variant="secondary" className="text-xs">
              {cert}
            </Badge>
          ))}
          {product.certifications.length > 2 && (
            <Badge variant="secondary" className="text-xs">
              +{product.certifications.length - 2}
            </Badge>
          )}
        </div>

        {/* Availability */}
        <div className={`text-sm font-medium ${
          product.availability === 'In Stock'
            ? 'text-green-600'
            : product.availability === 'Available'
              ? 'text-blue-600'
              : 'text-amber-600'
        }`}>
          {product.availability}
        </div>

        {/* CTA */}
        <Button asChild className="w-full">
          <Link href={`/products/${product.id}`}>
            View Details
          </Link>
        </Button>
      </div>
    </Card>
  )
}
