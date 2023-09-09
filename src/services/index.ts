import { IPizza } from "@/types";

export async function fetchPizzas() {
  const response = await fetch(
    "https://645fb28afe8d6fb29e246f69.mockapi.io/items",
    {
      next: { tags: ["config"] },
    }
  );
  const pizzas: IPizza[] = await response.json();

  return pizzas;
}
