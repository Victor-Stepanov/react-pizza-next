"use client";
import { Selector } from "@/ui/selector";
import React from "react";
import styles from "./styles.module.scss";

const list = ["популярности", "цене", "алфавиту"];

export const Sort = () => {
  const [selectedOption, setSelectedOption] = React.useState(list[0]);
  console.log(selectedOption);
  return (
    <div className={styles.root}>
      <span className={styles.info}>Сортировка по:</span>
      <Selector
        value={selectedOption}
        onChange={(evt) => setSelectedOption(evt.target.value)}
        data={list}
      />
    </div>
  );
};
