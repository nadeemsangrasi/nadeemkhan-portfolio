import { Client } from "@/sanity/lib/client";

export const fetchHeroCards = async () => {
  const query = `*[_type == "featured-technology"]{
      _id,
      title,
      color,
      "logo":logo.asset->url
    }`;

  const heroCards = await Client.fetch(query);
  return heroCards;
};
