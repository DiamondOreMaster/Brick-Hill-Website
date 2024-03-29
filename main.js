const fs = require('fs');

const data = { name: 'John', age: 30 };
const jsonData = JSON.stringify(data);

fs.writeFile('data.json', jsonData, 'utf8', (error) => {
  if (error) {
    console.error('Error:', error);
  } else {
    console.log('Data has been written to data.json');
  }
});

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

function populateTable() {
  fetch('data.json')
    .then(response => {
      if (response.ok) {
        return response.json();
      }
      throw new Error('Error: ' + response.status);
    })
    .then(data => {
      const tableBody = document.querySelector('#scoreTableBody');

      // Clear existing rows in the table body
      tableBody.innerHTML = '';

      data.forEach(item => {
        if (item.isTest) {
          return; // Skip if it's a test item
        }

        const row = document.createElement('tr');
        const usernameCell = document.createElement('td');
        const highScoreCell = document.createElement('td');

        usernameCell.textContent = item.username;
        highScoreCell.textContent = item.highScore;

        console.log(item.highScore)

        row.appendChild(usernameCell);
        row.appendChild(highScoreCell);
        tableBody.appendChild(row);
      });
    })
    .catch(error => {
      console.error('Error:', error);
    });
}

populateTable();