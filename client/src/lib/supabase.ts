import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing env.VITE_SUPABASE_URL");
}

if (!supabaseAnonKey) {
  throw new Error("Missing env.VITE_SUPABASE_ANON_KEY");
}

/**
 * Browser-side Supabase client for use in React components.
 * This client is safe to use in client components as it uses the anon key.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
