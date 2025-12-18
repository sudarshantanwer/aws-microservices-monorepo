import { ok, log } from "../shared/src/response.js";

export const handler = async event => {
  log("Products service called", event);
  return ok({ message: "Products service running" });
};
