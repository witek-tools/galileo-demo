// Galileo Demo — HTTP entrypoint (fixture).
// Intentionally returns port 3000 while README documents 4000 (doc↔code drift canary).
// Keep the literal on the `start` line so the extracted symbol snippet carries the contradiction.
export function start() { return { port: 3000 }; }
