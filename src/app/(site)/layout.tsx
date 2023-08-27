import { Layout } from "@/components/layout";
import "./globals.scss";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pizza",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ru">
      <body className={nunito.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
