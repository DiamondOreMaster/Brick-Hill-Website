function handleRequest(request) {
  console.log('Received request:');
  console.log('Method:', request.method);
  console.log('URL:', request.url);
  console.log('Headers:', request.headers);
  console.log('Body:', request.body);
  // You can perform further processing or handle the request as needed
}

function startServer() {
  const server = new XMLHttpRequest();

  server.onreadystatechange = function () {
    if (server.readyState === XMLHttpRequest.DONE) {
      if (server.status === 200) {
        const request = JSON.parse(server.responseText);
        handleRequest(request);
      } else {
        console.error('Error:', server.status);
      }
    }
  };

  server.open('POST', 'https://example.com/api/endpoint', true);
  server.setRequestHeader('Content-Type', 'application/json');
  server.send();
}

startServer();