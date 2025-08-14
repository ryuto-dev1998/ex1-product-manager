const express = require('express');
const Product = require('../model/product')
// ############################################# //
// ##### Product API Routes Setup #####
// ############################################# //

// Create an Express Router instance to handle product-related routes.
const router = express.Router();


// Route to get all products from the database.
// Handles GET requests to '/api/products/'.
router.route("/")
    .get(async (req, res) => { // Added async
        try {
            const products = await Product.find(); // Added await
            res.json(products);
        } catch (err) {
            res.status(400).json("Error: " + err);
        }
    });

// Route to get a specific product by its ID.
// Handles GET requests to '/api/products/:id'.
router.route("/:id")
    .get(async (req, res) => { // Added async
        try {
            const product = await Product.findById(req.params.id); // Added await
            res.json(product);
        } catch (err) {
            res.status(400).json("Error: " + err);
        }
    });

// Route to add a new product to the database.
// Handles POST requests to '/api/products/add'.
router.route("/")
    .post(async (req, res) => { // Added async
        // Extract attributes from the request body.
        const name = req.body.name;
        const price = req.body.price;
        const description = req.body.description;

        // Create a new Product object using the extracted data.
        const newProduct = new Product({
            name,
            price,
            description
        });

        try {
            await newProduct.save(); // Added await
            res.json("Product added!");
        } catch (err) {
            res.status(400).json("Error: " + err);
        }
    });

// Route to update an existing product by its ID.
// Handles PUT requests to '/api/products/update/:id'.
router.route("/:id")
    .put(async (req, res) => { // Added async
        try {
            const product = await Product.findById(req.params.id); // Added await
            if (!product) {
                return res.status(404).json("Error: Product not found");
            }

            // Update the product's attributes with data from the request body.
            product.name = req.body.name;
                product.price = req.body.price;
                product.description = req.body.description;

            await product.save(); // Added await
            res.json("Product updated!");
        } catch (err) {
            res.status(400).json("Error: " + err);
        }
    });

// Route to delete a product by its ID.
// Handles DELETE requests to '/api/products/delete/:id'.
router.route("/:id")
    .delete(async (req, res) => { // Added async
        try {
            const deletedProduct = await Product.findByIdAndDelete(req.params.id); // Added await
            if (!deletedProduct) {
                return res.status(404).json("Error: Product not found");
            }
            res.json("Product deleted.");
        } catch (err) {
            res.status(400).json("Error: " + err);
        }
    });

module.exports = router