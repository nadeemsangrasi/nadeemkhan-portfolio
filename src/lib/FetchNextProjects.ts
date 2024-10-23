import { Client } from "@/sanity/lib/client";

export const fetchNextProjects = async () => {
  const query = `*[_type == "nextjs-project"]{
      _id,
      title,
      snug,
      url,
      _createdAt,
      "img":img.asset->url 
    }`;

  const projects = await Client.fetch(query);

  const sortedProjects = projects.sort(
    (a: { _createdAt: string }, b: { _createdAt: string }) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );

  return sortedProjects;
};
