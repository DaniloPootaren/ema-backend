import { insertApiToken } from "../migrations";

export const bootstrapApp = async () => {
  try {
    await insertApiToken();
  } catch (e) {
    console.error(e);
  }
};
