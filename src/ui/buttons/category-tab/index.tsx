import React from "react";
import { Button } from "../button";
import styles from "./styles.module.scss";
import cn from "classnames";

interface CategoryTabProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  categoryName: string;
  active: boolean;
}

export const CategoryTab: React.FC<CategoryTabProps> = ({
  categoryName,
  active,
  ...rest
}) => {
  return (
    <Button
      className={cn(styles.root, {
        [styles.active]: active,
      })}
      viewVariant="inline"
      {...rest}
    >
      {categoryName}
    </Button>
  );
};
