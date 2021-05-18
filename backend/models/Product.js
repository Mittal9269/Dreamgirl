const mongoose = require('mongoose');
// const { Mongoose } = require('mongoose');
// const fs = require('fs');

const ProductSchema = new mongoose.Schema({
    ProductName :{
        type : String, 
        required : true,
    },
    Prize : {
        type: Number,
        required : true,
    },
    Quantity : {
        type : Number,
        required : true, 
    },
    Available : {
        type : String, 
        required : true,
    },
    ImgFront: { 
        // data: Buffer, 
        // contentType: String ,
        type : String,
        required : true, 
    },
    categary : {
        type : String,
        required : true
    },
    Discription :{
        type : String,
        required : true
    },
    Section : {
        type : String,
        required : true
    },
    DisCount :  {
        type : Number, 
        default: 0,
    }

});
const product = mongoose.model("product",ProductSchema);
module.exports = product;





// mongoose.connection.on('open', function () {
//     console.error('mongo is open');
  
//     product.remove(function (err) {
//       if (err) throw err;
  
//       console.error('removed old docs');
  
//       // store an img in binary in mongo
//       let a = new product;
//       a.img.data = fs.readFileSync(imgPath);
//       a.img.contentType = 'image/png';
//       a.save(function (err, a) {
//         if (err) throw err;
  
//         console.error('saved img to mongo');
  
//         // start a demo server
//         var server = express.createServer();
//         server.get('/', function (req, res, next) {
//           A.findById(a, function (err, doc) {
//             if (err) return next(err);
//             res.contentType(doc.img.contentType);
//             res.send(doc.img.data);
//           });
//         });
  
//         server.on('close', function () {
//           console.error('dropping db');
//           mongoose.connection.db.dropDatabase(function () {
//             console.error('closing db connection');
//             mongoose.connection.close();
//           });
//         });
  
//         server.listen(3333, function (err) {
//           var address = server.address();
//           console.error('server listening on http://%s:%d', address.address, address.port);
//           console.error('press CTRL+C to exit');
//         });
  
//         process.on('SIGINT', function () {
//           server.close();
//         });
//       });
//     });
  
//   });