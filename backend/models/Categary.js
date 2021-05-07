const mongoose = require('mongoose');
// const { Mongoose } = require('mongoose');
const fs = require('fs');

const CategarySchema = new mongoose.Schema({
    Categary : {
        type : String, 
        required : true
    }
});

const Categary = mongoose.model("categary",CategarySchema);
module.exports = Categary;

