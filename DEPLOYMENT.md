# Deployment Guide — Hostinger & Vercel

Your Wemakespace site is a **static React SPA** that fetches content from Supabase. No backend server is required for the live site.

## Quick Summary

| Platform | Best For | Build | Deploy |
|----------|----------|-------|--------|
| **Vercel** | Easiest, free, fast | `npm run build:client` | Connect GitHub → Deploy |
| **Hostinger** (static) | Low cost, shared hosting | Same | Upload `dist/public` via FTP |
| **Hostinger** (VPS) | Full Node.js server | `npm run build` | SSH + PM2 |

---

## Option A: Vercel (Recommended — Easiest)

Vercel is free, fast, and ideal for React apps.

### Step 1: Prepare Your Repo

1. **Push your code to GitHub** (if not already):
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Add a build script** for Vercel (client-only build):
   - Already supported: `npm run build` builds the client into `dist/public`

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in (use GitHub).
2. Click **Add New** → **Project**.
3. **Import** your GitHub repo (`we-make-space/Wemakespace_Site`).
4. Configure:
   - **Framework Preset:** Vite
   - **Root Directory:** `./` (leave default)
   - **Build Command:** `npm run build:client` or `npx vite build`
   - **Output Directory:** `dist/public`
   - **Install Command:** `npm install`

5. **Enable Analytics** (recommended): In your project on Vercel → **Analytics** tab → enable **Web Analytics** and **Speed Insights**. Data appears after deployment once visitors arrive.

6. **Environment Variables** (click "Environment Variables" and add):
   | Name | Value |
   |------|-------|
   | `VITE_SUPABASE_URL` | Your Supabase project URL |
   | `VITE_SUPABASE_ANON_KEY` | Your Supabase anon key |
   | `VITE_SITE_URL` | `https://your-vercel-domain.vercel.app` (or your custom domain) |

7. Click **Deploy**.

### Step 3: Custom Domain (Optional)

- In the Vercel project, go to **Settings** → **Domains**.
- Add `wemakespace.org` (or your domain).
- Update DNS as instructed (add the CNAME or A record Vercel gives you).

---

## Option B: Hostinger

### Option B1: Hostinger Static Web Hosting

If you have **Web Hosting** or **Cloud Hosting**:

1. **Build locally:**
   ```bash
   npm install
   npx vite build
   ```

2. **Upload the contents of `dist/public`** to your hosting:
   - Use File Manager or FTP (e.g. FileZilla).
   - Upload everything inside `dist/public` to `public_html` (or your root web folder).

3. **Configure SPA routing** (so `/contact` etc. work):
   - Create or edit `.htaccess` in `public_html`:
   ```apache
   <IfModule mod_rewrite.c>
     RewriteEngine On
     RewriteBase /
     RewriteRule ^index\.html$ - [L]
     RewriteCond %{REQUEST_FILENAME} !-f
     RewriteCond %{REQUEST_FILENAME} !-d
     RewriteRule . /index.html [L]
   </IfModule>
   ```

4. **Environment variables:**  
   Your app uses `VITE_*` vars, which are baked in at build time. Set them **before** building:
   ```bash
   export VITE_SUPABASE_URL="your_supabase_url"
   export VITE_SUPABASE_ANON_KEY="your_anon_key"
   export VITE_SITE_URL="https://wemakespace.org"
   npx vite build
   ```
   Then upload the new `dist/public` folder.

### Option B2: Hostinger VPS (Node.js)

If you need the full Express server (e.g. for future API routes):

1. **Connect via SSH** to your VPS.
2. **Install Node.js 20+:**
   ```bash
   curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
   sudo apt-get install -y nodejs
   ```
3. **Clone and build:**
   ```bash
   git clone https://github.com/we-make-space/Wemakespace_Site.git
   cd Wemakespace_Site
   npm install
   npm run build
   ```
4. **Set environment variables** (create `.env`):
   ```env
   VITE_SUPABASE_URL=your_supabase_url
   VITE_SUPABASE_ANON_KEY=your_anon_key
   VITE_SITE_URL=https://your-domain.com
   PORT=5000
   ```
5. **Run with PM2** (process manager):
   ```bash
   npm install -g pm2
   pm2 start dist/index.cjs --name wemakespace
   pm2 save
   pm2 startup
   ```
6. **Configure Nginx** as reverse proxy to `localhost:5000` (optional but recommended).

---

## Option C: Vercel + Hostinger Together

- **Vercel:** Host the site (recommended).
- **Hostinger:** Use for domain and email.
  - Point your domain to Vercel (CNAME or A record).
  - Use Hostinger for email (e.g. `wemakespace1@gmail.com` → custom domain email).

---

## Sitemap & SEO

`sitemap.xml` and `robots.txt` are generated at build time via `vite-plugin-sitemap`. They include:
- All static pages (/, /stack, /solutions, /vision, /cases, /event, /privacy, /terms, /contact)
- Dynamic routes from Supabase: `/solutions/:slug`, `/insights/:id` (when env vars are set)

Ensure `VITE_SITE_URL`, `VITE_SUPABASE_URL`, and `VITE_SUPABASE_ANON_KEY` are set at build time for full sitemap coverage.

---

## Versioning

The site version is managed in `package.json` and shown in the footer. To release a new version:

1. **Bump version** in `package.json` (e.g. `1.0.0` → `1.1.0`)
2. **Tag the release** (optional): `git tag v1.0.0 && git push origin v1.0.0`
3. **Rebuild and deploy** — the new version will appear in the footer

---

## Checklist Before Going Live

- [ ] Supabase project is set up and content is in the database
- [ ] `.env` or Vercel env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`, `VITE_SITE_URL`
- [ ] `VITE_SITE_URL` matches your live URL (for OG images)
- [ ] Run `npx vite build` successfully locally
- [ ] Test the built site: `npx serve dist/public` and open `http://localhost:3000`

---

## Troubleshooting

| Issue | Solution |
|-------|----------|
| Blank page | Check browser console; confirm Supabase env vars are set |
| 404 on routes like `/contact` | Add SPA rewrite rules (`.htaccess` or Vercel rewrites) |
| OG images not loading | Ensure `VITE_SITE_URL` is your live URL |
| Supabase CORS errors | In Supabase Dashboard → Settings → API, add your domain to allowed origins |
