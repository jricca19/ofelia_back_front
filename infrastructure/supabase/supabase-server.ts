import { cookies } from "next/headers";
import { createServerClient } from "@supabase/ssr";

const serverSupabaseUrl = process.env.SUPABASE_URL;
const serverSupabaseAnonKey = process.env.SUPABASE_ANON_KEY;

if (!serverSupabaseUrl || !serverSupabaseAnonKey) {
  throw new Error("Missing SUPABASE_URL or SUPABASE_ANON_KEY.");
}

const safeServerSupabaseUrl = serverSupabaseUrl;
const safeServerSupabaseAnonKey = serverSupabaseAnonKey;

export async function createSupabaseServerClient() {
  const cookieStore = await cookies();

  return createServerClient(safeServerSupabaseUrl, safeServerSupabaseAnonKey, {
    cookies: {
      getAll: async () =>
        cookieStore.getAll().map((cookie) => ({
          name: cookie.name,
          value: cookie.value,
        })),
      setAll: async (
        cookiesToSet: Array<{
          name: string;
          value: string;
          options?: Record<string, unknown>;
        }>,
      ) => {
        for (const { name, value, options } of cookiesToSet) {
          cookieStore.set(name, value, options);
        }
      },
    },
    auth: {
      persistSession: true,
      autoRefreshToken: true,
    },
  });
}
