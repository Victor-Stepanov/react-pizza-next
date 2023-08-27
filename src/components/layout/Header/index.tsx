import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface HeaderProps {
  className: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return <header className={cn(styles.root, className)}>Header</header>;
};
