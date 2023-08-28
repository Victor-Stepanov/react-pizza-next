import { fetchPizzas } from "@/services";

export default async function Home() {
  const pizzas = await fetchPizzas();
  console.log(pizzas);
  return <div>Home</div>;
}
