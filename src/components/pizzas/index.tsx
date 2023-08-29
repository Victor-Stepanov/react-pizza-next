import { PizzaContainer } from "@/containers/pizza-container";
import { fetchPizzas } from "@/services";
import { IPizza } from "@/types";
import React from "react";
import styles from "./styles.module.scss";

export const Pizzas = async () => {
  const pizzas: IPizza[] = await fetchPizzas();
  return (
    <section className={styles.root}>
      <h2 className={styles.title}>Все пиццы</h2>
      <ul className={styles.pizzasItems}>
        {pizzas.map((pizza) => {
          return (
            <li key={pizza.id}>
              <PizzaContainer pizza={pizza} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};
