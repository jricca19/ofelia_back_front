import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

const REVALIDATE_SECRET = process.env.REVALIDATE_SECRET_TOKEN;

async function handleRevalidate(request: NextRequest) {
  if (!REVALIDATE_SECRET) {
    return NextResponse.json(
      { success: false, message: "Missing REVALIDATE_SECRET_TOKEN." },
      { status: 500 }
    );
  }

  const token = request.headers.get("x-revalidate-token");
  if (!token || token !== REVALIDATE_SECRET) {
    return NextResponse.json({ success: false }, { status: 401 });
  }

  const path = request.nextUrl.searchParams.get("path");

  if (!path) {
    return NextResponse.json(
      { success: false, message: "Missing 'path'." },
      { status: 400 }
    );
  }

  revalidatePath(path);

  return NextResponse.json({ success: true, revalidated: { path } });
}

export async function POST(request: NextRequest) {
  return handleRevalidate(request);
}
