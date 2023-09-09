import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

type ViewVariant = "primary" | "secondary" | "inline";

export interface ButtonProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  children?: React.ReactNode;
  viewVariant: ViewVariant;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  viewVariant = "primary",
  ...rest
}) => {
  return (
    <button
      className={cn(styles.root, className, styles[viewVariant])}
      {...rest}
    >
      {children}
    </button>
  );
};
