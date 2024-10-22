import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "../globals.css";
import Header from "@/components/layouts/Header";
import Footer from "@/components/layouts/Footer";
import ParticlesBgWrapper from "@/components/ui/ParticlesBgWrapper";
import { ThemeProvider } from "@/context/ThemeProvider";

const raleway = Raleway({ style: "normal", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "nadeemkhan",
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
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ParticlesBgWrapper>
            <Header />
            {children}
            <Footer />
          </ParticlesBgWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
