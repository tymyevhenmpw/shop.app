import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import StickyCart from "@/components/shared/StickyCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Santehvan shop",
  description: "Your's best bathroom advisor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <>
      <Header/>
        <section className = "main-container">
          <div className = "w-full max-w-screen-2xl px-3">
              {children}
          </div>
        </section>
        <StickyCart/>
      <Footer/>
    </>
  );
}
