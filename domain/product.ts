export const PRODUCT_STATUSES = ["DRAFT", "PUBLISHED", "SOLD"] as const;

export type ProductStatus = (typeof PRODUCT_STATUSES)[number];

export function isProductStatus(value: string): value is ProductStatus {
  return (PRODUCT_STATUSES as readonly string[]).includes(value);
}

export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  currency: string;
  status: ProductStatus;
  cover_image_url?: string;
  attributes: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}