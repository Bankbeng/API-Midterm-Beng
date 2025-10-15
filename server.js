// Import the Express library
const express = require('express');

// Create an Express application instance
const app = express();

// Define the port number the server will listen on
const port = 3000;

// Import the product router from the routes folder
const productRouter = require('./routes/product.route');

// Define a route for the root URL ('/')
// When a GET request is made to '/', send 'Hi ladys' as the response
app.get('/', (req, res) => {
  res.send('Hi ladys');
});

// Use the product router for any routes starting with '/api/product'
// This means requests to '/api/product' will be handled by productRouter
app.use("/api/product", productRouter);

// Start the server and listen on the specified port
// When the server starts, log a message to the console
app.listen(port, () => {
  console.log(`http://localhost:${port} or http://localhost:${port}/api/product`);
});