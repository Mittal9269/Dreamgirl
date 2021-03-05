const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const product = require("../models/Product");
const product_validate = require("../middlewares/validation/productValidation");
const product_control = require("../controllers/ProductController");

router.post("/product" , product_validate.validateNewProduct , product_control.newProduct);

module.exports = router;