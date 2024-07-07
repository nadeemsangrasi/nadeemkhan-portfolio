"use client";
import Heading from "@/components/sections/Heading";
import HeroCards from "@/components/sections/HeroCards";
import HeroSection from "@/components/sections/HeroSection";
import Technologies from "@/components/sections/Technologies";
import InfiniteScroller from "@/components/shared/InfiniteScroller";

export default function Home(): React.JSX.Element {
  return (
    <div>
      <HeroSection />
      <InfiniteScroller text="Building Secure, Beautiful, Dynamic Sites  | Next.js Expert | Crafting User-Centric Experiences | Responsive Frontend Developer | React.js Pro" />
      <HeroCards />
      <Heading />
      <Technologies />
    </div>
  );
}
