export interface Certification {
  id: string
  name: string
  full_name: string
  description: string
  icon: string
  year_obtained: number
  issuing_body: string
  scope: string
}

export const certifications: Certification[] = [
  {
    id: 'iso-22000',
    name: 'ISO 22000',
    full_name: 'Food Safety Management System',
    description: 'International standard that specifies requirements for a food safety management system. Demonstrates our commitment to ensuring the safety of our food products.',
    icon: '🏆',
    year_obtained: 2012,
    issuing_body: 'International Organization for Standardization',
    scope: 'Food production, processing, and distribution',
  },
  {
    id: 'haccp',
    name: 'HACCP',
    full_name: 'Hazard Analysis and Critical Control Points',
    description: 'Systematic approach to food safety that identifies and controls hazards. Essential for ensuring product safety at every stage of production.',
    icon: '✓',
    year_obtained: 2011,
    issuing_body: 'Food Safety Authority',
    scope: 'Seafood production and processing',
  },
  {
    id: 'globalgap',
    name: 'GlobalGAP',
    full_name: 'Good Agricultural Practices',
    description: 'Certification for responsible aquaculture and agricultural practices. Ensures environmental protection and worker welfare in our farms.',
    icon: '🌱',
    year_obtained: 2016,
    issuing_body: 'Global Partnership for Good Agricultural Practice',
    scope: 'Aquaculture and farming operations',
  },
  {
    id: 'iso-14001',
    name: 'ISO 14001',
    full_name: 'Environmental Management System',
    description: 'Demonstrates our commitment to environmental protection and sustainable practices. Helps us minimize our ecological footprint.',
    icon: '🌍',
    year_obtained: 2020,
    issuing_body: 'International Organization for Standardization',
    scope: 'Environmental management and sustainability',
  },
  {
    id: 'halal',
    name: 'Halal Certified',
    full_name: 'Halal Food Certification',
    description: 'Certification confirming that our products are halal compliant, meeting Islamic dietary requirements and standards.',
    icon: '✨',
    year_obtained: 2015,
    issuing_body: 'Halal Certification Authority',
    scope: 'Food production and processing',
  },
]

export function getCertificationById(id: string): Certification | undefined {
  return certifications.find((c) => c.id === id)
}
