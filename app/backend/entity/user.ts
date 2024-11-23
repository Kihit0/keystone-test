import { list } from "@keystone-6/core";
import { allowAll } from "@keystone-6/core/access";
import { password, text, timestamp } from "@keystone-6/core/fields";
import { type TypeList } from "../type";

export const User: TypeList = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true } }),

    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),

    password: password({ validation: { isRequired: true } }),

    createdAt: timestamp({
      // this sets the timestamp to Date.now() when the user is first created
      defaultValue: { kind: "now" },
    }),
  },
});
