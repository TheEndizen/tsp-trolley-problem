import type { Metadata } from "next";
import "./globals.css";

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
        className={`font-patrickHand bg-white`}
      >
        {children}
      </body>
    </html>
  );
}
