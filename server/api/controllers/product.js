//const mongoose = require("mongoose");

const Product = require("../models/product");

exports.show_product = (req, res, next) => {
  Product.find()
    .exec()
    .then((docs) => {
      console.log("All products", docs);
      res.status(200).json(docs);
    })
    .catch((err) => {
      console.log("Error: All Products Error", err);
      res.status(500).json({
        error: err,
      });
    });
};

exports.add_product = (req, res, next) => {
  const product = new Product(req.body);
  // product._id = mongoose._id;

  product.save((err, data) => {
    if (err) {
      console.log("", err);
      return res.status(400).json({ msg: err });
    }
    res.json(data);
  });
};

exports.delete_product = (req, res, next) => {
  const id = req.params.productId;
  Product
    .remove({ _id: id })
    .exec()
    .then((result) => {
      console.log("Product Deleted sucessfully with ID ", id);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("Cannot delete the product!!!", err);
      res.status(500).json(err);
    });
};

exports.update_product = (req, res, next) => {
  const id = req.params.productId;
  const updateOps = {};

  for (const ops of req.body) {
    updateOps[ops.propertyName] = ops.value;
  }

  product
    .update({ _id: id }, { $set: updateOps })
    .exec()
    .then((result) => {
      console.log("Product updated successfully with id", id);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log("Cannot update the product", err);
      res.status(500).json(err);
    });
};
