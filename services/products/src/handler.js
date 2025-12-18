import { ok, log } from "../shared/src/response.js";

export const handler = async event => {
  log("Products service called", event);
  if (event.path && event.path.endsWith('/health')) {
    return ok({ status: 'ok' });
  }
  return ok({ message: "Products service running" });
};
