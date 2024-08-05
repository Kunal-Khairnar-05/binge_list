import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {CategoryContextProvider} from '../app/context/CategoryContext';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Binge List",
  description: "My Binge List",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <CategoryContextProvider>
          {children}
        </CategoryContextProvider>
      </body>
    </html>
  );
}
