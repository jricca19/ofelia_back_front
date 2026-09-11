import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

import { createSupabaseServerClient } from "@/infrastructure/supabase/supabase-server";

export async function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  if (!pathname.startsWith("/admin")) {
    return NextResponse.next();
  }

  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error || !user) {
    const loginUrl = new URL("/admin/login", request.url);
    return NextResponse.redirect(loginUrl);
  }

  const { data: isAdmin, error: roleError } = await supabase.rpc("is_admin");

  if (roleError || isAdmin !== true) {
    const loginUrl = new URL("/admin/login", request.url);
    loginUrl.searchParams.set("error", "unauthorized");
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin", "/admin/:path*"],
};
