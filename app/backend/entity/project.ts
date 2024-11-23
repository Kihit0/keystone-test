import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { checkbox, integer, relationship } from "@keystone-6/core/fields";
import { type TypeList } from "../type";

export const Project: TypeList = list({
  access: allowAll,
  fields: {
    mainPageDisplay: checkbox(),
    popularity: integer({ validation: { isRequired: true } }),
    displayOrder: integer(),
    tags: relationship({ ref: "Tag.projects", many: true }),
    categories: relationship({ ref: "CategoriesProject.projects", many: true }),
  },
});
