import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { relationship, text } from "@keystone-6/core/fields";
import { type TypeList } from "../type";

export const CategoriesProject: TypeList = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),
    title: text({ validation: { isRequired: true } }),
    projects: relationship({ ref: "Project.categories", many: true }),
  },
});
