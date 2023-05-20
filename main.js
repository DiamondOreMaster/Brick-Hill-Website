const http = require('http');

const data = {
  name: 'John',
  age: 25,
};

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.end(JSON.stringify(data));
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});