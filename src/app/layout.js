import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jahswill's Portfolio",
  keywords: "Portfolio, Jahswill, Web Developer, Software Engineer, Next.js, React",
  description: "Welcome to Jahswill's Portfolio - showcasing my work as a Web Developer and Software Engineer.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-third`}>        
          {children}
      </body>
    </html>
  );
}
