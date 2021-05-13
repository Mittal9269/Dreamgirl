import React, { useEffect, useState } from "react";
import  { Redirect } from 'react-router-dom';
import Navbar from "../FormType/Navbar";

export default function Cart(){
    const [redirect,setRedirect] = useState(false);
    const [data ,Setdata] = useState({
        
    });
    useEffect(() => {
        let token = sessionStorage.getItem("Token");
        if(token){
            let array = [];
            let userInfo  = JSON.parse(sessionStorage.getItem("userInfo")); 
            Setdata(userInfo)       

        }else{
            setRedirect(true);
        }
    }, [])
    const onSub = (e) =>{
        e.preventDefault();
        window.location = "/api/update_user"
    }
    return(
        <>
            <Navbar />
            <h1 className = "text-center">Hello here are your Cart</h1>
            {redirect && <Redirect to="/api/login" />}
            <ul>
                <li>{data.history}</li>
            </ul>
        </>
    )
}