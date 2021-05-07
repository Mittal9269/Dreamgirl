// const product = require("../models/Product");

// exports.newProduct = (req , res) =>{
//     const Product = new product ({
//         ProductName : req.body.ProductName,
//         Prize : req.body.Prize,
//         Size : req.body.Size,
//         Available : req.body.Available,
//         Color : req.body.Color,
//         ImgFront : req.body.ImgFront,
//         ImgLeft : req.body.ImgLeft,
//         ImgRight :req.body.ImgRight
//     })
//     Product.save().then((new_user,err)=>{
//         if(err){
//            return res.status(500).json({error:"Server Error"})
//         }
        
//         res.status(200).json({message:"Product save successfully"})
//     })
//     .catch(err=>{
//         res.status(400).json({message:"save Error, Please Try Again",err})
//     })
// }

// exports.fetchproduct = (req, res) => {
//     product.find()
//     .then(fetchedCategary=>res.json(fetchedCategary))
//     .catch(err => console.log(err))
// }