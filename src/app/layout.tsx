import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";

const raleway = Raleway({ style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nadeem portfolio",
  description: "nadeem portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <div className="bg-primary-black">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
