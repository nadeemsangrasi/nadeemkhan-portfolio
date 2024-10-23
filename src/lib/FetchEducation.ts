import { Client } from "@/sanity/lib/client";

export const fetchEducation = async () => {
  const query = `*[_type == "education"]`;

  const eductaion = await Client.fetch(query);
  const sortedEductaion = eductaion.sort(
    (a: { _createdAt: string }, b: { _createdAt: string }) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );
  return sortedEductaion;
};
