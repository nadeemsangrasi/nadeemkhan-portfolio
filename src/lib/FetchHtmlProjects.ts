import { Client } from "@/sanity/lib/client";

export const fetchHtmlProjects = async () => {
  const query = `*[_type == "html-css"]{
      _id,
      title,
      snug,
      url,
      "img":img.asset->url 
    }`;

  const projects = await Client.fetch(query);

  const sortedProjects = projects.sort(
    (a: { _createdAt: string }, b: { _createdAt: string }) =>
      new Date(b._createdAt).getTime() - new Date(a._createdAt).getTime()
  );
  return sortedProjects;
};
