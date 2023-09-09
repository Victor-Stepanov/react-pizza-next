import React from "react";
import styles from "./styles.module.scss";
import { BaseLink } from "@/ui/base-link";
import Image from "next/image";
import img from "../../../assets/shopping-cart.png";

export default function CartPage() {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Корзина пустая 😕</h2>
        <p className={styles.sectionDescription}>
          Вероятней всего, вы не заказывали ещё пиццу. Для того, чтобы заказать
          пиццу, перейди на главную страницу.
        </p>
        <Image width={300} height={255} src={img} alt="Empty cart" />
        <BaseLink viewVariant="primary" className={styles.link} href="/">
          Вернуться назад
        </BaseLink>
      </div>
    </section>
  );
}
