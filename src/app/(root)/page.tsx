import ContactSection from "@/components/sections/ContactSection";
import HeadingSection from "@/components/sections/HeadingSection";
import HeroCardSection from "@/components/sections/HeroCardSection";
import HeroSection from "@/components/sections/HeroSection";
import Technologies from "@/components/sections/Technologies";
import InfiniteScroller from "@/components/shared/InfiniteScroller";

export default function Home(): React.JSX.Element {
  return (
    <div>
      <HeroSection />
      <InfiniteScroller text=" | Building Secure, Beautiful, Dynamic Sites | Full-Stack Developer | Next.js Expert | Crafting User-Centric Experiences | Responsive Web Developer | React & Node.js Pro " />
      <HeroCardSection />
      <HeadingSection />
      <Technologies />
      <ContactSection />
    </div>
  );
}
