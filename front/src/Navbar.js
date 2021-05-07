import {NavLink} from "react-router-dom";
import React, { useEffect } from "react";

export default function Navbar(){
    const Fun = () =>{
        if(sessionStorage.getItem('Token')){
            return (
                <>
                <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/api/logout"
                    >
                      Logout
                    </NavLink>
                  </li>
                </>
            )
        }else{
            return (
                <>
                <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/categery/shop"
                    >
                      Shop
                    </NavLink>
                  </li>
                <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/api/signup"
                    >
                      Signin
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/api/login"
                    >
                      Login
                    </NavLink>
                  </li>
                </>
            )
          
        }
    }
    return(
        <>
        <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg">
              <NavLink exact className="navbar-brand" to="/">
                DreamGirl
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item active">
                    <NavLink
                      exact
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  <Fun />
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>
        </>
    )
}