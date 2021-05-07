import React from "react";
import {Switch , Route} from "react-router-dom";
import Navbar from "./Navbar";
import Signin from "./User/Signin"; 
import Login from "./User/Login"; 
import Home from "./User/Home";
import Recover from "./User/Recover";
import User from "./User/User";
import Update from "./User/Update";
import AdminHome from "./Admin/AdminHome";
import Logout from "./Logout";
import Categary from "./Admin/Categary";
import Cate from "./Admin/CategaryCard";
import Add from "./Admin/Add";
import Product from "./Admin/Product";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Footer from "./User/Footer";
import Shop from "./User/Shop";

function App() {
  return (
    <>
    <Navbar />
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
        <Route exact path="/categery/cate" component={Cate} />
        <Route exact path="/categery/update" component={Add} />
        <Route exact path="/categery/shop" component={Shop} />
        {/* <Route exact path="/product/product" component={Product} /> */}
      </Switch>
    <Footer />
    </>
  );
}

export default App;
