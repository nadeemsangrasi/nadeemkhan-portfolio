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
  return projects;
};
