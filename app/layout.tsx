import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Seavoregal Exports - Premium Seafood Products',
  description: 'High-quality aquaculture and seafood products from Egypt. ISO certified, sustainable practices, global distribution.',
  keywords: 'seafood exports, aquaculture, shrimp, fish, Egypt exports, organic seafood, sustainable fishing',
  creator: 'Seavoregal Exports',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seavoregalexports.com',
    title: 'Seavoregal Exports - Premium Seafood Products',
    description: 'High-quality aquaculture and seafood products from Egypt',
    siteName: 'Seavoregal Exports',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seavoregal Exports',
    description: 'Premium seafood products from Egypt',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: '#2D5016',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
