'use client'

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css";
import { AppProvider } from "@/data/context/AppContext";
import { AuthProvider } from "@/data/context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <AppProvider>
            {children}
          </AppProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
