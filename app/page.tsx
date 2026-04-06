import { OfeliaHome } from "@/app/components/ofelia-home";
import { getProducts } from "@/application/get-products";

export default async function Home() {
  const products = await getProducts();
  return <OfeliaHome products={products} />;
}
