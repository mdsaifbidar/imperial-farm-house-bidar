import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import SmoothScroll from "@/components/SmoothScroll";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import Preloader from "@/components/Preloader";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

const display = Fraunces({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  style: ["normal", "italic"],
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imperial Farm House | Danish Group, Bidar",
  description:
    "Imperial Farm House — a private garden estate for weddings and celebrations in Bidar, run by Danish Group since 1985.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-night">
        <Preloader />
        <CustomCursor />
        <div className="grain" />
        <SmoothScroll>
          {children}
          <WhatsAppFloat />
        </SmoothScroll>
      </body>
    </html>
  );
}
