"use client";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { selectPizzaModule } from "@/redux/features/pizza/selectors";
import { fetchPizzaIfNotExists } from "@/redux/features/pizza/thunks";
import React from "react";

export const PizzasContainer = ({ data }: any[]) => {
  const dispatch = useAppDispatch();
  const { entities } = useAppSelector(selectPizzaModule);
  console.log(entities);
  console.log(data);

  // React.useEffect(() => {
  //   dispatch(fetchPizzaIfNotExists());
  // }, [dispatch]);
  return <div>PizzasContainer</div>;
};
