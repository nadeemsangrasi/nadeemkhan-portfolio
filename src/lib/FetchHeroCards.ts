import { Client } from "@/sanity/lib/client";

export const fetchHeroCards = async () => {
  const query = `*[_type == "featured-technology"]{
      _id,
      title,
      color,
      "logo":logo.asset->url
    }`;

  const heroCards = await Client.fetch(query);
  const sortedHeroCards = heroCards.sort(
    (a: { _createdAt: string }, b: { _createdAt: string }) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );
  return sortedHeroCards;
};
