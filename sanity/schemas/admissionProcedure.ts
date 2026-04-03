import { defineField, defineType } from "sanity";

export default defineType({
  name: "admissionProcedure",
  title: "Admission Procedure",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (R) => R.required() }),
    defineField({ name: "heroTitle", title: "Hero Title", type: "string" }),
    defineField({ name: "heroSubtitle", title: "Hero Subtitle", type: "text", rows: 2 }),
    defineField({ name: "heroImage", title: "Hero Image", type: "image", options: { hotspot: true }, fields: [defineField({ name: "alt", title: "Alt Text", type: "string" })] }),
    defineField({
      name: "steps",
      title: "Admission Steps",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "step", title: "Step Number", type: "number" },
          { name: "title", title: "Step Title", type: "string" },
          { name: "description", title: "Description", type: "text" },
          { name: "icon", title: "Icon Name", type: "string" },
        ],
      }],
    }),
    defineField({
      name: "importantDates",
      title: "Important Dates",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "label", title: "Label", type: "string" },
          { name: "date", title: "Date", type: "string" },
        ],
      }],
    }),
    defineField({ name: "body", title: "Body Content", type: "array", of: [{ type: "block" }, { type: "image", options: { hotspot: true } }] }),
    defineField({ name: "seoTitle", title: "SEO Title", type: "string" }),
    defineField({ name: "seoDescription", title: "SEO Description", type: "text", rows: 2 }),
  ],
  preview: { select: { title: "title" } },
});
