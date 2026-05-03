import type { Metadata, Viewport } from 'next'
import { Inter, Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' })
const poppins = Poppins({ subsets: ["latin"], weight: ['400', '600', '700'], variable: '--font-poppins' })

export const metadata: Metadata = {
  title: 'Seavoregal Exports - Premium Agricultural Products',
  description: 'High-quality agricultural products including Turmeric and Small Onions from India. SGS certified, global distribution.',
  keywords: 'agricultural exports, turmeric, sambar onion, small onion, spices, vegetable exports, India exports',
  creator: 'Seavoregal Exports',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://seavoregalexports.com',
    title: 'Seavoregal Exports - Premium Agricultural Products',
    description: 'High-quality agricultural products including Turmeric and Small Onions',
    siteName: 'Seavoregal Exports',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Seavoregal Exports',
    description: 'Premium agricultural products from India',
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
