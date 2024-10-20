export const Technology = {
  name: "technology",
  title: "Technologies",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "data",
      title: "Technologies Array",
      type: "array",
      of: [
        {
          type: "object",
          name: "technologyItem",
          title: "Technology Item",
          fields: [
            {
              name: "title",
              title: "Technology Title",
              type: "string",
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
        },
      ],
    },
  ],
};
