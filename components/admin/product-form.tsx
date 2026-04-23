'use client'

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import type { Product } from '@/lib/supabase/server'

interface ProductFormProps {
  product?: Product
  onSubmit: (data: any) => Promise<void>
  isLoading?: boolean
}

const CATEGORIES = ['Shrimp', 'Fish', 'Tilapia', 'Seabass', 'Other']

export function ProductForm({ product, onSubmit, isLoading = false }: ProductFormProps) {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    category: product?.category || CATEGORIES[0],
    image: product?.image || '',
    description: product?.description || '',
    specifications: product?.specifications || {},
    applications: product?.applications || [],
    certifications: product?.certifications || [],
  })
  const [error, setError] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSpecificationChange = (key: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      specifications: { ...prev.specifications, [key]: value }
    }))
  }

  const handleApplicationChange = (index: number, value: string) => {
    setFormData(prev => {
      const apps = [...prev.applications]
      apps[index] = value
      return { ...prev, applications: apps }
    })
  }

  const addApplication = () => {
    setFormData(prev => ({
      ...prev,
      applications: [...prev.applications, '']
    }))
  }

  const removeApplication = (index: number) => {
    setFormData(prev => ({
      ...prev,
      applications: prev.applications.filter((_, i) => i !== index)
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.name || !formData.category || !formData.image || !formData.description) {
      setError('Please fill in all required fields')
      return
    }

    try {
      await onSubmit(formData)
    } catch (err: any) {
      setError(err.message || 'Failed to save product')
    }
  }

  return (
    <Card className="p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-bold font-poppins text-primary">
          {product ? 'Edit Product' : 'Add New Product'}
        </h2>
      </div>

      {error && (
        <div className="flex gap-3 p-3 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-red-600">{error}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Product Name *</label>
            <Input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., White Shrimp"
            />
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium">Category *</label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-border rounded-lg"
            >
              {CATEGORIES.map(cat => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Image */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Image URL *</label>
          <Input
            name="image"
            value={formData.image}
            onChange={handleChange}
            placeholder="https://example.com/image.jpg"
          />
          {formData.image && (
            <div className="relative w-32 h-32 border border-border rounded-lg overflow-hidden">
              <img
                src={formData.image}
                alt="Preview"
                className="w-full h-full object-cover"
              />
            </div>
          )}
        </div>

        {/* Description */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Description *</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product description"
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg resize-none"
          />
        </div>

        {/* Specifications */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Specifications</label>
          <div className="space-y-2">
            {Object.entries(formData.specifications).map(([key, value]) => (
              <div key={key} className="flex gap-2">
                <Input
                  value={key}
                  disabled
                  className="flex-1"
                />
                <Input
                  value={value}
                  onChange={(e) => handleSpecificationChange(key, e.target.value)}
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => {
                    const newSpecs = { ...formData.specifications }
                    delete newSpecs[key]
                    setFormData(prev => ({ ...prev, specifications: newSpecs }))
                  }}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={() => {
                const key = `spec_${Object.keys(formData.specifications).length + 1}`
                handleSpecificationChange(key, '')
              }}
            >
              Add Specification
            </Button>
          </div>
        </div>

        {/* Applications */}
        <div className="space-y-2">
          <label className="text-sm font-medium">Applications</label>
          <div className="space-y-2">
            {formData.applications.map((app, index) => (
              <div key={index} className="flex gap-2">
                <Input
                  value={app}
                  onChange={(e) => handleApplicationChange(index, e.target.value)}
                  placeholder="e.g., Sushi, Canned Products"
                  className="flex-1"
                />
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => removeApplication(index)}
                >
                  Remove
                </Button>
              </div>
            ))}
            <Button
              type="button"
              variant="outline"
              onClick={addApplication}
            >
              Add Application
            </Button>
          </div>
        </div>

        {/* Submit */}
        <div className="flex gap-3 pt-4">
          <Button
            type="submit"
            className="bg-primary hover:bg-primary/90"
            disabled={isLoading}
          >
            {isLoading ? 'Saving...' : product ? 'Update Product' : 'Create Product'}
          </Button>
        </div>
      </form>
    </Card>
  )
}
