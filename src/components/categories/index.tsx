import { CategoriesContainer } from "@/containers/categories-container";
import React from "react";
import styles from "./styles.module.scss";

const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];

export const Categories = () => {
  return (
    <div className={styles.root}>
      <CategoriesContainer data={categories} />
    </div>
  );
};
