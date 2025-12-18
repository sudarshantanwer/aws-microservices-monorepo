import { ok, log } from "../shared/src/response.js";

export const handler = async event => {
  log("Orders service called", event);
  return ok({ message: "Orders service running" });
};
