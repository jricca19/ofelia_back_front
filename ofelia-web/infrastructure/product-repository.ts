import { supabase } from "@/lib/supabase";
import { ProductRow } from "@/types/product";

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