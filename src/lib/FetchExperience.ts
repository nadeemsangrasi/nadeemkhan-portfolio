import { Client } from "@/sanity/lib/client";

export const fetchExperience = async () => {
  const query = `*[_type == "experience"]`;

  const experience = await Client.fetch(query);
  const sortedExperience = experience.sort(
    (a: { _createdAt: string }, b: { _createdAt: string }) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );
  return sortedExperience;
};
