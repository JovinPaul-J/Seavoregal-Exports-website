# Admin Panel - User Flow & Architecture Diagram

## User Journey Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    ADMIN PANEL USER FLOW                     │
└─────────────────────────────────────────────────────────────┘

┌──────────────┐
│ Visit /admin │
└──────┬───────┘
       │
       ▼
┌──────────────────────────┐
│  Login Page (/admin)     │
│  - Enter Password        │
│  - Click "Login"         │
└──────┬───────────────────┘
       │
       ▼
┌──────────────────────────┐
│ Validate Password        │
│ /api/admin/login (POST)  │
└──────┬───────────────────┘
       │
       ├─ Valid ──────────────┐
       │                      │
       │              ┌───────▼──────┐
       │              │ Set Secure   │
       │              │ Cookie Token │
       │              └───────┬──────┘
       │                      │
       │              ┌───────▼──────────────────┐
       │              │ Redirect to /admin/      │
       │              │ dashboard                │
       │              └───────┬──────────────────┘
       │                      │
       │              ┌───────▼──────────────────┐
       │              │ Dashboard               │
       │              │ - List Products         │
       │              │ - Add Product button    │
       │              │ - Edit/Delete buttons   │
       │              │ - Logout button         │
       │              └───────┬──────────────────┘
       │                      │
       │        ┌─────────────┼─────────────┐
       │        │             │             │
       │        ▼             ▼             ▼
       │     ┌────┐      ┌────────┐   ┌────────┐
       │     │ADD │      │ EDIT   │   │DELETE  │
       │     └────┘      └────────┘   └────────┘
       │
       └─ Invalid ───────┐
                         │
                    ┌────▼──────┐
                    │ Error Msg │
                    │ Retry     │
                    └───────────┘
```

## System Architecture

```
┌──────────────────────────────────────────────────────────────────┐
│                     NEXT.JS APPLICATION                           │
├──────────────────────────────────────────────────────────────────┤
│                                                                    │
│  ┌──────────────────┐              ┌──────────────────────────┐  │
│  │   Browser/UI     │              │   Next.js Backend        │  │
│  ├──────────────────┤              ├──────────────────────────┤  │
│  │                  │              │                          │  │
│  │ Admin Pages:     │──────────────│ API Routes:              │  │
│  │ - Login Form     │  HTTP        │ - /api/admin/login       │  │
│  │ - Dashboard      │  Requests    │ - /api/admin/products    │  │
│  │ - Product Form   │              │ - /api/admin/products/id │  │
│  │                  │◄─────────────│                          │  │
│  │ Components:      │  JSON Resp   │ Utilities:               │  │
│  │ - LoginForm      │              │ - lib/admin/auth.ts      │  │
│  │ - ProductsList   │              │ - lib/supabase/server.ts │  │
│  │ - ProductForm    │              │                          │  │
│  │                  │              │                          │  │
│  └──────────────────┘              └──────────────┬───────────┘  │
│                                                    │               │
└────────────────────────────────────────────────────┼───────────────┘
                                                     │
                                    ┌────────────────▼────────────┐
                                    │  SUPABASE                   │
                                    ├─────────────────────────────┤
                                    │                             │
                                    │ PostgreSQL Database         │
                                    │ ┌─────────────────────────┐ │
                                    │ │  products table         │ │
                                    │ ├─────────────────────────┤ │
                                    │ │ - id (UUID)             │ │
                                    │ │ - name                  │ │
                                    │ │ - category              │ │
                                    │ │ - image URL             │ │
                                    │ │ - description           │ │
                                    │ │ - specifications (JSON) │ │
                                    │ │ - applications (JSON)   │ │
                                    │ │ - certifications (JSON) │ │
                                    │ │ - created_at            │ │
                                    │ │ - updated_at            │ │
                                    │ └─────────────────────────┘ │
                                    │                             │
                                    └─────────────────────────────┘
```

## Authentication Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  AUTHENTICATION FLOW                         │
└─────────────────────────────────────────────────────────────┘

1. USER SUBMITS PASSWORD
   ┌──────────────────────┐
   │ Admin Password Input │
   │ Submit via POST      │
   └──────────┬───────────┘
              │
              ▼
   ┌──────────────────────────────────┐
   │ /api/admin/login (POST Handler)  │
   └──────────┬───────────────────────┘
              │
              ▼
   ┌──────────────────────────────────┐
   │ validateAdminPassword(password)  │
   │ Compares with ADMIN_PASSWORD env │
   └──────────┬───────────────────────┘
              │
       ┌──────┴──────┐
       │             │
    VALID         INVALID
       │             │
       ▼             ▼
   ┌────────┐   ┌─────────────┐
   │Create  │   │Return Error │
   │Token   │   │401 Response │
   └───┬────┘   └─────────────┘
       │
       ▼
   ┌────────────────────────────┐
   │ Set HTTP-Only Cookie       │
   │ - Name: admin_token        │
   │ - Value: 64-char token     │
   │ - Secure: true (prod)      │
   │ - SameSite: lax            │
   │ - MaxAge: 24 hours         │
   └───┬─────────────────────────┘
       │
       ▼
   ┌────────────────────────────┐
   │ Return Success Response    │
   │ Redirect to /admin/        │
   │ dashboard                  │
   └────────────────────────────┘


2. ACCESSING PROTECTED ROUTES
   ┌──────────────────────────────────┐
   │ User clicks "Edit" or "Delete"   │
   └──────────┬───────────────────────┘
              │
              ▼
   ┌──────────────────────────────────┐
   │ Browser sends request with       │
   │ Cookie: admin_token=XXXXX        │
   └──────────┬───────────────────────┘
              │
              ▼
   ┌──────────────────────────────────┐
   │ API Handler checks:              │
   │ verifyAdminToken(request)        │
   └──────────┬───────────────────────┘
              │
       ┌──────┴──────────┐
       │                 │
    VALID             INVALID
       │                 │
       ▼                 ▼
   ┌─────────┐     ┌──────────────┐
   │Process  │     │Return Error  │
   │Request  │     │401 Response  │
   └─────────┘     └──────────────┘
```

## CRUD Operations Flow

```
┌──────────────────────────────────────────────────────────────┐
│                    CRUD OPERATIONS                            │
└──────────────────────────────────────────────────────────────┘

CREATE (Add Product)
───────────────────
User Form ──┐
            ├──> POST /api/admin/products ──> Database ──┐
Validations ┘                                             ├──> Update Dashboard
                                                          └──> Sync to Website

READ (List Products)
────────────────────
Dashboard Load ──> GET /api/admin/products ──> Supabase ──> Display Products
Website Load   ──> GET /api/admin/products ──> Supabase ──> Display on Site

UPDATE (Edit Product)
─────────────────────
Edit Form ──┐
            ├──> PUT /api/admin/products/[id] ──> Database ──┐
Validations ┘                                                 ├──> Update Dashboard
                                                              └──> Sync to Website

DELETE (Remove Product)
──────────────────────
Delete Click ──┐
              ├──> DELETE /api/admin/products/[id] ──> Database ──┐
Confirmation ┘                                                    ├──> Remove from Dashboard
                                                                  └──> Remove from Website
```

## Real-Time Sync Mechanism

```
┌──────────────────────────────────────────────────────────────┐
│              PRODUCT SYNC TO WEBSITE                          │
└──────────────────────────────────────────────────────────────┘

ADMIN DASHBOARD                     PUBLIC WEBSITE
──────────────                     ──────────────

Add Product ─────┐
                 │
                 ▼
         ┌──────────────┐
         │   Database   │
         │  products    │
         │    table     │
         └──────┬───────┘
                │
                ├──> Auto Cache Invalidation
                │
                ▼
         ┌──────────────────┐
         │ Products Page    │
         │ (/products)      │
         │ Fetches latest   │
         │ from database    │
         └──────────────────┘

Edit Product ───┐
                 │
                 ▼
         ┌──────────────┐
         │   Database   │
         │  products    │
         │    table     │
         └──────┬───────┘
                │
                ├──> Auto Cache Invalidation
                │
                ▼
         ┌──────────────────┐
         │ Product Detail   │
         │ Page ([id])      │
         │ Fetches latest   │
         └──────────────────┘

Delete Product──┐
                 │
                 ▼
         ┌──────────────┐
         │   Database   │
         │  products    │
         │    table     │
         └──────┬───────┘
                │
                ├──> Product removed
                │
                ▼
         ┌──────────────────┐
         │ Products Page    │
         │ No longer shows  │
         │ deleted product  │
         └──────────────────┘
```

## Session Management

```
┌──────────────────────────────────────────────────────────────┐
│              SESSION LIFECYCLE                                │
└──────────────────────────────────────────────────────────────┘

LOGIN
 │
 ├─> Generate Token (64-char hex)
 │
 ├─> Set HTTP-Only Cookie
 │   - admin_token=XXXXX
 │   - 24 hour expiration
 │   - Secure & SameSite
 │
 └─> Redirect to /admin/dashboard


ACTIVE SESSION
 │
 ├─> Cookie sent with every request
 │
 ├─> API validates token
 │
 ├─> Grant access to:
 │   - POST /api/admin/products
 │   - PUT /api/admin/products/[id]
 │   - DELETE /api/admin/products/[id]
 │
 └─> Session maintained for 24 hours


LOGOUT / EXPIRATION
 │
 ├─> User clicks "Logout"
 │   OR 24 hours elapsed
 │
 ├─> Clear admin_token cookie
 │
 ├─> Redirect to /admin
 │
 └─> Requires login again


EXPIRED COOKIE
 │
 ├─> User tries /admin/dashboard
 │
 ├─> No valid admin_token
 │
 ├─> Redirect to /admin
 │
 └─> Must login again
```

## File Organization

```
admin-panel/
│
├── Authentication
│   └── lib/admin/auth.ts ──────────── Password validation & token gen
│
├── Database
│   ├── lib/supabase/server.ts ────── Supabase client & queries
│   └── scripts/
│       ├── 01-create-products-table.sql ─ Database schema
│       └── run-migration.js ──────────── Migration runner
│
├── API Routes
│   └── app/api/admin/
│       ├── login/route.ts ──────────── Auth endpoint
│       └── products/
│           ├── route.ts ───────────── CRUD endpoint
│           └── [id]/route.ts ──────── Single product
│
├── Pages
│   └── app/admin/
│       ├── page.tsx ───────────────── Login page
│       ├── dashboard/page.tsx ──────── Dashboard
│       └── products/
│           ├── new/page.tsx ──────── Add product
│           └── [id]/edit/page.tsx ── Edit product
│
├── Components
│   └── components/admin/
│       ├── login-form.tsx ────────── Login UI
│       ├── product-form.tsx ──────── Product form
│       └── products-list.tsx ──────── Dashboard list
│
└── Documentation
    ├── ADMIN_QUICK_START.md ──────── 5-min setup
    ├── ADMIN_SETUP.md ───────────── Full guide
    ├── ADMIN_CHECKLIST.md ──────────  Verification
    ├── ADMIN_FEATURES.md ─────────── Features
    └── ADMIN_FLOW.md ──────────────  This file
```

---

This flow ensures secure, real-time product management with database persistence!
