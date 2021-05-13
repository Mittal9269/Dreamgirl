require("dotenv").config();
const bodyParser = require('body-parser');
const express =  require('express');
const mongoose = require('mongoose');
const path = require("path");
const cors = require("cors");
const hbs = require('hbs');
const app = express();
//import Routes 
const userAuth = require("./routes/user.js");
const ProductRouter = require("./routes/product");
const CategaryRouter = require("./routes/categery");

//DataBase Connections
mongoose.connect(process.env.MONGO_URL, {useNewUrlParser: true , useUnifiedTopology: true,useCreateIndex: true});

//Middlewares
app.use(cors({origin:"http://localhost:3000" ,credentials : true}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// ENDPOINTS
app.use("/api",userAuth);
app.use("/product" ,ProductRouter);
app.use("/categery" ,CategaryRouter);
// app.get('/api/')

app.listen(process.env.PORT || 8000, ()=>{
    console.log(`The application started successfully on port 8000`);
});


//Reference
// https://www.freecodecamp.org/news/how-to-make-input-validation-simple-and-clean-in-your-express-js-app-ea9b5ff5a8a7/#:~:text=Why%20do%20we%20need%20server%2Dside%20validation%3F&text=If%20you%20have%20been%20building,the%20request%20body%20param%20query%20.&text=In%20this%20tutorial%2C%20you'll,validate%20input%20in%20an%20Express.