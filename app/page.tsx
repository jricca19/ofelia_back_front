import { HomePage } from "@/components/home/home-page";
import { getProducts } from "@/application/get-products";

export default async function Home() {
  const products = await getProducts();
  return <HomePage products={products} />;
}
