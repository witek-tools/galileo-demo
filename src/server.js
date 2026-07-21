// Galileo Demo — HTTP entrypoint (fixture).
// Intentionally returns port 3000 while README documents 4000 (doc↔code drift canary).
const PORT = 3000;
export function start() { return { port: PORT }; }
