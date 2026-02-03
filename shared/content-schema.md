# Database Schema for Content Management

This document describes the database tables needed for the content management system.
All tables should be created in Supabase and will be accessed via the Supabase client.

## Tables

### 1. article_categories
Stores article categories (thought-leadership, announcements, etc.)
- id (uuid, primary key)
- slug (text, unique) - e.g., "thought-leadership"
- name (text) - e.g., "Thought Leadership"
- icon_name (text) - Lucide icon name
- created_at (timestamp)
- updated_at (timestamp)

### 2. articles
Stores blog articles/blog posts
- id (uuid, primary key)
- category_id (uuid, foreign key to article_categories)
- title (text)
- excerpt (text)
- content (text) - HTML content
- author (text)
- author_role (text)
- publish_date (date)
- read_time (text) - e.g., "8 min read"
- image_url (text)
- featured (boolean, default false)
- published (boolean, default true)
- created_at (timestamp)
- updated_at (timestamp)
- order_index (integer, default 0)

### 3. platforms
Stores platform/project information
- id (uuid, primary key)
- slug (text, unique) - e.g., "hives", "fashnect"
- name (text)
- tagline (text)
- description (text)
- hero_image_url (text)
- image_url (text)
- color_gradient (text) - e.g., "from-blue-500/20 to-cyan-500/20"
- app_link (text)
- app_type (text) - "web" or "download"
- features (jsonb) - array of feature strings
- created_at (timestamp)
- updated_at (timestamp)
- order_index (integer, default 0)

### 4. platform_sections
Stores detailed sections for each platform
- id (uuid, primary key)
- platform_id (uuid, foreign key to platforms)
- title (text)
- content (text)
- icon_name (text) - Lucide icon name
- order_index (integer, default 0)
- created_at (timestamp)
- updated_at (timestamp)

### 5. team_members
Stores team member information
- id (uuid, primary key)
- name (text)
- role (text)
- bio (text)
- image_url (text)
- social_twitter (text, nullable)
- social_linkedin (text, nullable)
- social_github (text, nullable)
- created_at (timestamp)
- updated_at (timestamp)
- order_index (integer, default 0)

### 6. testimonials
Stores customer testimonials
- id (uuid, primary key)
- quote (text)
- author (text)
- role (text)
- avatar_initials (text) - e.g., "SC", "MT"
- created_at (timestamp)
- updated_at (timestamp)
- order_index (integer, default 0)

### 7. solutions
Stores solution categories
- id (uuid, primary key)
- slug (text, unique)
- title (text)
- description (text)
- icon_name (text) - Lucide icon name
- created_at (timestamp)
- updated_at (timestamp)
- order_index (integer, default 0)

### 8. bento_items
Stores bento grid service items
- id (uuid, primary key)
- title (text)
- description (text)
- icon_name (text) - Lucide icon name
- col_span (integer) - grid column span (1-3)
- row_span (integer) - grid row span (1-3)
- bg_class (text) - Tailwind background class
- color_class (text) - Tailwind color class
- created_at (timestamp)
- updated_at (timestamp)
- order_index (integer, default 0)

### 9. features
Stores feature items
- id (uuid, primary key)
- title (text)
- description (text)
- created_at (timestamp)
- updated_at (timestamp)
- order_index (integer, default 0)

## SQL to create tables in Supabase

Run these in Supabase SQL Editor:

```sql
-- Article Categories
CREATE TABLE article_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  icon_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Articles
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  category_id UUID REFERENCES article_categories(id),
  title TEXT NOT NULL,
  excerpt TEXT,
  content TEXT,
  author TEXT,
  author_role TEXT,
  publish_date DATE,
  read_time TEXT,
  image_url TEXT,
  featured BOOLEAN DEFAULT false,
  published BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Platforms
CREATE TABLE platforms (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  tagline TEXT,
  description TEXT,
  hero_image_url TEXT,
  image_url TEXT,
  color_gradient TEXT,
  app_link TEXT,
  app_type TEXT,
  features JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Platform Sections
CREATE TABLE platform_sections (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  platform_id UUID REFERENCES platforms(id) ON DELETE CASCADE,
  title TEXT NOT NULL,
  content TEXT,
  icon_name TEXT,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Team Members
CREATE TABLE team_members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  role TEXT,
  bio TEXT,
  image_url TEXT,
  social_twitter TEXT,
  social_linkedin TEXT,
  social_github TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Testimonials
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  quote TEXT NOT NULL,
  author TEXT NOT NULL,
  role TEXT,
  avatar_initials TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Solutions
CREATE TABLE solutions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  description TEXT,
  icon_name TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Bento Items
CREATE TABLE bento_items (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  icon_name TEXT,
  col_span INTEGER DEFAULT 1,
  row_span INTEGER DEFAULT 1,
  bg_class TEXT,
  color_class TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Features
CREATE TABLE features (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  order_index INTEGER DEFAULT 0
);

-- Create indexes for better performance
CREATE INDEX idx_articles_category ON articles(category_id);
CREATE INDEX idx_articles_published ON articles(published);
CREATE INDEX idx_articles_featured ON articles(featured);
CREATE INDEX idx_platform_sections_platform ON platform_sections(platform_id);
CREATE INDEX idx_articles_order ON articles(order_index);
CREATE INDEX idx_platforms_order ON platforms(order_index);
CREATE INDEX idx_team_members_order ON team_members(order_index);
CREATE INDEX idx_testimonials_order ON testimonials(order_index);
CREATE INDEX idx_solutions_order ON solutions(order_index);
CREATE INDEX idx_bento_items_order ON bento_items(order_index);
CREATE INDEX idx_features_order ON features(order_index);

-- Enable Row Level Security (RLS) - allow public read access
ALTER TABLE article_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE platforms ENABLE ROW LEVEL SECURITY;
ALTER TABLE platform_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE solutions ENABLE ROW LEVEL SECURITY;
ALTER TABLE bento_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE features ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Public read access" ON article_categories FOR SELECT USING (true);
CREATE POLICY "Public read access" ON articles FOR SELECT USING (published = true);
CREATE POLICY "Public read access" ON platforms FOR SELECT USING (true);
CREATE POLICY "Public read access" ON platform_sections FOR SELECT USING (true);
CREATE POLICY "Public read access" ON team_members FOR SELECT USING (true);
CREATE POLICY "Public read access" ON testimonials FOR SELECT USING (true);
CREATE POLICY "Public read access" ON solutions FOR SELECT USING (true);
CREATE POLICY "Public read access" ON bento_items FOR SELECT USING (true);
CREATE POLICY "Public read access" ON features FOR SELECT USING (true);
```
