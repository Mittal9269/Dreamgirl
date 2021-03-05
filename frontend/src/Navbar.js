import {NavLink} from "react-router-dom";
import React from "react";

export default function Navbar(){
    return(
        <>
        <ul>
        <li>
        <NavLink exact to="/">
            Home
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/api/signup">
            Signin
        </NavLink>
        </li>
        <li>
        <NavLink exact to="/api/login">
            Login
        </NavLink>
        </li>
        </ul>
        </>
    )
}