# Admin Panel - Quick Start

## 5-Minute Setup

### 1. Run Database Migration
```bash
# Copy and paste the SQL from scripts/01-create-products-table.sql
# into your Supabase SQL Editor, then click Run
```

**Supabase → SQL Editor → Copy SQL → Run**

### 2. Set Environment Variables
In `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
SUPABASE_SERVICE_ROLE_KEY=your_service_key
SUPABASE_JWT_SECRET=your_jwt_secret
ADMIN_PASSWORD=your_secure_password
ADMIN_TOKEN_SECRET=your_secret_key
```

Get these from:
- **Supabase**: Project Settings → API
- **Environment Variables**: (set these yourself)

### 3. Start Development Server
```bash
pnpm dev
```

### 4. Access Admin Panel
- URL: `http://localhost:3000/admin`
- Password: `seavoregal-admin-2024` (or your custom password)
- Click Login

### 5. Add Your First Product
1. Click **Add Product**
2. Fill in the form:
   - Name: e.g., "White Shrimp"
   - Category: Select from dropdown
   - Image URL: Full URL (https://...)
   - Description: Product details
3. Click **Create Product**
4. Check the Products page - it appears instantly!

## Admin Panel URLs

- **Login**: `/admin`
- **Dashboard**: `/admin/dashboard` (after login)
- **Add Product**: `/admin/products/new`
- **Edit Product**: `/admin/products/[id]/edit`

## API Endpoints

- `POST /api/admin/login` - Login with password
- `GET /api/admin/products` - List all products (public)
- `POST /api/admin/products` - Create product (needs auth)
- `PUT /api/admin/products/[id]` - Update product (needs auth)
- `DELETE /api/admin/products/[id]` - Delete product (needs auth)

## Default Credentials

- **Admin Password**: `seavoregal-admin-2024`
- **Session Expiry**: 24 hours

⚠️ **Change these in production!**

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Login fails | Check `ADMIN_PASSWORD` in .env.local |
| Products not showing | Run migration SQL first |
| Images not loading | Verify full image URL (https://...) |
| Migration fails | Use Supabase dashboard SQL Editor |

## What's Stored in Database

Each product has:
- ID (auto-generated)
- Name, Category, Image URL
- Description
- Specifications (JSON - key/value pairs)
- Applications (JSON - array of strings)
- Certifications (JSON - array of strings)
- Created/Updated timestamps

## Features

✅ Add products  
✅ Edit products  
✅ Delete products  
✅ Password-protected  
✅ Secure cookies  
✅ 24-hour sessions  
✅ Real-time sync to website  

## Next Steps

1. Change admin password for production
2. Add all your products through the admin panel
3. Customize categories in `components/admin/product-form.tsx`
4. (Optional) Implement image upload feature
5. (Optional) Add more admin users

---

For full setup instructions, see `ADMIN_SETUP.md`
