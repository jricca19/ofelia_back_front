import { createBrowserClient } from "@supabase/ssr";

const browserSupabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const browserSupabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

if (!browserSupabaseUrl || !browserSupabaseAnonKey) {
  throw new Error("Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
}

const safeBrowserSupabaseUrl = browserSupabaseUrl;
const safeBrowserSupabaseAnonKey = browserSupabaseAnonKey;

export function createSupabaseBrowserClient() {
  return createBrowserClient(safeBrowserSupabaseUrl, safeBrowserSupabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  });
}
