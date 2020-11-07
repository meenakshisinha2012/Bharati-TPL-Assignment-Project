const mongoose = require("mongoose");

const User = require("../models/user");

exports.show_product = (req, res, next) => {

  res.status(200).json({ msg: "show-products works" })

};

exports.add_product = (req, res, next) => {
  const name=req.body.name;
  res.status(200).json({ msg: name })
};

exports.user_delete = (req, res, next) => {
  res.status(200).json({ msg: "user_delete works" })

};
