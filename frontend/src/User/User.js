import React, { useEffect, useState } from "react";
import  { Redirect } from 'react-router-dom';

export default function User(){
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
            Hello User data
            {redirect && <Redirect to="/api/login" />}
            <ul>
                <li>{data.username}</li>
                <li>{data.firstName}</li>
                <li>{data.lastName}</li>
                <li>{data.history}</li>
            </ul>
            <form onSubmit={onSub}>
                <button>Update</button>
            </form>
        </>
    )
}