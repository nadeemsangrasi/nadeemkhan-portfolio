import { Client } from "@/sanity/lib/client";

export const fetchExperience = async () => {
  const query = `*[_type == "experience"]`;

  const experience = await Client.fetch(query);
  return experience;
};
