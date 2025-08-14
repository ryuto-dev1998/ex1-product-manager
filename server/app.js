// ############################################# //
// ##### Server Setup for Product Management API #####
// ############################################# //

// Importing packages
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const route = require('./route/product')
// Initialize Express app
const app = express();
// Define the port for the server to listen on
const port = process.env.PORT || 3000; // Default port set to 3000
require('dotenv').config()
const mongoURI = process.env.MONGO_URI
console.log(mongoURI)

// Middleware setup
// Enable CORS (Cross-Origin Resource Sharing) for all routes
app.use(cors());
// Enable Express to parse JSON formatted request bodies
app.use(express.json());

// MongoDB connection string.
// This string is generated from the inputs provided in the UI.
mongoose.connect(mongoURI)
.then(() => {
    console.log('Connected to MongoDB');
    app.use('/api/products', route);
    // Start the Express server only after successfully connecting to MongoDB
    app.listen(port, () => {
        console.log('Product API Server is running on port ' + port);
    });
})
.catch((error) => {
    // Log any errors that occur during the MongoDB connection
    console.error('Error connecting to MongoDB:', error);
});





