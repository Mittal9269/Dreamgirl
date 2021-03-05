const mogoose = require('mongoos');
const { Mongoose } = require('mongoose');
const fs = require('fs');

const CategarySchema = new Mongoose.Schema({
    Categary : {
        type : String, 
        required : true
    }
});

const Categary = mongoose.model("categary",CategarySchema);
module.exports = Categary;

