"use client";

import { FormEvent, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

import { createSupabaseBrowserClient } from "@/infrastructure/supabase/supabase-browser";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    let isMounted = true;

    async function redirectIfSessionExists() {
      const supabase = createSupabaseBrowserClient();
      const { data } = await supabase.auth.getSession();

      if (isMounted && data.session) {
        router.replace("/admin");
      }
    }

    void redirectIfSessionExists();

    return () => {
      isMounted = false;
    };
  }, [router]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const supabase = createSupabaseBrowserClient();
      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError || !data.session) {
        setError("Credenciales inválidas o el acceso no está disponible en este momento.");
        return;
      }

      router.push("/admin");
    } catch {
      setError("No se pudo iniciar la sesión. Inténtalo nuevamente.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f8e6c8] px-4 py-8 text-[#232323]">
      <div className="w-full max-w-md rounded-sm border border-[#e5d2bf] bg-[#fffaf2] p-8 shadow-[0_18px_35px_-24px_rgba(35,35,35,0.35)]">
        <div className="mb-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#9b787d]">
            Administración
          </p>
          <h1 className="mt-3 font-serif text-3xl text-[#232323]">Iniciar sesión</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#232323]">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              autoComplete="email"
              required
              className="w-full rounded-sm border border-[#d9c3ac] bg-white px-3 py-2.5 text-base outline-none transition focus:border-[#b87682]"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#232323]">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              autoComplete="current-password"
              required
              className="w-full rounded-sm border border-[#d9c3ac] bg-white px-3 py-2.5 text-base outline-none transition focus:border-[#b87682]"
            />
          </div>

          {error ? (
            <p className="rounded-sm border border-[#e7b4b6] bg-[#fff3f4] px-3 py-2 text-sm text-[#7a2b36]">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-sm border border-[#b87682] bg-[#b87682] px-4 py-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#f8e6c8] transition hover:bg-[#a66773] disabled:cursor-not-allowed disabled:opacity-70"
          >
            {isSubmitting ? "Iniciando sesión..." : "Iniciar sesión"}
          </button>
        </form>
      </div>
    </main>
  );
}
