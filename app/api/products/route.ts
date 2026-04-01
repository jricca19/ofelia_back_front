import { NextResponse } from "next/server";
import { getProducts } from "@/application/get-products";

export async function GET() {
  try {
    const products = await getProducts();
    return NextResponse.json(products);
  } catch (error: any) {
    return NextResponse.json(
      { error: error.message },
      { status: 500 }
    );
  }
}