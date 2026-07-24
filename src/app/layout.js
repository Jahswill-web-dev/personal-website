import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jahswill Onuegbu | Software Engineer",
  keywords:
    "Jahswill Onuegbu, Software Engineer, Full-Stack Developer, AI Engineer, AI Integration, SaaS, Python, Next.js, React, TypeScript, Cloud",
  description:
    "Portfolio for Jahswill Onuegbu, a software engineer building scalable SaaS products, cloud-native platforms, and AI-powered systems.",
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
