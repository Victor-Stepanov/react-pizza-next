import { RootState } from "@/redux";
import { selectById, selectIds } from "./";

export const selectPizzaModule = (state: RootState) => state.pizza;

export const selectPizzaIdx = (state: RootState) =>
  selectIds(selectPizzaModule(state));

export const selectPizza = (state: RootState, pizzaId: string) =>
  selectById(selectPizzaModule(state), pizzaId);
