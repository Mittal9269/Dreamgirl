const express = require("express");
const { model } = require("mongoose");
const router = express.Router();
const categary = require("../models/Categary");
const categary_validate = require("../middlewares/validation/categeryValidation");
const categary_control = require("../controllers/CategeryController");


router.get("/categery" , categary_control.fetchcategary);

router.post("/categery" , categary_validate.validateNewCategary , categary_control.newCategary);

router.put('/categery/:id' , categary_control.updateCategary)

router.delete('/categery/:id' , categary_control.deleteCategary)

module.exports = router;