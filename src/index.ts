import { createServer } from "http";
import app from "./app";

const server = createServer(app);

const HOST = "0.0.0.0";
const PORT = 4400;

server.listen(PORT, () => {
  process.stdout.write(`Server start listen on ${HOST}:${PORT} \n`);
});
