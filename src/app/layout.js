import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Jahswill Onuegbu | AI & Full-Stack Software Engineer",
  keywords:
    "Jahswill Onuegbu, AI Engineer, Full-Stack Software Engineer, Frontend Developer, Backend Engineer, Next.js, React, TypeScript, Python, FastAPI, Node.js, SaaS, EdTech, Cloud",
  description:
    "Portfolio for Jahswill Onuegbu, an AI and full-stack software engineer building responsive interfaces, secure APIs, AI-powered workflows, cloud services, and production software.",
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
