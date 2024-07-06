"use client";
import Heading from "@/components/sections/Heading";
import HeroCards from "@/components/sections/HeroCards";
import HeroSection from "@/components/sections/HeroSection";
import Technologies from "@/components/sections/Technologies";

export default function Home(): React.JSX.Element {
  return (
    <div>
      <HeroSection />
      <HeroCards />
      <Heading />
      <Technologies />
    </div>
  );
}
