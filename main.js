function handleRequest(response) {
  console.log('Received response:');
  console.log('Status:', response.status);
  console.log('Data:', response.data);
  // You can perform further processing or handle the response as needed
}

function startServer() {
  fetch('https://diamondoremaster.github.io/Brick-Hill-Website/data.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error: ' + response.status);
    })
    .then(data => {
      handleRequest({ status: 200, data: data });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

startServer();