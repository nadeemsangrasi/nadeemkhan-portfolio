import { Client } from "@/sanity/lib/client";

export const fetchEducation = async () => {
  const query = `*[_type == "education"]`;

  const education = await Client.fetch(query);
  return education;
};
