import { fetchHeroCards } from "@/lib/FetchHeroCards";
import HeroCards from "./HeroCards";

const HeroCardSection = async (): Promise<JSX.Element> => {
  const cardsData = await fetchHeroCards();
  return <HeroCards cardsData={cardsData} />;
};

export default HeroCardSection;
