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
  description: "LeadZup provides innovative web solutions, portfolio showcase, and digital services tailored for modern businesses.",
  keywords: ["LeadZup", "web solutions", "digital services", "tech", "marketing", "marketing solutions", "marketing agency", "personalised ads"],
  authors: [{ name: "Nishant Kumar" }],
  viewport: "width=device-width, initial-scale=1.0",
  themeColor: "#0D9488",
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
