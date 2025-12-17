export const ok = data => ({
  statusCode: 200,
  body: JSON.stringify(data)
});

export const error = (status, message) => ({
  statusCode: status,
  body: JSON.stringify({ error: message })
});

// Re-export log for convenience so services can import from response.js
export { log } from "./logger.js";
