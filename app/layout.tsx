import type { Metadata, Viewport } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AR_One_Sans } from "next/font/google";


const arOneSans = AR_One_Sans({
  subsets: ['latin'],
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: "LeadZup - Personalised marketing Hub",
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
  icons: {
    icon: "/favicon.jpg",
  },
  authors: [{ name: "Nishant Kumar" }],
  other: {
    "google-site-verification": "ZU59Yq-xG2Jga0ExqdDp44yBs3CtJiUNn8BqoxRp2Xc",
  },
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#0D9488", // you can keep this here too

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${arOneSans.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
