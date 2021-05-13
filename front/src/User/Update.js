import React, { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";
import Navbar from "../FormType/Navbar";

export default function Update(){
    const [redirect , setRedirect] = useState(false);
    const [data,setData] = useState({
        username : "",
        firstName : "",
        lastName : "",
        password : "",
        verifyPassword : "",
        email : ""
    })
    useEffect(() =>{
        let token = sessionStorage.getItem('Token');
        if(token){
            let userInfo  = JSON.parse(sessionStorage.getItem("userInfo")); 
            // console.log(userInfo.username);
            setData({
                username : userInfo.username,
                firstName : userInfo.firstName,
                lastName  : userInfo.lastName,
                password : "",
                verifyPassword : "",
                email :  userInfo.email
            })
            // console.log(data);
        }
        else{
            setRedirect(true);
        }
    },[])
    const InputChange = (event) =>{
        const { name, value } = event.target;
        setData((preValue) =>{      
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    const onSub = (e) =>{
        e.preventDefault();
        console.log("Hello evryone")
        const update = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password,
            verifyPassword : data.verifyPassword,
            email: data.email
        }
        // console.log(update);
        const token = sessionStorage.getItem('Token');
        fetch('http://localhost:8000/api/update_user',{
            method: 'PUT',
            headers:{
                'x-auth-token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update)
        }).then(res=>res.json())
        .then(res=>{
            sessionStorage.setItem("userInfo" , JSON.stringify(res.user))
            window.location = "/api/user"
        })
        .catch(err=>console.log(err));
    }
    return (
        <>
            <Navbar />
            {redirect && <Redirect to="/api/login" />}
            <form onSubmit={onSub}>
                <input 
                type="text" 
                placeholder="Enter your username"
                value={data.username}
                onChange={InputChange}
                name="username"
                 />
                <input 
                type="text" 
                placeholder="Enter your FirstName"
                value={data.firstName}
                onChange={InputChange}
                name="firstName"
                 />
                <input 
                type="text" 
                placeholder="Enter your lastName"
                value={data.lastName}
                onChange={InputChange}
                name="lastName"
                 />
                <input 
                type="password" 
                placeholder="Enter New password"
                value={data.password}
                onChange={InputChange}
                name="password"
                 />
                <input 
                type="password" 
                placeholder="Enter New con password"
                value={data.verifyPassword}
                onChange={InputChange}
                name="verifyPassword"
                 />
                <input 
                type="email" 
                placeholder="Enter your Email"
                value={data.email}
                onChange={InputChange}
                name="email"
                 />
                 <button type="submit">Submit</button>
            </form>
        </>
    )
}