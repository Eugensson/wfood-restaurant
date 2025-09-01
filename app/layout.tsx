import type { Metadata } from "next";
import { Lora, Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-lora",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "W'Food-Restaurant",
  description:
    "W'Food Restaurant – a modern dining experience with a focus on delicious cuisine, cozy atmosphere, and an inviting menu for food lovers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lora.variable} ${poppins.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
