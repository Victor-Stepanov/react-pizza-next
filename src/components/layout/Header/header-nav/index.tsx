import { BaseLink } from "@/ui/base-link";
import { CartHeaderIcon } from "@/ui/icons/header/cart-icon";
import React from "react";
import styles from "./styles.module.scss";
import { FavoriteIcon } from "@/ui/icons/header/favorite-icon";

export const Navigation = () => {
  return (
    <nav className={styles.root}>
      <BaseLink
        className={styles.navLink}
        href="/favorites"
        viewVariant="inline"
      >
        <div className={styles.linkItem}>
          <FavoriteIcon />
          <span>Избранное</span>
        </div>
        {/* <span className={styles.marker}>3</span> */}
      </BaseLink>
      <BaseLink className={styles.navLink} href="/cart" viewVariant="inline">
        <div className={styles.linkItem}>
          <CartHeaderIcon />
          <span>Корзина</span>
        </div>
        <span className={styles.marker}>3</span>
      </BaseLink>
    </nav>
  );
};
