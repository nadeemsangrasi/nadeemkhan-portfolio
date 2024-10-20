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
          { title: "Sage Green", value: "bg-card-1" },
          { title: "Slate Blue", value: "bg-card-2" },
          { title: "Light Gray", value: "bg-card-3" },
          { title: "Pale Mint", value: "bg-card-4" },
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
