import React from "react";
import styles from "./styles.module.scss";

interface SelectorProps
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  data: string[];
}

export const Selector: React.FC<SelectorProps> = ({ data, ...rest }) => {
  return (
    <select className={styles.root} {...rest}>
      {data.map((item, index) => {
        return (
          <option key={index} value={item}>
            {item}
          </option>
        );
      })}
    </select>
  );
};
