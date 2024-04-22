// server.mjs
import { createServer } from 'node:http';

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!\n');
});

// starts a simple http server locally on port 3000
server.listen(3000, '216.24.57.4', () => {
  console.log('Listening on 216.24.57.4:3000');
});

// run with `node server.mjs`
