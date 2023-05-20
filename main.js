const http = require('http');

const server = http.createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/api/endpoint') {
    let data = '';

    req.on('data', chunk => {
      data += chunk;
    });

    req.on('end', () => {
      const parsedData = JSON.parse(data);
      console.log(parsedData);
      res.statusCode = 200;
      res.end('Data received successfully');
    });
  } else {
    res.statusCode = 404;
    res.end('Not found');
  }
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});