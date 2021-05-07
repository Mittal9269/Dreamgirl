//helper file


import React, { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";
// import CategaryCard from "./CategaryCard";
export default function Product(){
    const [redirect , setRedirect] = useState(false);
    let Cate;
    let token
    useEffect(() =>{
        console.log("Hello from useEffect of Categary")
        token = sessionStorage.getItem('Token');
        let data = JSON.parse(sessionStorage.getItem('userInfo'))
        if(data.isAdmin){
            if(token){
                fetch('http://localhost:8000/product/product', {
              method: 'GET',
              headers: {
                'x-auth-token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            })
            .then(res=>res.json())
            .then(data =>{
                sessionStorage.setItem("Cat", JSON.stringify(data));
                // console.log(data);
                window.location = "/product/pro";
                
            })
            .catch(err=>console.log(err));
        }
        }
        else{
            setRedirect(true);
        }
    },[])


    return(
        
        <>
            {redirect &&  <Redirect to="/api/login" />}
            Hello Everyone
        </>
    )
}