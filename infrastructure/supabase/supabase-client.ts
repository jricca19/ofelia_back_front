import { createClient } from "@supabase/supabase-js";

export function getSupabaseUrl(): string {
  const value = process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL;
  if (!value) {
    throw new Error("Missing SUPABASE_URL or NEXT_PUBLIC_SUPABASE_URL.");
  }
  return value;
}

export function getSupabaseAnonKey(): string {
  const value = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY;
  if (!value) {
    throw new Error("Missing SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_ANON_KEY.");
  }
  return value;
}

export const supabaseUrl =
  process.env.NEXT_PUBLIC_SUPABASE_URL ?? process.env.SUPABASE_URL ?? "";
export const supabaseAnonKey =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? process.env.SUPABASE_ANON_KEY ?? "";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
