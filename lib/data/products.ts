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
    id: 'whiteleg-shrimp',
    name: 'Whiteleg Shrimp (Litopenaeus vannamei)',
    category: 'Shrimp',
    image: '/products/whiteleg-shrimp.jpg',
    description: 'Premium farmed whiteleg shrimp with consistent quality and size.',
    longDescription: 'Our whiteleg shrimp are sustainably farmed in Egypt using advanced aquaculture techniques. They are harvested at optimal maturity and processed under strict hygiene conditions. Perfect for export markets requiring high-quality seafood products.',
    specs: {
      'Average Size': '15-20 per kg',
      'Count': '15/20, 20/25, 25/30',
      'Moisture': '< 12%',
      'Protein': '18-20%',
      'Fat': '1-2%',
    },
    origin: 'Egypt',
    certifications: ['ISO 22000', 'HACCP', 'GlobalGAP'],
    applications: ['Retail', 'Food Service', 'Industrial Processing'],
    packaging: 'Vacuum packed, IQF (Individually Quick Frozen)',
    minOrder: '1000 kg',
    availability: 'In Stock',
  },
  {
    id: 'black-tiger-shrimp',
    name: 'Black Tiger Shrimp (Penaeus monodon)',
    category: 'Shrimp',
    image: '/products/black-tiger-shrimp.jpg',
    description: 'Large, premium black tiger shrimp with firm texture and rich flavor.',
    longDescription: 'Black tiger shrimp are prized for their size and premium quality. Our operation focuses on sustainable farming practices while maintaining the highest food safety standards. Ideal for high-end restaurants and premium retail markets.',
    specs: {
      'Average Size': '8-12 per kg',
      'Count': '8/12, 12/16, 16/20',
      'Moisture': '< 12%',
      'Protein': '19-21%',
      'Fat': '1.5-2.5%',
    },
    origin: 'Egypt',
    certifications: ['ISO 22000', 'HACCP', 'GlobalGAP', 'Organic Certified'],
    applications: ['Premium Retail', 'Fine Dining', 'Export Markets'],
    packaging: 'Individually wrapped, IQF, Premium packaging',
    minOrder: '500 kg',
    availability: 'Available',
  },
  {
    id: 'tilapia-fillets',
    name: 'Tilapia Fillets',
    category: 'Fish',
    image: '/products/tilapia-fillets.jpg',
    description: 'Fresh, boneless tilapia fillets with uniform quality and taste.',
    longDescription: 'Our tilapia fillets are carefully processed from farm-raised fish, ensuring consistent quality and minimal waste. They are suitable for various culinary preparations and meet international food safety standards.',
    specs: {
      'Fillet Weight': '80-120g',
      'Moisture': '< 13%',
      'Protein': '16-18%',
      'Fat': '1-2%',
      'Color': 'White to light pink',
    },
    origin: 'Egypt',
    certifications: ['ISO 22000', 'HACCP'],
    applications: ['Food Service', 'Retail', 'Food Processing'],
    packaging: 'IQF, Vacuum packed in 10kg cartons',
    minOrder: '2000 kg',
    availability: 'In Stock',
  },
  {
    id: 'nile-perch-fillets',
    name: 'Nile Perch Fillets',
    category: 'Fish',
    image: '/products/nile-perch-fillets.jpg',
    description: 'Premium Nile perch fillets known for their delicate flavor and firm texture.',
    longDescription: 'Sourced from sustainable fisheries and processed with precision, our Nile perch fillets deliver excellent quality. They are versatile for various cooking methods and appeal to both retail and food service markets.',
    specs: {
      'Fillet Weight': '150-250g',
      'Moisture': '< 13%',
      'Protein': '17-19%',
      'Fat': '0.8-1.5%',
      'Color': 'White to pale yellow',
    },
    origin: 'Egypt',
    certifications: ['ISO 22000', 'HACCP', 'GlobalGAP'],
    applications: ['Premium Retail', 'Fine Dining', 'Export'],
    packaging: 'IQF, Individually wrapped in 5kg and 10kg packs',
    minOrder: '1500 kg',
    availability: 'Available',
  },
  {
    id: 'seabass-fillets',
    name: 'Seabass Fillets',
    category: 'Fish',
    image: '/products/seabass-fillets.jpg',
    description: 'Farmed seabass fillets with premium quality and consistent specifications.',
    longDescription: 'Our seabass fillets are produced from our controlled aquaculture farms, ensuring superior quality and food safety. They are packed and frozen at peak freshness, making them ideal for export markets.',
    specs: {
      'Fillet Weight': '120-180g',
      'Moisture': '< 13%',
      'Protein': '18-20%',
      'Fat': '2-3%',
      'Color': 'White to silver',
    },
    origin: 'Egypt',
    certifications: ['ISO 22000', 'HACCP', 'ISO 14001'],
    applications: ['Fine Dining', 'Premium Retail', 'Restaurants'],
    packaging: 'IQF, Individually wrapped, Premium packaging',
    minOrder: '1000 kg',
    availability: 'Available',
  },
  {
    id: 'fish-roe-caviar',
    name: 'Fish Roe (Caviar)',
    category: 'Specialty',
    image: '/products/fish-roe-caviar.jpg',
    description: 'Premium fish roe offering a delicate taste and elegant presentation.',
    longDescription: 'Our fish roe is carefully processed and graded to meet premium market standards. It offers a sophisticated flavor profile and is ideal for upscale restaurants, catering, and specialty retailers.',
    specs: {
      'Grade': 'Premium/Grade A',
      'Flavor': 'Mild, slightly sweet',
      'Size': '2-4mm',
      'Color': 'Golden to amber',
      'Salinity': '3-5%',
    },
    origin: 'Egypt',
    certifications: ['ISO 22000', 'HACCP', 'Halal Certified'],
    applications: ['Fine Dining', 'Luxury Catering', 'Specialty Retail'],
    packaging: 'Glass jars, Refrigerated, Premium presentation',
    minOrder: '100 kg',
    availability: 'Limited',
  },
  {
    id: 'shrimp-paste',
    name: 'Shrimp Paste & Byproducts',
    category: 'Specialty',
    image: '/products/shrimp-paste.jpg',
    description: 'High-quality shrimp paste and byproducts for industrial applications.',
    longDescription: 'Our shrimp paste is made from shrimp processing byproducts, minimizing waste and providing value-added products. It is used in various industrial food applications and seafood-based products.',
    specs: {
      'Type': 'Paste / Powder',
      'Protein': '35-45%',
      'Fat': '5-8%',
      'Moisture': '< 10%',
      'Color': 'Pink to brownish',
    },
    origin: 'Egypt',
    certifications: ['ISO 22000', 'HACCP'],
    applications: ['Food Industry', 'Feed Industry', 'Cosmetics'],
    packaging: 'Bulk containers, 25kg bags',
    minOrder: '5000 kg',
    availability: 'In Stock',
  },
]

export const categories = ['All', 'Shrimp', 'Fish', 'Specialty']

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getProductsByCategory(category: string): Product[] {
  if (category === 'All') return products
  return products.filter((p) => p.category === category)
}
