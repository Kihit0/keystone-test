import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { file, relationship, text } from "@keystone-6/core/fields";
import { type TypeList } from "../type";

export const Tag: TypeList = list({
  access: allowAll,
  fields: {
    tag: text({ validation: { isRequired: true } }),
    title: text({ validation: { isRequired: true } }),
    cursorMedia: file({ storage: "uploads" }),
    projects: relationship({ ref: "Project.tags" }),
  },
});
