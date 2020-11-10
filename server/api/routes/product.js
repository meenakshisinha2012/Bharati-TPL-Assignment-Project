const express = require("express");
const router = express.Router();

const ProductController = require('../controllers/product');

router.get("/show-product", ProductController.show_product);
router.delete("/delete-product/:productId", ProductController.delete_product);
router.patch("/update-product/:productId",ProductController.update_product);
router.post("/add-product", ProductController.add_product);



module.exports = router;