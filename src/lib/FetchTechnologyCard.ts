import { Client } from "@/sanity/lib/client";

export const fetchTechnologyCards = async () => {
  const query = `*[_type=="technology"]{
  _id,
  title,
  "data": data[] {
    title,
    "logo": logo.asset->url
  }
}`;
  const heroCards = await Client.fetch(query);
  return heroCards;
};
