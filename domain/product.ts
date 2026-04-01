export type ProductStatus = "DRAFT" | "PUBLISHED" | "SOLD";

export interface Product {
  id: string;
  title: string;
  description?: string;
  price: number;
  currency: string;
  status: ProductStatus;
  attributes: Record<string, any>;
  created_at: string;
  updated_at: string;
}