import { productRepository } from "@/infrastructure/product-repository";
import { isProductStatus, Product } from "@/domain/product";
import { ProductRow } from "@/types/product";

function parseStatus(value: string): Product["status"] {
  if (isProductStatus(value)) {
    return value;
  }

  throw new Error(`Invalid product status: ${value}`);
}

function mapToDomain(row: ProductRow): Product {
  return {
    ...row,
    status: parseStatus(row.status),
    cover_image_url: row.cover_image_url ?? undefined,
    description: row.description ?? undefined,
  };
}

export async function getProducts(): Promise<Product[]> {
  const rows = await productRepository.findAll();
  return rows.map(mapToDomain);
}