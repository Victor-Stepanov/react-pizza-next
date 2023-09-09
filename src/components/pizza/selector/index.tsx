import { SelectorCategory } from "@/types";
import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface SelectorProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLSpanElement>,
    HTMLSpanElement
  > {
  item: number;
  selectorCategory: SelectorCategory;
  active: number;
}

const pizzaTypes: string[] = ["тонкое", "традиционное"];

export const Selector: React.FC<SelectorProps> = ({
  item,
  selectorCategory,
  active,
  ...rest
}) => {
  return (
    <span
      className={cn(styles.selectorItem, {
        [styles.active]: item === active,
      })}
      {...rest}
    >
      {selectorCategory === SelectorCategory.Types
        ? pizzaTypes[item]
        : `${item} см.`}
    </span>
  );
};
