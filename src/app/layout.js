import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jahswill Onuegbu | Full-Stack Developer",
  keywords:
    "Jahswill Onuegbu, Full-Stack Developer, AI Integration, SaaS Developer, Laravel, Next.js, React, TypeScript",
  description:
    "Portfolio for Jahswill Onuegbu, a full-stack developer building AI-powered SaaS products with React, Next.js, Node.js, TypeScript, Laravel, and Inertia.js.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
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
