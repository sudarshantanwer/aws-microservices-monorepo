import { ok, log } from "../shared/src/response.js";

export const handler = async event => {
  log("Auth service called", event);
  return ok({ message: "Auth service running" });
};
