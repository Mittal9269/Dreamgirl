const product = require("../models/Product");

exports.newProduct = (req , res) =>{
    
    const Product = new product ({
        ProductName : req.body.ProductName,
        Prize : req.body.Prize,
        Quantity : req.body.Quantity,
        Available : req.body.Available,
        ImgFront : req.body.ImgFront,
        categary : req.body.categary,
        Discription : req.body.Discription,
        Section  : req.body.Section
    })

    Product.save().then((new_user,err)=>{
        // console.log(new_user)
        if(err){
           return res.status(500).json({error:"Server Error"})
        }
        
        res.status(200).json({message:"Product save successfully"})
    })
    .catch(err=>{
        res.status(400).json({message:"save Error, Please Try Again",err})
    })
}

exports.fetchproduct = (req, res) => {
    product.find()
    .then(fetchedCategary=>res.json(fetchedCategary))
    .catch(err => console.log(err))
}
exports.fetchSingleProduct = (req, res) => {
    product.findById({_id:req.params.id})
    .then(fetchedProduct=>res.json(fetchedProduct))
    .catch(err => console.log(err))
}

exports.updateProduct = (req, res)=>{
    product.findById(req.params.id,(err,foundUser)=>{
        // console.log(req.categary.id)
        if(err)
            return res.json({message:"Error in Fecching Categary, please try again."});
        if(!foundUser)
            return res.json({message:"Categary Doesn't exist, please register."});
            updatedPro = {
                ProductName : req.body.ProductName,
                Prize : req.body.Prize,
                Quantity : req.body.Quantity,
                Available : req.body.Available,
                ImgFront : req.body.ImgFront,
                categary : req.body.categary,
                Discription : req.body.Discription,
                Section  : req.body.Section
            }
            // console.log(req.body)
            product.findByIdAndUpdate(req.params.id , updatedPro , {
                new : true, 
                useFindAndModify : false 
            }).then((new_user,err)=>{
                // console.log(new_user)
                if(err){
                   return res.status(500).json({error:"Server Error"})
                }
                
                res.status(200).json({message:"SuccesFully Updated"})
            })
            .catch(err=>{
                res.status(400).json({message:"Updation Error, Please Try Again",err})
            })
    })
}

exports.deleteProduct = (req ,res) =>{
    product.findById(req.params.id,(err,foundProduct)=>{
        if(err)
            return res.json({message:"Error in Fecching Categary, please try again."});
        if(!foundProduct)
            return res.json({message:"Product Doesn't exist, please register."});
            // updatedDelete = {
            //     Categay : req.body.Categary
            // }
            product.findByIdAndDelete(req.params.id 
                // new : true, 
                // useFindAndModify : false 
            ).then((new_user,err)=>{
                if(err){
                   return res.status(500).json({error:"Server Error"})
                }
                
                res.status(200).json({message:"SuccesFully Deleted"})
            })
            .catch(err=>{
                res.status(400).json({message:"Deletion Error, Please Try Again",err})
            })
    })
}

exports.productFilter = (req,res) => {
    let {category,price} = req.body.filters;
    let Args = {};
    if(category.length !== 0){
        Args["categary"] = category;
    }
    for(let key in price){
        Args["Prize"] = {$gte:price[key][0],$lte:price[key][1]}
    }
    if((!("categary" in Args)) && (!("Prize" in Args))){
        product.find({})
        .exec((err,data)=>{
            if(err){
                return res.status(400).json({error:"Products not Found"});
            }
            return res.json(data);
        });
    }else{
        product.find(Args)
            .exec((err,data)=>{
                if(err){
                    return res.status(400).json({error:"Products not Found"});
                }
                return res.json(data);
                });
    }
}

exports.productSearch = (req,res) => {
    // console.log(req.body)
    let Id = req.body.Id;
    let Args = [];
    if(Id.length !== 0){
        Id = Id.replace("_" , " ");
        console.log(Id)
        Args.push({"categary" : Id})
        Args.push({"ProductName" : {$regex: Id , $options: "$i"}});
    }
    
    if(Args.length === 0){
        return res.status(400).json({error:"Products not Found"});
        product.find({})
        .exec((err,data)=>{
            if(err){
                return res.status(400).json({error:"Products not Found"});
            }
            return res.json(data);
        });
    }else{
        product.find({$or : Args})
            .exec((err,data)=>{
                if(err){
                    return res.status(400).json({error:"Products not Found"});
                }
                return res.json(data);
                });
    }
}


exports.RelatedSearch = (req,res) => {
    // console.log(req.body)
    let identity = req.params.id;
    let {Id , ID} = req.body;
    let Args = {};
    // console.log(Id)
    // console.log(ID)
    if(Id.length !== 0){
        Args["categary"] = Id;
    }
    Args["_id"] = {$ne:ID} ;
    if((!("categary" in Args))){
        return res.status(400).json({error:"Products not Found"});
        product.find({})
        .exec((err,data)=>{
            if(err){
                return res.status(400).json({error:"Products not Found"});
            }
            return res.json(data);
        });
    }else{
        product.find(Args)
        // product.find(Args)
            .exec((err,data)=>{
                if(err){
                    return res.status(400).json({error:"Products not Found"});
                }
                return res.json(data);
                });
    }
}