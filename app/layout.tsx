import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LeadZup - Your Digital Solutions Hub",
  description:
    "LeadZup provides inovative advertisement solution to the Brands, we work on personalsed advertisement ads modal, we monitor reddit like forums for 24x7, looking for the users that are in need of products that Brands provides we help Brands products to position them into conversation and pitch the products to user.",
  keywords: [
    "LeadZup",
    "web advertisement agency",
    "digital Marketing",
    "tech",
    "marketing",
    "marketing solutions",
    "marketing agency",
    "personalised ads",
  ],
  authors: [{ name: "Nishant Kumar" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#0D9488",
  other: {
    "google-site-verification": "ZU59Yq-xG2Jga0ExqdDp44yBs3CtJiUNn8BqoxRp2Xc",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
