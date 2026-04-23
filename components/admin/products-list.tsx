'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Trash2, Edit2, Plus } from 'lucide-react'
import type { Product } from '@/lib/supabase/server'

interface ProductsListProps {
  products: Product[]
  onDelete: (id: string) => Promise<void>
}

export function ProductsList({ products, onDelete }: ProductsListProps) {
  const [loading, setLoading] = useState<string | null>(null)
  const [localProducts, setLocalProducts] = useState(products)

  const handleDelete = async (id: string) => {
    if (!window.confirm('Are you sure you want to delete this product?')) {
      return
    }

    setLoading(id)
    try {
      await onDelete(id)
      setLocalProducts(prev => prev.filter(p => p.id !== id))
    } finally {
      setLoading(null)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-poppins text-primary">Products</h2>
        <Link href="/admin/products/new">
          <Button className="gap-2 bg-primary hover:bg-primary/90">
            <Plus className="w-4 h-4" />
            Add Product
          </Button>
        </Link>
      </div>

      {localProducts.length === 0 ? (
        <Card className="p-8 text-center">
          <p className="text-muted-foreground mb-4">No products yet</p>
          <Link href="/admin/products/new">
            <Button className="bg-primary hover:bg-primary/90">Create First Product</Button>
          </Link>
        </Card>
      ) : (
        <div className="grid gap-4">
          {localProducts.map(product => (
            <Card key={product.id} className="p-4">
              <div className="flex items-start gap-4">
                {/* Product Image */}
                <div className="relative w-24 h-24 flex-shrink-0 bg-muted rounded-lg overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-lg text-primary mb-1">{product.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{product.category}</p>
                  <p className="text-sm text-foreground line-clamp-2">{product.description}</p>
                </div>

                {/* Actions */}
                <div className="flex gap-2 flex-shrink-0">
                  <Link href={`/admin/products/${product.id}/edit`}>
                    <Button
                      variant="outline"
                      size="sm"
                      className="gap-2"
                    >
                      <Edit2 className="w-4 h-4" />
                      Edit
                    </Button>
                  </Link>
                  <Button
                    variant="destructive"
                    size="sm"
                    onClick={() => handleDelete(product.id)}
                    disabled={loading === product.id}
                    className="gap-2"
                  >
                    <Trash2 className="w-4 h-4" />
                    {loading === product.id ? 'Deleting...' : 'Delete'}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
