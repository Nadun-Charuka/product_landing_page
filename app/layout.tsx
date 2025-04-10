import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const popins = Poppins({
  weight:["100","200","300","400","500","600","700","800","900"],
  subsets:["latin"],
});

export const metadata: Metadata = {
  title: "Product Landing Page",
  description: "Product Landing Page",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${popins.className} antialiased`}
      >        
        {children}
      </body>
    </html>
  );
}
