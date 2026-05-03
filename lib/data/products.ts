export interface Product {
  id: string
  name: string
  category: string
  image: string
  description: string
  longDescription: string
  specs: Record<string, string>
  origin: string
  certifications: string[]
  applications: string[]
  packaging: string
  minOrder: string
  availability: 'In Stock' | 'Available' | 'Limited'
}

export const products: Product[] = [
  {
    id: 'small-onion',
    name: 'Small Onion (Sambar Onion)',
    category: 'Vegetables',
    image: '/products/small-onion.jpg',
    description: 'High-quality Small Onions (Sambar Onion) available whole year round.',
    longDescription: 'Our premium Small Onions are carefully sourced and sorted to ensure maximum freshness and shelf life. Ideal for various culinary uses, they are packed in durable jute bags and are available for global export via sea or air.',
    specs: {
      'Season': 'Whole Year',
      'Shipment Type': 'FOB, CIF, Door to Door, Duty Paid',
      'Payment Terms': '100% Advance OR 50% Advance + 50% Irrevocable LC',
    },
    origin: 'India',
    certifications: ['SGS Certified', 'Third Party Inspection'],
    applications: ['Food Service', 'Retail', 'Culinary'],
    packaging: '5kg, 10kg, 25kg / Customize (Jute Bag)',
    minOrder: '1500 Tons Per Year',
    availability: 'In Stock',
  },
  {
    id: 'turmeric-powder',
    name: 'Turmeric Powder',
    category: 'Spices',
    image: '/products/turmeric-powder.jpg',
    description: 'Premium Turmeric Powder for food and pooja purposes.',
    longDescription: 'Finely ground turmeric powder with vibrant color and rich aroma. Processed under strict hygiene conditions and packed in 81 Micron Food Grade material to preserve its natural oils and curcumin content.',
    specs: {
      'Purpose': 'Food purpose, Pooja purpose',
      'Season': 'Whole Year',
      'Shipment Type': 'FOB, CIF, Door to Door, Duty Paid',
    },
    origin: 'India',
    certifications: ['SGS Certified', 'Third Party Inspection'],
    applications: ['Food', 'Pooja', 'Retail', 'Bulk'],
    packaging: 'Retail: 500gm/20 Packs, Bulk: 10kg, 20kg, 35kg',
    minOrder: '300 Tons Per Year',
    availability: 'In Stock',
  },
  {
    id: 'turmeric-finger-fresh',
    name: 'Turmeric Finger (Fresh)',
    category: 'Spices',
    image: '/products/turmeric-finger-fresh.jpg',
    description: 'Fresh Turmeric Fingers packed with natural goodness.',
    longDescription: 'Freshly harvested turmeric fingers selected for their optimal maturity and quality. Known for their distinct earthy flavor and medicinal properties, available under SEAVOREGAL / SATHIYA brands.',
    specs: {
      'Season': 'Whole Year',
      'Brand': 'SEAVOREGAL / SATHIYA',
      'Shipment Type': 'FOB, CIF, Door to Door',
    },
    origin: 'India',
    certifications: ['SGS Certified', 'Third Party Inspection'],
    applications: ['Culinary', 'Medicinal', 'Processing'],
    packaging: '5kg, 10kg, 25kg / Customize (Jute Bag)',
    minOrder: '300 Tons Per Year',
    availability: 'In Stock',
  },
  {
    id: 'turmeric-finger-dry',
    name: 'Turmeric Finger (Dry)',
    category: 'Spices',
    image: '/products/turmeric-finger-dry.jpg',
    description: 'Sun-dried Turmeric Fingers with high curcumin content.',
    longDescription: 'Premium sun-dried turmeric fingers carefully processed to retain their active compounds and color. Perfect for grinding or direct use in various industries.',
    specs: {
      'Season': 'Whole Year',
      'Brand': 'SEAVOREGAL',
      'Shipment Type': 'FOB, CIF, Door to Door',
    },
    origin: 'India',
    certifications: ['SGS Certified', 'Third Party Inspection'],
    applications: ['Spice Blends', 'Extraction', 'Retail'],
    packaging: '5kg, 10kg, 25kg / Customize (Jute Bag)',
    minOrder: '300 Tons Per Year',
    availability: 'In Stock',
  },
]

export const categories = ['All', 'Spices', 'Vegetables']

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products
  return products.filter((p) => p.category === category)
}
