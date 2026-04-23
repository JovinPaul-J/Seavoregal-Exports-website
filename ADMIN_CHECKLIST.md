# Admin Panel Setup Checklist

## Pre-Setup
- [ ] Supabase project created and connected
- [ ] Supabase credentials copied
- [ ] Project repository cloned/set up locally

## Database Setup
- [ ] Run migration: Copy SQL from `scripts/01-create-products-table.sql`
- [ ] Paste SQL into Supabase SQL Editor
- [ ] Execute the SQL query
- [ ] Verify `products` table exists in Supabase
- [ ] Check for 0 rows in products table (should be empty initially)

## Environment Variables
- [ ] Create `.env.local` file in project root
- [ ] Add `NEXT_PUBLIC_SUPABASE_URL` (from Supabase settings)
- [ ] Add `NEXT_PUBLIC_SUPABASE_ANON_KEY` (from Supabase settings)
- [ ] Add `SUPABASE_SERVICE_ROLE_KEY` (from Supabase settings)
- [ ] Add `SUPABASE_JWT_SECRET` (from Supabase settings)
- [ ] Set `ADMIN_PASSWORD` (choose a strong password)
- [ ] Set `ADMIN_TOKEN_SECRET` (generate random string)
- [ ] Verify all env vars are set: `echo $NEXT_PUBLIC_SUPABASE_URL`

## Development Server
- [ ] Start dev server: `pnpm dev`
- [ ] Wait for "✓ Compiled successfully" message
- [ ] Open browser to `http://localhost:3000`
- [ ] Verify website loads without errors

## Admin Panel Access
- [ ] Navigate to `http://localhost:3000/admin`
- [ ] Admin login page should display
- [ ] Enter admin password
- [ ] Click "Login" button
- [ ] Should redirect to `/admin/dashboard`
- [ ] Dashboard should load with "Products" section
- [ ] "Add Product" button should be visible

## Test Product Creation
- [ ] Click "Add Product" button
- [ ] Fill in test product:
  - Name: "Test Shrimp"
  - Category: "Shrimp"
  - Image: Any valid image URL
  - Description: "Test product"
- [ ] Click "Create Product"
- [ ] Should redirect to dashboard
- [ ] Test product should appear in list
- [ ] Product image should load in admin dashboard

## Test Product Display
- [ ] Go to `http://localhost:3000/products`
- [ ] Test product should appear in products list
- [ ] Click on product to view details
- [ ] Product details page loads correctly
- [ ] All product information displays properly

## Test Product Editing
- [ ] In admin dashboard, click "Edit" on test product
- [ ] Modify the product description
- [ ] Click "Update Product"
- [ ] Should redirect to dashboard
- [ ] Changes should be reflected in product list
- [ ] Go to products page and verify changes
- [ ] Product detail page shows updated info

## Test Product Deletion
- [ ] In admin dashboard, click "Delete" on test product
- [ ] Confirm deletion in popup
- [ ] Product should disappear from list
- [ ] Go to products page and verify it's gone
- [ ] Check product detail page returns 404

## Features Verification
- [ ] Add multiple products (3-5)
- [ ] Products appear in correct category
- [ ] Images load properly on website
- [ ] Product names and descriptions display correctly
- [ ] Edit a product successfully
- [ ] Delete a product successfully
- [ ] Admin session persists for 24 hours (or until logout)

## Security Verification
- [ ] Admin page requires password (verify by trying without cookie)
- [ ] Try accessing `/api/admin/products` POST without admin token (should fail)
- [ ] Logout button clears admin session
- [ ] After logout, can't access admin dashboard
- [ ] Browser cookies show `admin_token` after login

## Production Readiness
- [ ] Change `ADMIN_PASSWORD` to something unique
- [ ] Generate new `ADMIN_TOKEN_SECRET` with: `openssl rand -hex 32`
- [ ] Update `.env.local` with production values
- [ ] Test deployment to staging environment
- [ ] Verify Supabase credentials work on deployed site
- [ ] Verify admin panel works on deployed site
- [ ] Set up database backups in Supabase
- [ ] Monitor Supabase usage dashboard

## Documentation
- [ ] Read `ADMIN_QUICK_START.md`
- [ ] Read `ADMIN_SETUP.md` for full details
- [ ] Bookmark admin panel URLs
- [ ] Share credentials securely with team members
- [ ] Document custom admin password location

## Troubleshooting Completed
- [ ] No "Event handlers cannot be passed to Client Component" errors
- [ ] No database connection errors
- [ ] No authentication errors
- [ ] Images load on products page
- [ ] All API routes respond correctly

---

## Common Issues & Solutions

### "Can't connect to Supabase"
- [ ] Check `NEXT_PUBLIC_SUPABASE_URL` is correct
- [ ] Check internet connection
- [ ] Verify Supabase project is active

### "Login fails"
- [ ] Check `ADMIN_PASSWORD` matches what you set
- [ ] Clear browser cookies and try again
- [ ] Check .env.local is in project root

### "Products not showing"
- [ ] Verify migration was run successfully
- [ ] Check `products` table exists in Supabase
- [ ] Check `SUPABASE_SERVICE_ROLE_KEY` is correct

### "Images not loading"
- [ ] Verify image URL is complete (starts with https://)
- [ ] Check image URL is publicly accessible
- [ ] Try a different image URL

### "Database table not found"
- [ ] Go to Supabase → SQL Editor
- [ ] Copy entire SQL from `scripts/01-create-products-table.sql`
- [ ] Paste and run in SQL Editor
- [ ] Refresh page and try again

---

## Sign-Off

Once all items are checked:

- [ ] Admin panel is fully functional
- [ ] Database is configured and working
- [ ] Products can be created, edited, deleted
- [ ] Website displays products from database
- [ ] Security measures are in place
- [ ] Ready for production deployment

**Setup Date**: _______________  
**Completed By**: _______________  
**Notes**: _______________

---

Need help? See `ADMIN_SETUP.md` or `ADMIN_QUICK_START.md`
