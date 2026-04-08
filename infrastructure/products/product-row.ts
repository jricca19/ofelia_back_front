export interface ProductRow {
  id: string;
  title: string;
  description: string | null;
  price: number;
  currency: string;
  status: string;
  cover_image_url: string | null;
  attributes: Record<string, unknown>;
  created_at: string;
  updated_at: string;
}