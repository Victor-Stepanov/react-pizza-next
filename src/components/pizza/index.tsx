import { IPizza } from "@/types";
import React from "react";
import styles from "./styles.module.scss";
import { Counter } from "@/ui/components/counter";
import { Selector } from "@/ui/components/selector";

interface PizzaProps {
  amount: number;
  increment: () => void;
  decrement: () => void;
  pizza: IPizza;
}

export const Pizza: React.FC<PizzaProps> = ({
  pizza,
  amount,
  increment,
  decrement,
}) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img className={styles.image} src={pizza.image} alt="Фото пиццы" />
        <h4 className={styles.title}>{pizza.title}</h4>
        <Selector />
        <div className={styles.details}>
          <span className={styles.price}>{`от ${pizza.price}`}</span>
          <Counter
            increment={increment}
            decrement={decrement}
            amount={amount}
            viewVariant="primary"
          />
        </div>
      </div>
    </div>
  );
};
