import Navbar from "@/components/shared/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Footer from "@/components/shared/footer/Footer";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "REPLIQ SHOP",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const tailwindCss = "lg:w-[80%] md:w-[90%] w-[98%]";
  const classes = inter.className;
  const combinedClassName = `${tailwindCss} ${classes}`;
  return (
    <html lang="en">
      <body
        className={combinedClassName}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexDirection: "column",
          color: "gray",
          minHeight: "100vh",
          margin: "auto",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
