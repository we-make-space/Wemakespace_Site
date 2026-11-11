# Migration to Next.js 15 - Complete

The Wemakespace app has been migrated from React+Vite+Express to Next.js 15 with App Router.

## Changes Made

### Structure
- **app/** - Next.js App Router with `layout.tsx`, `page.tsx` for each route
- **src/components/** - Shared components (moved from client/src/components)
- **src/lib/** - Utilities (supabase, content, og-images, utils, icons, queryClient)
- **src/hooks/** - use-content, useBackNavigation, use-mobile, use-toast
- **public/** - Static assets (images, favicon, og-images)

### Routes
| Route | File | Notes |
|-------|------|-------|
| `/` | app/page.tsx | Home |
| `/stack` | app/stack/page.tsx | Platforms |
| `/solutions` | app/solutions/page.tsx | Services |
| `/solutions/[slug]` | app/solutions/[slug]/page.tsx | Solution detail |
| `/vision` | app/vision/page.tsx | Vision & leadership |
| `/cases` | app/cases/page.tsx | Blog/insights |
| `/insights/[id]` | app/insights/[id]/page.tsx | Article detail |
| `/event` | app/event/page.tsx | Event details |
| `/privacy` | app/privacy/page.tsx | Privacy policy |
| `/terms` | app/terms/page.tsx | Terms of service |
| `/contact` | app/contact/page.tsx | Contact |
| 404 | app/not-found.tsx | Not found |

### Environment Variables
Rename in `.env`:
- `VITE_SUPABASE_URL` → `NEXT_PUBLIC_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY` → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `VITE_SITE_URL` → `NEXT_PUBLIC_SITE_URL`

### Removed
- Vite, Express, wouter
- server/ directory (Express backend)
- client/ directory (replaced by src/)

### Preserved
- Supabase CMS integration
- TanStack Query
- Framer Motion
- Tailwind CSS v4
- Radix UI components
- All page functionality

## Running the App

```bash
# Install dependencies (if not done)
npm install

# Development
npm run dev

# Build
npm run build

# Production
npm start
```

## Notes
- Add `.env.local` with `NEXT_PUBLIC_*` vars for Supabase
- Copy `attached_assets` images to `public/images/` if not already done
- The old `client/`, `server/`, `vite.config.ts` can be removed after verification
