import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schemaTypes } from "./sanity/schemas";

export default defineConfig({
  name: "default",
  title: "MyUni CMS",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("MyUni Content")
          .items([
            S.listItem()
              .title("Admissions")
              .child(
                S.list()
                  .title("Admissions")
                  .items([
                    S.documentTypeListItem("admissionProcedure").title("Admission Procedure"),
                    S.documentTypeListItem("onlineApplication").title("Online Application & Enquiry"),
                    S.documentTypeListItem("infoBrochure").title("Information Brochure"),
                    S.documentTypeListItem("admissionFee").title("Provisional Admission Fee"),
                    S.documentTypeListItem("admissionOffice").title("Admission Offices"),
                  ])
              ),
            S.divider(),
            S.documentTypeListItem("notice").title("Notices"),
          ]),
    }),
    visionTool(),
  ],
  schema: { types: schemaTypes },
  basePath: "/studio",
});
