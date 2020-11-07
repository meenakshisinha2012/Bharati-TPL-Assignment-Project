const express = require("express");
const router = express.Router();

const ProductController = require('../controllers/product');

router.post("/show-product", ProductController.show_product);

router.post("/add-product", ProductController.add_product);



module.exports = router;