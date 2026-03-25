const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to ShopEasy by Sasidharan!');
});

const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = {app,server}; // Export the server for testing purposes