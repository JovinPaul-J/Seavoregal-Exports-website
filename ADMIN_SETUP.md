# Admin Panel Setup Guide

This guide explains how to set up and use the admin panel for managing Seavoregal Exports products.

## Overview

The admin panel allows you to:
- ✅ Add new products
- ✅ Edit existing products
- ✅ Delete products
- ✅ Manage product specifications and applications
- ✅ Upload product images

All product data is stored in Supabase PostgreSQL database and automatically synced across the website.

## Prerequisites

1. **Supabase Project** - Already connected via integration
2. **Admin Password** - Set in environment variables
3. **Database Migration** - Must be run once to create the products table

## Step 1: Create the Products Table

### Option A: Automatic Migration (Recommended)
Run the migration script from the scripts folder:
```bash
node scripts/run-migration.js
```

### Option B: Manual SQL Setup
If the automatic script fails, run the SQL manually:

1. Go to your Supabase Dashboard
2. Click on **SQL Editor** in the left sidebar
3. Click **New query**
4. Copy the entire contents of `scripts/01-create-products-table.sql`
5. Paste it into the SQL editor
6. Click **Run**

The SQL will create:
- `products` table with all necessary columns
- Indexes for faster queries
- Row-level security policies

## Step 2: Configure Environment Variables

Update your `.env.local` file with Supabase credentials:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
SUPABASE_JWT_SECRET=your-jwt-secret

# Admin credentials
ADMIN_PASSWORD=seavoregal-admin-2024
ADMIN_TOKEN_SECRET=your-secret-key-change-this
```

### Where to find Supabase credentials:
1. Go to your Supabase project settings
2. Click **API** in the left sidebar
3. Copy the URL and keys

## Step 3: Access the Admin Panel

1. Start the development server:
```bash
pnpm dev
```

2. Navigate to: `http://localhost:3000/admin`

3. Enter the admin password (default: `seavoregal-admin-2024`)

4. You'll be redirected to the admin dashboard

## Admin Panel Features

### Dashboard
- View all products at a glance
- Quick edit/delete buttons
- Add new product button

### Adding a Product
1. Click **Add Product** button
2. Fill in the required fields:
   - **Product Name** - Name of the product (e.g., "White Shrimp")
   - **Category** - Select from predefined categories
   - **Image URL** - Full URL to product image
   - **Description** - Detailed product description

3. Optional fields:
   - **Specifications** - Add key-value specifications (Size, Packaging, etc.)
   - **Applications** - Add use cases (Sushi, Grilled, Frozen, etc.)
   - **Certifications** - Add certification names

4. Click **Create Product**

### Editing a Product
1. From the dashboard, click **Edit** on a product
2. Modify any fields
3. Click **Update Product**

### Deleting a Product
1. From the dashboard, click **Delete** on a product
2. Confirm the deletion
3. The product will be removed from the database and website

## Important Notes

### Security
- Change the default `ADMIN_PASSWORD` in production
- Use a strong, unique password
- The `ADMIN_TOKEN_SECRET` should also be changed in production
- Admin tokens expire after 24 hours

### Image URLs
- Use full URLs (https://example.com/image.jpg)
- Recommended image size: 600x400px or larger
- Supported formats: JPG, PNG, WebP
- Images are displayed on the website immediately after adding

### Product Data Sync
- Changes made in the admin panel appear on the website instantly
- The Products page fetches from the database
- Product detail pages work with both database and static products

### Database Backup
- Supabase automatically backs up your data
- Access backups from your Supabase project settings

## Troubleshooting

### Can't log in to admin panel
- Check the `ADMIN_PASSWORD` environment variable
- Default password: `seavoregal-admin-2024`
- Clear browser cookies and try again

### Products not appearing on website
- Check that the products table was created (run migration)
- Verify Supabase credentials are correct
- Check browser console for errors (F12)

### Images not loading
- Ensure the image URL is complete (includes https://)
- Check image hosting service is accessible
- Try a different image URL

### Migration fails
- Ensure `SUPABASE_SERVICE_ROLE_KEY` is set correctly
- Run the manual SQL migration from Supabase dashboard
- Contact Supabase support if database issues persist

## API Routes

The admin panel uses these API endpoints:

| Method | Endpoint | Purpose |
|--------|----------|---------|
| POST | `/api/admin/login` | Authenticate admin user |
| GET | `/api/admin/products` | Fetch all products |
| POST | `/api/admin/products` | Create new product |
| GET | `/api/admin/products/[id]` | Get product details |
| PUT | `/api/admin/products/[id]` | Update product |
| DELETE | `/api/admin/products/[id]` | Delete product |

All POST/PUT/DELETE requests require valid `admin_token` cookie.

## Production Deployment

### Before deploying to production:

1. **Change admin password**:
   - Update `ADMIN_PASSWORD` in Vercel environment variables
   - Use a strong, unique password

2. **Secure token secret**:
   - Change `ADMIN_TOKEN_SECRET` to a random value
   - Generate: `openssl rand -hex 32`

3. **Enable HTTPS**:
   - Vercel automatically uses HTTPS
   - All admin requests use secure cookies

4. **Database backups**:
   - Enable automated backups in Supabase
   - Test recovery procedures

5. **Monitor usage**:
   - Check Supabase dashboard for database stats
   - Monitor API performance

## Next Steps

- Start adding your products through the admin panel
- Customize product categories in the ProductForm component
- Implement image upload instead of URL-based images
- Add more admin features as needed
