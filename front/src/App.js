import React from "react";
import {Switch , Route} from "react-router-dom";
import Navbar from "./FormType/Navbar";
import Signin from "./FormType/Signin"; 
import Login from "./FormType/Login"; 
import Home from "./User/Home";
import Recover from "./User/Recover";
import User from "./User/User";
import Update from "./User/Update";
import AdminHome from "./Admin/AdminHome";
import Logout from "./FormType/Logout";
import Categary from "./Admin/Categary/Categary";
import Add from "./Admin/Categary/Add";
import Product from "./Admin/Product/Product";
import "../node_modules/jquery/dist/jquery.min.js";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./FormType/Footer";
import Shop from "./User/Shop";
import ProductCard from "./Admin/Product/ProductCard";
import UpdateProduct from "./Admin/Product/UpdateProduct";
import Cart from "./User/Cart";
import ShopInfo from "./User/CardInfo/CardInfo";
import Reset from "./User/Reset";

function App() {
  console.log("conform everyone");
  return (
    <>
    {/* <Navbar /> */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/api/signup" component={Signin} />
        <Route exact path="/api/login" component={Login} />
        <Route exact path="/api/recover" component={Recover} />
        <Route exact path="/api/user" component={User} />
        <Route exact path="/api/Admin" component={AdminHome} />
        <Route exact path="/api/logout" component={Logout} />
        <Route exact path="/api/update_user" component={Update} />
        <Route exact path="/categery/categery" component={Categary} />
        <Route exact path="/product/Product" component={Product} />
        <Route exact path="/product/update" component={ProductCard} />
        <Route exact path="/product/updateProduct/:id" component={UpdateProduct} />
        <Route exact path="/categery/update" component={Add} />
        <Route exact path="/categery/shop" component={Shop} />
        <Route exact path="/shopInfo/:id" component={ShopInfo} />
        <Route exact path="/api/reset/:id" component={Reset} />
        <Route exact path="/api/cart" component={Cart} />
        {/* <Route exact path="/product/product" component={Product} /> */}
      </Switch>
    <Footer />
    </>
  );
}

export default App;
