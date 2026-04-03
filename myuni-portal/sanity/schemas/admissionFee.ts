import { defineField, defineType } from "sanity";

export default defineType({
  name: "admissionFee",
  title: "Provisional Admission Fee",
  type: "document",
  fields: [
    defineField({ name: "title", title: "Page Title", type: "string", validation: (R) => R.required() }),
    defineField({ name: "description", title: "Description", type: "text", rows: 3 }),
    defineField({
      name: "feeCategories",
      title: "Fee Categories",
      type: "array",
      of: [{
        type: "object",
        fields: [
          { name: "category", title: "Category / Program", type: "string" },
          { name: "amount", title: "Amount", type: "number" },
          { name: "currency", title: "Currency", type: "string", initialValue: "INR" },
          { name: "note", title: "Note", type: "string" },
        ],
      }],
    }),
    defineField({ name: "paymentModes", title: "Payment Modes", type: "array", of: [{ type: "string" }] }),
    defineField({ name: "body", title: "Additional Content", type: "array", of: [{ type: "block" }] }),
  ],
});
