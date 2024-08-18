import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ActiveSectionProvider } from "@/contexts/ActiveSectionContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Massari Systems",
  description:
    "A Hedge fund that uses a proprietary algorithm for trading decisions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className={` ${inter.className}`}>
        <ActiveSectionProvider>{children}</ActiveSectionProvider>
      </body>
    </html>
  );
}
