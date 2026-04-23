# Seavoregal Exports - B2B Seafood Export Website

A modern, production-ready B2B website for Seavoregal Exports, a premium aquaculture and seafood export company from Egypt.

## Features

### Core Pages
- **Home Page** - Hero section, featured products, certifications, testimonials, and CTA sections
- **About Page** - Company mission, vision, values, timeline, and team information
- **Products Page** - Product catalog with category filtering and detailed product cards
- **Product Detail Pages** - Dynamic routes with detailed specifications, certifications, and inquiry forms
- **Certifications Page** - Showcase of ISO and international certifications
- **Quality Assurance Page** - Quality process, testing procedures, and laboratory information
- **Contact Page** - Contact form, business hours, FAQ section, and multiple contact methods

### Technical Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Dynamic Content** - Product pages with static generation for SEO optimization
- **API Routes** - Inquiry and contact form handlers with validation
- **SEO Optimized**
  - XML Sitemap generation
  - Meta tags and Open Graph support
  - JSON-LD structured data schemas
  - Robots.txt configuration
  - Breadcrumb navigation
- **Performance Optimized**
  - Image optimization with Next.js Image component
  - Fast page loads with static generation
  - Proper caching headers
- **Accessibility** - Semantic HTML, ARIA labels, keyboard navigation
- **Form Validation** - Client and server-side validation with error handling

### Components
- Header with navigation and mobile menu
- Footer with links and contact info
- Product cards with badges and filtering
- Certification badges and grid layouts
- Hero sections with customizable CTAs
- Inquiry forms with product context
- Timeline component for company history
- Testimonial cards
- WhatsApp integration button

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Styling**: Tailwind CSS with shadcn/ui components
- **Fonts**: Inter and Poppins from Google Fonts
- **Form Handling**: React Hook Form with client-side validation
- **Icons**: Lucide React
- **Type Safety**: TypeScript
- **Deployment**: Vercel-ready

## Project Structure

```
seavoregal-exports/
├── app/
│   ├── layout.tsx                 # Root layout with fonts and metadata
│   ├── globals.css                # Global styles and design tokens
│   ├── page.tsx                   # Home page
│   ├── about/page.tsx             # About page
│   ├── products/
│   │   ├── page.tsx               # Products listing
│   │   └── [id]/page.tsx          # Product detail (dynamic)
│   ├── certifications/page.tsx     # Certifications page
│   ├── quality/page.tsx           # Quality assurance page
│   ├── contact/page.tsx           # Contact page
│   └── api/
│       ├── inquiry/route.ts       # Inquiry form endpoint
│       └── contact/route.ts       # Contact form endpoint
├── components/
│   ├── layout/
│   │   ├── header.tsx             # Navigation header
│   │   └── footer.tsx             # Footer with links
│   ├── common/
│   │   ├── product-card.tsx       # Product card component
│   │   ├── certification-badge.tsx # Certification display
│   │   └── whatsapp-button.tsx    # WhatsApp CTA button
│   ├── sections/
│   │   ├── hero.tsx               # Hero section
│   │   ├── testimonial-card.tsx   # Customer testimonials
│   │   └── timeline.tsx           # Company timeline
│   └── forms/
│       └── inquiry-form.tsx       # Product inquiry form
├── lib/
│   ├── data/
│   │   ├── company.ts             # Company info, values, timeline
│   │   ├── products.ts            # Product catalog
│   │   └── certifications.ts      # Certification data
│   └── seo/
│       └── structured-data.ts     # JSON-LD schemas
├── public/
│   ├── robots.txt                 # SEO robots configuration
│   └── [product images]
├── .env.example                   # Environment variables template
├── next.config.mjs               # Next.js configuration
├── tailwind.config.ts            # Tailwind configuration
└── tsconfig.json                 # TypeScript configuration
```

## Setup Instructions

### Prerequisites
- Node.js 18+ and npm/pnpm/yarn
- Git

### Installation

1. **Clone or download the project**
   ```bash
   git clone https://github.com/your-org/seavoregal-exports.git
   cd seavoregal-exports
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   pnpm install
   # or
   yarn install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run development server**
   ```bash
   npm run dev
   # or
   pnpm dev
   # or
   yarn dev
   ```

5. **Open in browser**
   ```
   http://localhost:3000
   ```

## Configuration

### Company Information
Edit `/lib/data/company.ts` to update:
- Company name, contact details, social links
- Mission, vision, and company values
- Timeline and history
- Testimonials and team information

### Products
Edit `/lib/data/products.ts` to:
- Add, edit, or remove products
- Update product specifications and certifications
- Change product categories and availability

### Certifications
Edit `/lib/data/certifications.ts` to:
- Update certification details
- Add new certifications
- Modify certification descriptions

### Branding & Colors
Edit `/app/globals.css` to customize:
- Primary and secondary colors (currently green and gold)
- Design tokens and theme variables
- Typography and spacing scales

## Email & Form Handling

The form endpoints are set up to accept submissions. To enable actual email notifications:

### Option 1: Using Resend
```typescript
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

// In route handler:
await resend.emails.send({
  from: 'noreply@seavoregal.com',
  to: 'sales@seavoregal.com',
  subject: 'New Inquiry',
  html: emailContent,
})
```

### Option 2: Using SendGrid
```typescript
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

await sgMail.send({
  to: 'sales@seavoregal.com',
  from: 'noreply@seavoregal.com',
  subject: 'New Inquiry',
  html: emailContent,
})
```

### Option 3: Database Storage
Set up a database (Supabase, PostgreSQL, MongoDB) to store form submissions.

## SEO Optimization

The site includes:
- **Dynamic Sitemap** - Auto-generated from products and pages
- **Meta Tags** - Open Graph and Twitter cards configured
- **Structured Data** - JSON-LD schemas for organization, products, and FAQ
- **Robots.txt** - Search engine crawling configuration
- **Breadcrumbs** - Navigation breadcrumbs for better UX and SEO

## Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push

```bash
# Or deploy using Vercel CLI
npm i -g vercel
vercel
```

### Environment Variables for Production
Set these in your Vercel project settings:
- `NEXT_PUBLIC_SITE_URL` - Your production domain
- Email service keys (if using email)
- Database connection strings (if storing form data)

## Performance Tips

- Replace product image URLs with actual product photos in `/public/products/`
- Add real customer photos to testimonials
- Implement actual form submission handling (email/database)
- Consider adding image optimization for faster loads
- Use Vercel Analytics to monitor performance

## Customization Guide

### Change Company Colors
Edit the design tokens in `/app/globals.css`:
```css
:root {
  --primary: oklch(0.35 0.18 142);  /* Green */
  --secondary: oklch(0.65 0.25 52); /* Gold */
  /* Update other colors as needed */
}
```

### Add New Products
1. Edit `/lib/data/products.ts`
2. Add product object with all required fields
3. Images will auto-display if placed in `/public/products/`

### Modify Navigation
Edit the links in:
- `/components/layout/header.tsx` - Main header navigation
- `/components/layout/footer.tsx` - Footer links

### Change Typography
Edit font imports in `/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'

const yourFont = YourFont({ subsets: ["latin"] })
```

Then update Tailwind config to use the new font variable.

## Support & Maintenance

### Common Issues

1. **Images not displaying**
   - Place images in `/public/products/` directory
   - Use correct filenames matching product data

2. **Forms not submitting**
   - Check console for validation errors
   - Ensure email service is configured (if needed)
   - Verify API routes are accessible

3. **Slow performance**
   - Check Vercel deployment logs
   - Optimize large images before upload
   - Review analytics for bottlenecks

### Regular Maintenance
- Review and update product information quarterly
- Keep certifications current
- Monitor contact form submissions
- Update testimonials with new customer feedback
- Check SEO rankings and update keywords

## License

This project is custom-built for Seavoregal Exports. All rights reserved.

## Version

Current Version: 1.0.0
Last Updated: 2024

---

For questions or support, contact the development team.
