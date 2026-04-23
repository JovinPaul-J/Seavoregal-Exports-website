import { companyInfo } from '@/lib/data/company'

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: companyInfo.name,
    url: 'https://seavoregalexports.com',
    logo: 'https://seavoregalexports.com/logo.png',
    description: 'High-quality aquaculture and seafood products from Egypt with international certifications.',
    sameAs: [
      'https://www.facebook.com/seavoregalexports',
      'https://www.linkedin.com/company/seavoregalexports',
      'https://twitter.com/seavoregal',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales',
      telephone: companyInfo.phone,
      email: companyInfo.email,
    },
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressLocality: 'Cairo',
      addressRegion: 'Egypt',
      streetAddress: companyInfo.address,
    },
    foundingDate: String(companyInfo.founded),
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      value: String(companyInfo.employees),
    },
  }
}

export function getBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'Manufacturer'],
    '@id': 'https://seavoregalexports.com',
    name: companyInfo.name,
    description: 'Premium seafood and aquaculture products manufacturer and exporter from Egypt',
    url: 'https://seavoregalexports.com',
    telephone: companyInfo.phone,
    email: companyInfo.email,
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'EG',
      addressLocality: 'Cairo',
      streetAddress: companyInfo.address,
    },
    areaServed: companyInfo.markets.map((market) => ({
      '@type': 'Country',
      name: market,
    })),
    priceRange: '$$$',
    image: 'https://seavoregalexports.com/og-image.png',
    knowsAbout: ['Aquaculture', 'Seafood Exports', 'Shrimp Production', 'Fish Products', 'Food Safety'],
  }
}

export function getProductSchema(productName: string, description: string, category: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: productName,
    description: description,
    category: category,
    brand: {
      '@type': 'Brand',
      name: companyInfo.name,
    },
    manufacturer: {
      '@type': 'Organization',
      name: companyInfo.name,
      url: 'https://seavoregalexports.com',
    },
    countryOfOrigin: {
      '@type': 'Country',
      name: 'Egypt',
    },
    certifications: companyInfo.certifications.map((cert) => ({
      '@type': 'Certification',
      name: cert,
    })),
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
