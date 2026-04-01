import { productRepository } from "@/infrastructure/product-repository";
import { Product } from "@/domain/product";
import { ProductRow } from "@/types/product";

function mapToDomain(row: ProductRow): Product {
  return {
    ...row,
    status: row.status as Product["status"],
    description: row.description ?? undefined,
  };
}

export async function getProducts(): Promise<Product[]> {
  const rows = await productRepository.findAll();
  return rows.map(mapToDomain);
}