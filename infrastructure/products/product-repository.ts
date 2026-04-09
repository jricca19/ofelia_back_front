import { supabase } from "@/infrastructure/supabase/supabase-client";
import { ProductRow } from "@/infrastructure/products/product-row";

export const productRepository = {
  async findAll(): Promise<ProductRow[]> {
    const { data, error } = await supabase
      .from("products")
      .select("*")
      .eq("status", "PUBLISHED");

    if (error) {
      throw new Error(error.message);
    }

    return data;
  },
};