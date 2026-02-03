# Database Setup Instructions

## Overview

Your website content is now connected to Supabase, allowing you to edit everything directly from the Supabase dashboard. Changes will reflect immediately on your website (within 5 minutes due to caching).

## Step 1: Run the SQL Schema

1. Go to your Supabase project dashboard
2. Navigate to **SQL Editor**
3. Open the file `supabase-schema.sql` in this project
4. Copy and paste the entire SQL into the SQL Editor
5. Click **Run** to create all tables

This will create the following tables:
- `article_categories` - Article categories
- `articles` - Blog articles/blog posts
- `platforms` - Platform/project information
- `platform_sections` - Detailed sections for each platform
- `team_members` - Team member information
- `testimonials` - Customer testimonials
- `solutions` - Solution categories
- `bento_items` - Bento grid service items
- `features` - Feature items

## Step 2: Add Your Content

After creating the tables, you can add content directly in the Supabase dashboard:

1. Go to **Table Editor** in Supabase
2. Select each table and click **Insert** to add rows
3. Fill in all the fields

### Important Notes:

- **Icons**: Use icon names from Lucide React (e.g., "BookOpen", "HomeIcon", "ShoppingBag", "Zap", "Shield", etc.)
- **Features (for platforms)**: Enter as a JSON array like: `["Virtual Tours", "Smart Valuation", "Asset Tracking"]`
- **Order Index**: Use numbers to control the display order (lower numbers appear first)
- **Published (for articles)**: Set to `true` to make articles visible
- **Featured (for articles)**: Set to `true` to feature an article

## Step 3: Test Your Site

1. Start your development server: `npm run dev`
2. Visit your pages to see the content from Supabase
3. Make changes in the Supabase dashboard
4. Refresh your website to see the changes (within 5 minutes due to caching)

## Current Status

### ✅ Completed Pages:
- Articles listing page (`/cases`)
- Article detail page (`/insights/:id`)

### 🔄 Still Using Hardcoded Data:
- Platforms page (`/stack`)
- Platform detail page (`/solutions/:slug`)
- Team page (`/team`)
- Solutions page (`/solutions`)
- Home page components (testimonials, bento grid, features, project showcase)

These will be updated to use the database next.

## Data Migration

To migrate your existing hardcoded content:

1. **Articles**: Copy data from `client/src/pages/cases.tsx` and `article-detail.tsx` into the `articles` table
2. **Platforms**: Copy data from `client/src/pages/stack.tsx` and `solution-detail.tsx` into the `platforms` table
3. **Team**: Copy data from `client/src/pages/team.tsx` into the `team_members` table
4. **Testimonials**: Copy data from `client/src/components/testimonials.tsx` into the `testimonials` table
5. **Solutions**: Copy data from `client/src/pages/solutions.tsx` into the `solutions` table
6. **Bento Items**: Copy data from `client/src/components/bento-grid.tsx` into the `bento_items` table
7. **Features**: Copy data from `client/src/components/features.tsx` into the `features` table

## Support

If you encounter any issues:
1. Check that your `.env` file has the correct Supabase credentials
2. Verify that all tables were created successfully
3. Check the browser console for any errors
4. Ensure Row Level Security (RLS) policies are set correctly (they should allow public read access)
