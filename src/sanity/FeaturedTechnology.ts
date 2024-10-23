export const FeaturedTechnology = {
  name: "featured-technology",
  type: "document",
  title: "Featured Technology",
  fields: [
    {
      name: "title",
      type: "string",
      title: "Title",
    },
    {
      name: "color",
      type: "string",
      title: "Background Color",
      options: {
        list: [
          { title: "Light Sky Blue", value: "bg-card-1" },
          { title: "Pale Green", value: "bg-card-2" },
          { title: "Lavender Mist", value: "bg-card-3" },
          { title: "Peach", value: "bg-card-4" },
        ],
        layout: "dropdown",
      },
    },
    {
      name: "logo",
      title: "Logo (SVG)",
      type: "file",
      options: {
        accept: ".svg",
      },
    },
  ],
};
