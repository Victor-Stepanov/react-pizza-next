import { PizzaContainer } from "@/containers/pizza-container";
import { fetchPizzas } from "@/services";
import { IPizza } from "@/types";
import React from "react";
import styles from "./styles.module.scss";
import { Categories } from "../categories";
import { Sort } from "@/ui/components/sort";

export const Pizzas = async () => {
  const pizzas: IPizza[] = await fetchPizzas();
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <Categories />
        <Sort />
      </div>
      <h2 className={styles.title}>Все пиццы</h2>
      <ul className={styles.pizzaItems}>
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
