import { NavLink } from "react-router-dom";
import React, { useEffect } from "react";
import "../User/homeproducts.css";

export default function Navbar() {
  const Fun = () => {
    if (sessionStorage.getItem('Token') && sessionStorage.getItem('Token') !== undefined) {
      let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (userInfo !== null && userInfo.isAdmin) {
        return (
          <>
            <li className="nav-item active">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link"
                to="/api/admin"
              >

                Home <span className="sr-only">(current)</span>
              </NavLink>
            </li>
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
      } else if (userInfo !== null && userInfo.isCustomer) {
        return (
          <>
            <li className="nav-item active">
              Hello {userInfo.username}
            </li>
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
            <li className="nav-item active">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link"
                to="/api/user"
              >
                Profile <span className="sr-only">(current)</span>
              </NavLink>
            </li>
            <li className="nav-item active">
              <NavLink
                exact
                activeClassName="menu_active"
                className="nav-link"
                to="/api/cart"
              >
                Cart <span className="sr-only">(current)</span>
              </NavLink>
            </li>
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
                to="/api/logout"
              >
                Logout
                  </NavLink>
            </li>
          </>
        )
      }
      // else{
      //   // window.location = "/api/signup";
      // }
    } else {
      return (
        <>
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
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto nav-color">
            <nav className="navbar navbar-expand-lg">
              <NavLink exact className="navbar-brand" to="/">
                GopalTredars
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
                <span className="navbar-toggler-icon">TTT</span>
              </button>

              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  {/* <div class="search-button">
                    <a href="..." class="search-toggle ml-2" data-selector="#header-1"></a>
                  </div> */}
                  <Fun />
                </ul>
              </div>
            </nav>
            {/* <form action="" class="search-box">
              <input type="text" class="text search-input" placeholder="Type here to search..." />
            </form> */}
          </div>
        </div>
      </div>
    </>
  )
}