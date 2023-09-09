import React from "react";
import styles from "./styles.module.scss";
import cn from "classnames";
import { BaseLink } from "@/ui/base-link";
import Image from "next/image";
import logo from "../../../assets/logo.png";
import { Search } from "@/ui/components/search";
import { Navigation } from "./header-nav";

interface HeaderProps {
  className: string;
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
  return (
    <header className={cn(styles.root, className)}>
      <div className={styles.container}>
        <BaseLink
          viewVariant="inline"
          href="/"
          className={styles.linkContainer}
        >
          <Image src={logo} alt="Logo" width={38} height={38} />
          <div className={styles.headerInfo}>
            <h1 className={styles.headerTitle}>REACT PIZZA</h1>
            <p className={styles.headerDescripion}>
              самая вкусная пицца во вселенной
            </p>
          </div>
        </BaseLink>
        <Search placeholderValue="Поиск пиццы..." />
        <Navigation />
        {/* <BaseLink className={styles.cartLink} viewVariant="primary" href="cart">
          <span>520 ₽</span>
          <div className={styles.delimiter}></div>
          <CartIcon />
          <span>3</span>
        </BaseLink> */}
      </div>
    </header>
  );
};
