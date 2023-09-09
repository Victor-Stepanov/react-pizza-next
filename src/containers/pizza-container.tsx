"use client";

import { Pizza } from "@/components/pizza";
import { IPizza } from "@/types";
import React from "react";

interface PizzaContainerProps {
  pizza: IPizza;
}

export const PizzaContainer: React.FC<PizzaContainerProps> = ({ pizza }) => {
  const [amount, setAmount] = React.useState(0);

  const increment = React.useCallback(
    () => setAmount((currentAmount) => currentAmount + 1),
    []
  );

  const decrement = React.useCallback(
    () => setAmount((currentAmount) => currentAmount - 1),
    []
  );

  if (!pizza) {
    return null;
  }

  return (
    <Pizza
      amount={amount}
      increment={increment}
      decrement={decrement}
      pizza={pizza}
    />
  );
};
