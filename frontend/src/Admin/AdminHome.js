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
    return(
        <>
            {redirect &&  <Redirect to="/api/login" />}
            Hello Admin
        </>
    )
}