import { defineField, defineType } from "sanity";

export default defineType({
  name: "admissionOffice",
  title: "Admission Offices",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "offices",
      title: "Offices",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "name", title: "Office Name", type: "string" },
          { name: "address", title: "Address", type: "text", rows: 3 },
          { name: "phone", title: "Phone", type: "string" },
          { name: "email", title: "Email", type: "string" },
          { name: "mapLink", title: "Google Maps Link", type: "url" },
          { name: "image", title: "Office Image", type: "image", options: { hotspot: true } },
        ],
      }],
    }),
  ],
});
