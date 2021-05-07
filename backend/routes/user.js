const express = require("express");
const router = express.Router();
const user_controller = require("../controllers/UserController");
const {check} = require('express-validator');
const {auth} = require("./../middlewares/auth");
const user_validator = require("../middlewares/validation/userValidation");
const Password = require("../Reset/password");
const { route } = require("./product");
// @route POST api/signup
// send user data For signup
// @access public
router.post("/signup",user_validator.validateNewUser,user_controller.createNewUser);

// @route POST api/login    
// send user data for login
// @access Public  
router.post("/login",user_validator.loginUser,user_controller.login);
// @route GET api/user
// @desc get user data
// @access private
router.get("/user",auth,user_controller.fetchUser);
// @route GET api/Admin
// @desc get user data
// @access private
router.get("/Admin",auth,user_controller.fetchUser);
// @route POST api/update_user
// @access private
router.put("/update_user",
auth,
user_validator.userUpdate,
user_controller.userUpdate
)
//Password RESET
router.post('/recover', [
    check('email').isEmail().withMessage('Enter a valid email address'),
], Password.recover);

router.get('/reset/:token', Password.reset);

router.post('/reset/:token', [
    check('password').not().isEmpty().isLength({min: 6}).withMessage('Must be at least 6 chars long'),
    check('confirmPassword', 'Passwords do not match').custom((value, {req}) => (value === req.body.password)),
], Password.resetPassword);

module.exports = router;
