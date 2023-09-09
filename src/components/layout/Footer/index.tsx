import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";

interface FooterProps {
  className: string;
}

export const Footer: React.FC<FooterProps> = ({ className }) => {
  return <footer className={cn(styles.root, className)}></footer>;
};
