import { defineField, defineType } from "sanity";

export default defineType({
  name: "notice",
  title: "Notice",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Notice Title", type: "string", validation: (R) => R.required() }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: { list: ["exam", "admission", "general"], layout: "radio" },
      validation: (R) => R.required(),
    }),
    defineField({ name: "date", title: "Date", type: "date", validation: (R) => R.required() }),
    defineField({ name: "isNew", title: "Mark as New", type: "boolean", initialValue: false }),
    defineField({ name: "fileUrl", title: "Attachment URL (PDF)", type: "url" }),
    defineField({ name: "body", title: "Notice Content", type: "array", of: [{ type: "block" }] }),
  ],
  orderings: [{ title: "Date, Newest First", name: "dateDesc", by: [{ field: "date", direction: "desc" }] }],
  preview: { select: { title: "title", subtitle: "date", badge: "category" } },
});
