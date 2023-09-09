import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

interface InputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

// eslint-disable-next-line react/display-name
export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...rest }, ref) => {
    return (
      <input
        maxLength={40}
        className={cn(styles.root, className)}
        {...rest}
        ref={ref}
      />
    );
  }
);
