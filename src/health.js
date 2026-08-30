const http = require('http');

function sendJson(res, statusCode, payload) {
  res.writeHead(statusCode, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(payload));
}

function createServer() {
  return http.createServer((req, res) => {
    const { method, url } = req;

    if (method === 'GET' && url === '/health') {
      sendJson(res, 200, { status: 'ok' });
      return;
    }

    if (method === 'GET' && url === '/api/hello') {
      sendJson(res, 200, { message: 'Hello, World!' });
      return;
    }

    sendJson(res, 404, { error: 'Not found' });
  });
}

module.exports = { createServer };
