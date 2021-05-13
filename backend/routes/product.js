const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const product = require("../models/Product");
const product_validate = require("../middlewares/validation/productValidation");
const product_control = require("../controllers/ProductController");


router.get("/product" , product_control.fetchproduct);

router.get('/product/:id',product_control.fetchSingleProduct);
router.post("/product" , product_validate.validateNewProduct , product_control.newProduct);

router.put('/product/:id' , product_control.updateProduct)

router.delete('/product/:id' , product_control.deleteProduct)

module.exports = router;