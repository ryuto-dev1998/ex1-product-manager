const mongoose = require('mongoose');

// ############################################# //
// ##### Product Model Setup #####
// ############################################# //

// Define Mongoose Schema Class
const Schema = mongoose.Schema;

// Create a Schema object for the Product model
// This schema defines the structure of product documents in the MongoDB collection.
const productSchema = new Schema({
    name: { type: String, required: true  },
    price: { type: Number, required: true  },
    description: { type: String }
});

// Create a Mongoose model from the productSchema.
// This model provides an interface to interact with the 'products' collection in MongoDB.
// Mongoose automatically pluralizes "Product" to "products" for the collection name.
const Product = mongoose.model("Product", productSchema);

module.exports = Product