import { defineField, defineType } from "sanity";

export default defineType({
  name: "infoBrochure",
  title: "Information Brochure",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "brochures",
      title: "Brochures",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", title: "Brochure Name", type: "string" },
          { name: "year", title: "Year", type: "string" },
          { name: "fileUrl", title: "File URL", type: "url" },
          { name: "thumbnail", title: "Thumbnail", type: "image", options: { hotspot: true } },
        ],
      }],
    }),
  ],
});
