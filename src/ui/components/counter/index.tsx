import React from "react";
import styles from "./styles.module.scss";
import { ButtonWithSvg } from "@/ui/buttons/button-with-svg";
import { PlusIcon } from "@/ui/icons/counter/plus-icon";
import cn from "classnames";
import { MinusIcon } from "@/ui/icons/counter/minus-icon";

type ViewVariant = "primary" | "secondary";

interface CounterProps {
  amount: number;
  increment: () => void;
  decrement: () => void;
  viewVariant: ViewVariant;
}

export const Counter: React.FC<CounterProps> = ({
  amount,
  viewVariant = "primary",
  increment,
  decrement,
}) => {
  return (
    <div className={cn(styles.root, styles[viewVariant])}>
      <ButtonWithSvg
        onClick={decrement}
        viewVariant={viewVariant === "primary" ? "inline" : "primary"}
        Icon={MinusIcon}
        disabled={amount === 0}
      />
      <span className={styles.amount}>{amount}</span>
      <ButtonWithSvg
        onClick={increment}
        viewVariant={viewVariant === "primary" ? "inline" : "primary"}
        Icon={PlusIcon}
        disabled={amount === 20}
      />
    </div>
  );
};
