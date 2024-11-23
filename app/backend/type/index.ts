import { BaseListTypeInfo, KeystoneConfig, ListConfig } from "@keystone-6/core/types";

export type ConfigDB = Pick<KeystoneConfig, "db">["db"];
export type ConfigUI = Pick<KeystoneConfig, "ui">["ui"];
export type TypeList = ListConfig<BaseListTypeInfo>;
export type ConfigLists = Pick<KeystoneConfig, "lists">["lists"];
export type ConfigServer = Pick<KeystoneConfig, "server">["server"];
export type ConfigStorage = Pick<KeystoneConfig, "storage">["storage"];

/* If use graphQL */
export type TypeInfoGraphQL = Pick<KeystoneConfig, "graphql">;
