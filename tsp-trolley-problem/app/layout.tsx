import type { Metadata } from "next";
import { Comic_Neue, Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const comicNeue = Comic_Neue({
  variable: "--font-comic-neue",
  subsets: ["latin"],
  weight: "300"
})

export const metadata: Metadata = {
  title: "Travelling Salesman Trolley Problem",
  description: "You've heard of the travelling salesman problem. You've heard of the trolley problem. Now let's step it up one notch",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-patrickHand bg-white antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
