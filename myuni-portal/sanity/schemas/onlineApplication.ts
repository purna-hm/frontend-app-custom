import { defineField, defineType } from "sanity";

export default defineType({
  name: "onlineApplication",
  title: "Online Application & Enquiry",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "formTitle", title: "Form Title", type: "string" }),
    defineField({ name: "formDescription", title: "Form Description", type: "text", rows: 3 }),
    defineField({ name: "applicationLink", title: "Application Portal Link", type: "url" }),
    defineField({ name: "enquiryEmail", title: "Enquiry Email", type: "string" }),
    defineField({ name: "enquiryPhone", title: "Enquiry Phone", type: "string" }),
    defineField({ name: "body", title: "Body Content", type: "array", of: [{ type: "block" }] }),
    defineField({
      name: "faqs",
      title: "FAQs",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "question", title: "Question", type: "string" },
          { name: "answer", title: "Answer", type: "text" },
        ],
      }],
    }),
  ],
});
