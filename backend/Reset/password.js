const User = require('../models/user');
const nodemailer = require("nodemailer");
// const sgMail = require('@sendgrid/mail');
const jwt = require("jsonwebtoken");

const transport = nodemailer.createTransport({
    service:"Gmail",
    secure:false,
    port:25,
    auth:{
        user:process.env.FROM_EMAIL,
        pass:process.env.EMAIL_PASSWORD 
    },tls:{
        rejectUnauthorized: false 
    }
}); 
// @route POST api/auth/recover    
// @desc Recover Password - Generates token and Sends password reset email same
// @access Public
exports.recover = (req, res) => {
    console.log(req);
    // 1. Find user with email
    User.findOne({email: req.body.email})
        .then((user,err) => {
            if(!user || err){
                return res.status(404).json({error:"User with given Email is not found. Please check Your Email."});
            }
            //2. Token Generation
            try{
                jwt.sign({id:user._id},process.env.JWT_SECRET,{expiresIn:"1h"},(err,token)=>{
                    // console.log(err);
                    if(err) throw err;
                    user.resetToken = token;
                    user.expireToken = Date.now() + 3600000;
                    user.save().then((result)=>{
                        transport.sendMail({
                            from:process.env.FROM_EMAIL,
                            to:user.email,
                            subject:"Password Reset.",
                            html:`<p>Your Request For Password Reset.</p>
                                    <h5>Click on the <a href="http://${req.headers.host}/api/reset/${token}">Link</a></h5>` 
                        },(err,data)=>{
                            if(err){ 
                                throw err;
                            }
                            console.log("Email Sent Successfully");
                            return res.status(200).json({message:"Please Check Your Mail."});
                        }) 
                    }) 
                })   
            }catch(err){ 
                res.status(501).json({error:"Internal Server Error"});
            }
        }).catch(err => {
            console.log(err)
            res.status(500).json({message: err.message})
        });
        // 
};

// @route POST api/auth/reset
// @desc Reset Password - Validate password reset token and shows the password reset vie
// @access Public
exports.reset = (req, res) => {
    User.findOne({resetToken: req.params.token, expireToken: {$gt: Date.now()}})
        .then((user) => {
            console.log(user);
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

            //Redirect user to form with the email address
            res.status(201).json({message: 'form will appear soon.'})
        })
        .catch(err => res.status(500).json({message: err.message}));
};


// @route POST api/auth/reset
// @desc Reset Password
// @access Public
exports.resetPassword = (req, res) => {
    User.findOne({resetToken: req.params.token, resetPasswordExpires: {$gt: Date.now()}})
        .then((user ,err) => {
            if (!user) return res.status(401).json({message: 'Password reset token is invalid or has expired.'});

            //Set the new password
            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpires = undefined;

            // Save
            user.save((err) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({message: err.message});
                }

                // send email
                const mailOptions = {
                    to: user.email,
                    from: process.env.FROM_EMAIL,
                    subject: "Your password has been changed",
                    text: `Hi ${user.username} \n 
                    This is a confirmation that the password for your account ${user.email} has just been changed.\n`
                };

                sgMail.send(mailOptions, (error, result) => {
                    if (error){
                        console.log(error);
                        return res.status(500).json({message: error.message});
                    } 

                    res.status(200).json({message: 'Your password has been updated.'});
                });
            });
        });
};