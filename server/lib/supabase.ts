import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!supabaseUrl) {
  throw new Error("Missing env.SUPABASE_URL");
}

if (!supabaseAnonKey) {
  throw new Error("Missing env.SUPABASE_ANON_KEY");
}

/**
 * Server-side Supabase client for use in server-side code.
 * This client uses the anon key and is suitable for server-side operations.
 */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
