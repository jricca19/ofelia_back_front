export interface ProductRow {
  id: string;
  title: string;
  description: string | null;
  price: number;
  currency: string;
  status: string;
  attributes: any;
  created_at: string;
  updated_at: string;
}