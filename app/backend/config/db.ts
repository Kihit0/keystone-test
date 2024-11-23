import { type ConfigDB } from "../type";

const url = `postgres://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}/${process.env.DATABASE_NAME}`;

export const db: ConfigDB = {
  provider: "postgresql",
  url,
};
