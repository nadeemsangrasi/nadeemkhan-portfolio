import { Client } from "@/sanity/lib/client";

export const fetchNextProjects = async () => {
  const query = `*[_type == "nextjs-project"]{
      _id,
      title,
      snug,
      url,
      "img":img.asset->url 
    }`;

  const projects = await Client.fetch(query);
  return projects;
};
