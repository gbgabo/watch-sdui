import type { Metadata } from "next";
import localFont from "next/font/local";
import { Oswald } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const helveticaNeue = localFont({
  variable: "--font-helvetica-neue",
  src: [
    {
      path: "../public/fonts/HelveticaNeue-Medium.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../public/fonts/HelveticaNeueBold.ttf",
      weight: "700",
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Watch SDUI",
  description: "Watch Brasil Job Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${oswald.variable} ${helveticaNeue.className} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-white">
        <Navigation />
        {children}
      </body>
    </html>
  );
}
