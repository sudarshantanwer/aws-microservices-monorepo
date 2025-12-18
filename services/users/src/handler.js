import { ok, log } from "../shared/src/response.js";

export const handler = async event => {
  log("Users service called", event);
  return ok({ message: "Users service running" });
};
