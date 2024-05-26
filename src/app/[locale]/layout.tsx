import "./globals.css";

import { Inter } from "next/font/google";

import { Toaster } from "@/components/ui/toaster";
import { cn } from "@/lib/utils";

import { Header } from "./components";

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <html lang={locale}>
      <body
        className={cn("bg-background font-sans antialiased", fontSans.variable)}
      >
        <Header />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
