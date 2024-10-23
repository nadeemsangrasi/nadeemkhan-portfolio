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
  const technologyCards = await Client.fetch(query);
  const sortedTechnologyCards = technologyCards.sort(
    (a: { _createdAt: string }, b: { _createdAt: string }) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );
  return sortedTechnologyCards;
};
