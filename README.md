# Wemakespace

> **Making room for you.** — A next-gen software company building digital products for people, platforms, and the future.

[![Live Site](https://img.shields.io/badge/website-wemakespace.org-FF5E36?style=for-the-badge&logo=googlechrome&logoColor=white)](https://wemakespace.org)

---

## About

Wemakespace is a tech company based in Sunyani, Ghana, building innovative solutions across **Web**, **Mobile**, **AI**, and **Web3**. We specialize in engineering high-performance digital ecosystems—for companies, individuals, and our own flagship platforms.

**We build what's next.**

---

## Features

- **Modern, responsive design** — Built with Tailwind CSS and Framer Motion
- **Dark/Light theme** — System preference support with smooth transitions
- **Supabase-powered CMS** — Dynamic content for articles, platforms, team, testimonials
- **SEO optimized** — Meta tags, Open Graph, and structured data
- **Smooth animations** — Polished interactions and micro-animations

### Pages

| Page | Route | Description |
|------|-------|-------------|
| Home | `/` | Hero, project showcase, services, testimonials |
| Platforms | `/stack` | Flagship products (Fashnect, Hives) |
| Services | `/solutions` | Web, Mobile, AI, Training, Advisory, Cloud, Security |
| Blog | `/cases` | Articles and insights |
| Vision | `/vision` | Company values and leadership |
| Contact | `/contact` | Company info and get in touch |
| Privacy & Terms | `/privacy`, `/terms` | Legal pages |

---

## Tech Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Build** | Vite 7 |
| **Styling** | Tailwind CSS 4 |
| **Animations** | Framer Motion |
| **Routing** | Wouter |
| **Data** | TanStack Query, Supabase |
| **UI** | Radix UI, shadcn/ui components |
| **Backend** | Express, Node.js |

---

## Getting Started.

### Prerequisites

- **Node.js** 20+ (see `.nvmrc`)
- **npm** or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/we-make-space/Wemakespace_Site.git
cd Wemakespace_Site

# Install dependencies
npm install
```

### Environment Variables

Create a `.env` file in the project root:

```env
# Supabase (for CMS content)
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Site URL (for OG image absolute URLs when sharing links)
VITE_SITE_URL=https://wemakespace.org
```

### Run Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:5000` (client) with the Express server proxying API requests.

### Build for Production

```bash
npm run build
npm start
```

---

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for steps to deploy on **Vercel** or **Hostinger**.

---

## Project Structure

```
├── client/                 # React frontend
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Route pages
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities, content fetching
│   │   └── assets/         # Static assets
│   └── index.html
├── server/                 # Express API server
│   ├── index.ts
│   ├── routes.ts
│   └── lib/
├── shared/                  # Shared types & schema
├── supabase-schema.sql      # Database schema
└── SETUP_INSTRUCTIONS.md   # Database setup guide
```

---

## Per-Page SEO Images

Each page has its own Open Graph image for link previews. When someone shares a URL (e.g. `/contact`), the preview image will be unique to that page.

- Add images to `client/public/og-images/` (recommended size: 1200×630px)
- See `client/public/og-images/README.md` for the file naming convention
- Until custom images are added, `opengraph.jpg` is used as fallback

---

## Database Setup

Content (articles, platforms, team, testimonials) is managed via **Supabase**. To set up:

1. Create a Supabase project
2. Run `supabase-schema.sql` in the SQL Editor
3. Add your credentials to `.env`
4. Populate tables via the Supabase dashboard

See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for detailed steps.

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (Express + Vite) |
| `npm run build` | Build for production |
| `npm start` | Run production server |
| `npm run check` | TypeScript check |

---

## License

MIT

---

**Wemakespace** — *Making room for you.* 🧡
