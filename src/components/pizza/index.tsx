import { IPizza, SelectorCategory } from "@/types";
import React from "react";
import styles from "./styles.module.scss";
import { Counter } from "@/ui/components/counter";
import { SelectorContainer } from "@/containers/selector-container";
import { Button } from "@/ui/buttons/button";
import { PlusIcon } from "@/ui/icons/counter/plus-icon";

interface PizzaProps {
  amount: number;
  increment: () => void;
  pizza: IPizza;
}

export const Pizza: React.FC<PizzaProps> = ({ pizza, amount, increment }) => {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <img className={styles.image} src={pizza.image} alt="Фото пиццы" />
        <h4 className={styles.title}>{pizza.title}</h4>
        <div className={styles.selectors}>
          <SelectorContainer
            selectorCategory={SelectorCategory.Types}
            className={styles.selectorItems}
            data={pizza.types}
          />
          <SelectorContainer
            selectorCategory={SelectorCategory.Size}
            className={styles.selectorItems}
            data={pizza.sizes}
          />
        </div>
        <div className={styles.details}>
          <span className={styles.price}>{`от ${pizza.price}`}</span>
          <Button
            disabled={amount === 10}
            className={styles.button}
            onClick={increment}
            viewVariant="primary"
          >
            <PlusIcon />
            <span>Добавить</span>
            <span className={amount > 0 ? styles.marker : ""}>
              {amount > 0 ? amount : null}
            </span>
          </Button>
        </div>
      </div>
    </div>
  );
};
