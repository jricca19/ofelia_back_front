import { HomePage } from "@/components/home/home-page";
import { getProducts } from "@/application/get-products";

export const revalidate = 3600;

export default async function Home() {
  const products = await getProducts({ throwOnError: false });
  return <HomePage products={products} />;
}
