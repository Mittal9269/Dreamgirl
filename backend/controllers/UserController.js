const user = require("../models/user");
const bcrypt = require("bcrypt");
const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

//@function For Saving New User in DataBase 
//@param {req} request Object
//@param {res} response Object
exports.createNewUser = (req,res)=>{
    //Check password and verify password.
    if(req.body.password !== req.body.verifyPassword){
        return res.status(400).json({message:"Password Doesn't match"})
    }
    //encrypting Password and save the user
    const User = new user({
        username:req.body.username,
        password:req.body.password,
        firstName:req.body.firstName,
        lastName:req.body.lastName,
        email:req.body.email,
        isAdmin:false,
        isCustomer:true,
        isRestricted:false
    });
    bcrypt.genSalt(12,(err,salt)=>{
        if(err) throw err;

        bcrypt.hash(User.password,salt,(err,hashedPassword)=>{
            if(err) throw err;

            User.password = hashedPassword;
            User.save().then((new_user,err)=>{
                if(err){
                   return res.status(500).json({error:"Server Error"})
                }
                res.status(200).json({message:"SuccesFully Registered"})
            })
            .catch(err=>{
                console.log(err);
                res.status(400).json({message:"Registeration Error, Please Try Again",err})
            })
        })
    })
}

//@function For Logi
//@param {req} request Object
//@param {res} response Object
exports.login = (req,res)=>{
    console.log(req.body);
    if(req.body.password !== req.body.verifyPassword){
        return res.status(400).json({message:"Password Doesn't match"})
    }
    user.findOne({username:req.body.username}).exec((err,foundUser)=>{
        if(err) return res.json(err);
        if(!foundUser) return res.status(400).json({message:"Username not Found. Please Register or Try Again"});

        //Generate Token
        jwt.sign(
            {
                id:foundUser._id,
                isAdmin:foundUser.isAdmin,
                isCustomer:foundUser.isCustomer,
                isRestricted:foundUser.isRestricted
            },process.env.JWT_SECRET,
            { expiresIn: "2d"},
            (err,jsonToken)=>{
                if(err) throw err;
                else{
                    foundUser.password = undefined;
                    res.json({jsonToken,message:"Login SuccesFully Done.",user:foundUser});
                    // console.log(foundUser);
                    // req.cookie("jwt" , jwt , {
                    //     expires : new Date(Date.now() + 1000),
                    // })
                }
            }
        )
    })
}  
//@function For getting user Detail
//@reuturn user details
exports.fetchUser = (req,res)=>{
    user.findById(req.user.id)
        .select("-password")
        .then(fetchedUser=>res.json(fetchedUser));
}
//@function For Updating User Details
exports.userUpdate = (req,res)=>{
    //Find user in database
    user.findById(req.user.id,(err,foundUser)=>{
        if(err)
            return res.json({message:"Error in Fecching User, please try again."});
        if(!foundUser)
            return res.json({message:"User Doesn't exist, please register."});
        
        updatedUser = {
            username:req.body.username,
            password:req.body.password,
            firstName:req.body.firstName,
            lastName:req.body.lastName,
            email:req.body.email,
            isAdmin:false,
            isCustomer:true,
            isRestricted:false
        }
        // const updateUser = user.findByIdAndDelete(req.body.id , req.body);
        bcrypt.genSalt(12,(err,salt)=>{
            if(err) throw err;
    
            bcrypt.hash(updatedUser.password,salt,(err,hashedPassword)=> {
                if(err) throw err;
    
                updatedUser.password = hashedPassword;
                user.findByIdAndUpdate(req.user.id , updatedUser , {
                    new : true, 
                    useFindAndModify : false 
                }).then((new_user,err)=>{
                    if(err){
                       return res.status(500).json({error:"Server Error"})
                    }
                    
                    res.status(200).json({message:"SuccesFully Updated"})
                })
                .catch(err=>{
                    res.status(400).json({message:"Updation Error, Please Try Again",err})
                })
            })
        })
    });
}



