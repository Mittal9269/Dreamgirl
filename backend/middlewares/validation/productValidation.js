const express = require("express");
const { body, validationResult } = require("express-validator");


exports.validateNewProduct = [
    body("ProductName")
        .isLength({
            min:2,
        })
        .withMessage("must contain atleast 2")
        .escape(),
    (req,res,next)=>{
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(401)
                .json({
                    message: errors.errors[0].param + " " + errors.errors[0].msg,
                    errors
                });
        }
        next();
    }
];
