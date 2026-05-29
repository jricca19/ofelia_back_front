import { HomePage } from "@/components/home/home-page";
import { getProducts } from "@/application/get-products";

export const revalidate = 3600;

export default async function Home() {
  try {
    const products = await getProducts();
    return <HomePage products={products} />;
  } catch (error) {
    console.error("Failed to load products.", error);
    return <HomePage products={[]} />;
  }
}
