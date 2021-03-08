import {NavLink} from "react-router-dom";
import React, { useEffect } from "react";

export default function Navbar(){
    const Fun = () =>{
        if(sessionStorage.getItem('Token')){
            return (
                <>
                    <li>
                <NavLink exact to="/api/logout">
                    Logout
                </NavLink>
                </li>
                </>
            )
        }else{
            return (
                <>
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
                </>
            )
          
        }
    }
    return(
        <>
        <ul>
        <li>
        <NavLink exact to="/">
            Home
        </NavLink>
        </li>
        <Fun />
        </ul>
        </>
    )
}