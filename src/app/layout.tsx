import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false;
import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { useState, ReactNode, useEffect } from "react";
import logo from "@/../public/assests/images/meetusvr.png";

const outfit = Outfit({ subsets: ["latin"] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Meetus",
  icons: { icon: logo.src },
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body className={`${outfit.className}`}>{children}</body>
    </html>
  );
}
