import React from "react";
import styles from "./styles.module.scss";

interface SelectorProps {}

export const Selector: React.FC<SelectorProps> = () => {
  return <div className={styles.root}></div>;
};
