import { type ConfigStorage } from "../type";

export const storage: ConfigStorage = {
  uploads: {
    kind: "local",
    type: "file",
    serverRoute: { path: "/uploads" },
    storagePath: "/uploads",
    generateUrl: (path) => `http://localhost:1337/uploads/${path}`,
  },
};
