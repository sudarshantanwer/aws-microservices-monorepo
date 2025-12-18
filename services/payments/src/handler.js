import { ok, log } from "../shared/src/response.js";

export const handler = async event => {
  log("Payments service called", event);
  return ok({ message: "Payments service running" });
};
