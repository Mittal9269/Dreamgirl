import React, { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";

export default function AdminHome(){
    const [redirect , setRedirect] = useState(false);
    useEffect(() =>{
        let Token = sessionStorage.getItem('Token');
        let data = JSON.parse(sessionStorage.getItem('userInfo'))
        if(data.isAdmin){

        }
        else{
            setRedirect(true);
        }
    },[])
    const onSub = (e) =>{
        e.preventDefault();
        window.location.replace("http://localhost:3000/categery/categery");
    }
    const onS = (e) =>{
        e.preventDefault();
        window.location.replace("http://localhost:3000/product/product");
    }
    return(
        <>
            {redirect &&  <Redirect to="/api/login" />}
            Hello Admin
            <form onSubmit={onSub}> 
                <button>Product</button>
            </form>
            <form onSubmit={onS}>
                <button>ProductReal</button>
            </form>
        </>
    )
}