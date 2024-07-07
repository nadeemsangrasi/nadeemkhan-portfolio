import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ParticlesBgWrapper from "@/components/ui/ParticlesBgWrapper";

const raleway = Raleway({ style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nadeemkhan.dev",
  description: "nadeem khan portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>
        <ParticlesBgWrapper>
          <Header />
          {children}
          <Footer />
        </ParticlesBgWrapper>
      </body>
    </html>
  );
}
