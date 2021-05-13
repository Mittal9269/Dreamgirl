const categary = require("../models/Categary");

exports.newCategary = (req , res) =>{
    const Categary = new categary ({
        Categary : req.body.Categary
    })
    Categary.save().then((new_user,err)=>{
        if(err){
           return res.status(500).json({error:"Server Error"})
        }
        
        res.status(200).json({message:"Categery save successfully"})
    })
    .catch(err=>{
        res.status(400).json({message:"save Error, Please Try Again",err})
    })
}

exports.fetchcategary = (req, res) => {
    categary.find()
    .then(fetchedCategary=>res.json(fetchedCategary))
    .catch(err => console.log(err))
}

exports.updateCategary = (req, res)=>{
    categary.findById(req.params.id,(err,foundUser)=>{
        // console.log(req.categary.id)
        if(err)
            return res.json({message:"Error in Fecching Categary, please try again."});
        if(!foundUser)
            return res.json({message:"Categary Doesn't exist, please register."});
            updatedUser = {
                Categary : req.body.Categary
            }
            // console.log(req.body)
            categary.findByIdAndUpdate(req.params.id , updatedUser , {
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

exports.deleteCategary = (req ,res) =>{
    // console.log(req.params.id);
    categary.findById(req.params.id,(err,foundCategary)=>{
        if(err)
            return res.json({message:"Error in Fecching Categary, please try again."});
        if(!foundCategary)
            return res.json({message:"Categary Doesn't exist, please register."});
            updatedDelete = {
                Categary : req.body.Categary
            }
            categary.findByIdAndDelete(req.params.id 
                // new : true, 
                // useFindAndModify : false 
            ).then((new_user,err)=>{
                if(err){
                   return res.status(500).json({error:"Server Error"})
                }
                
                res.status(200).json({message:"SuccesFully Deleted"})
            })
            .catch(err=>{
                res.status(400).json({message:"Updation Error, Please Try Again",err})
            })
    })
}