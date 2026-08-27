import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jahswill Onuegbu | Software Engineer",
  keywords:
    "Jahswill Onuegbu, Software Engineer, Founder, Full-Stack Developer, AI Engineer, AI Integration, AI-Native Publishing, SaaS, Python, Next.js, React, TypeScript, Cloud, Web3",
  description:
    "Portfolio for Jahswill Onuegbu, a software engineer and founder building scalable AI-native SaaS products, cloud-native platforms, and Web3 systems.",
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
