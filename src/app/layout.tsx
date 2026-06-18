import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "JEE Math Pro — Master JEE Advanced Mathematics",
  description:
    "A comprehensive platform for JEE Advanced Mathematics preparation. Find the right resources, explore multiple solution approaches, learn from common mistakes, and get AI-powered step-by-step explanations.",
  keywords: [
    "JEE Advanced",
    "Mathematics",
    "IIT JEE",
    "JEE preparation",
    "Math solutions",
    "JEE questions",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
