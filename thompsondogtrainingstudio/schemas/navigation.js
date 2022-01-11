export default {
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      title: "Navigation Links",
      name: "navigationLinks",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "link" }],
        },
      ],
    },
  ],
};
