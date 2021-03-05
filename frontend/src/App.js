import React from "react";
import {Switch , Route} from "react-router-dom";
import Navbar from "./Navbar";
import Signin from "./Signin"; 
import Login from "./Login"; 
import Home from "./Home";
import Recover from "./Recover";
function App() {
  return (
    <>
    <Navbar />
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/api/signup" component={Signin} />
        <Route exact path="/api/login" component={Login} />
        <Route exact path="/api/recover" component={Recover} />
      </Switch>
    </>
  );
}

export default App;
