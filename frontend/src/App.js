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
      </Switch>
    </>
  );
}

export default App;
