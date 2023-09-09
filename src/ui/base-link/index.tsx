import Link from "next/link";
import React from "react";
import cn from "classnames";
import styles from "./styles.module.scss";

type ViewVariant = "primary" | "secondary" | "inline";

interface BaseLinkProps {
  children: React.ReactNode;
  href: string;
  className?: string;
  viewVariant: ViewVariant;
}

export const BaseLink: React.FC<BaseLinkProps> = ({
  children,
  href,
  className,
  viewVariant = "inline",
  ...rest
}) => {
  return (
    <Link
      className={cn(styles.root, className, styles[viewVariant])}
      href={href}
      {...rest}
    >
      {children}
    </Link>
  );
};
