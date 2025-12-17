import { ok, log } from "@shared/utils/src/response.js";

export const handler = async event => {
  log("Users service called", event);
  return ok({ message: "Users service running" });
};
