import React from "react";
import { Header } from "./header";
import { Footer } from "./footer";
import styles from "./styles.module.scss";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <Header className={styles.header} />
      <main className={styles.content}>{children}</main>
      <Footer className={styles.footer} />
    </div>
  );
};
