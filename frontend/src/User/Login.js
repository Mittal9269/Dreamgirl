import React, { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";

export default function Login(){
    let token;
    const [data, setData] = useState({
        username : "",
        password : "",
        verifyPassword : ""
    })
    const [redirect , setRedirect] = useState(false);
    useEffect(() =>{
        if(sessionStorage.getItem('Token')){
            setRedirect(true);
        }
    },[])
    const InputData = (event) =>{
        const { name, value } = event.target;
        setData((preValue) =>{      
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    const LoginSubmit = (e) =>{
        e.preventDefault();
        const login = {
            username: data.username,
            password: data.password,
            verifyPassword:data.verifyPassword,
        }

        fetch('http://localhost:8000/api/login', {
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(login)
            })
            .then(res=>res.json())
            .then(data=>{
                token = data.jsonToken;
                sessionStorage.setItem("Token", token);
                if(token){
                    fetch('http://localhost:8000/api/user', {
                  method: 'GET',
                  headers: {
                    'x-auth-token': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                  }
                })
                .then(res=>res.json())
                .then(data =>{
                    sessionStorage.setItem("userInfo", JSON.stringify(data));
                    // console.log(data);
                    if(data.isAdmin){
                        window.location = "/api/Admin";
                    }
                    else{
                        window.location = "/api/user";
                    }
                })
                .catch(err=>console.log(err));
                }
                else{
                    console.log("no one");
                }
            })
            .catch(err=>console.log(err));
        // axios.post('http://localhost:8000/api/signup',registerd)
        // .then(Response => console.log(Response))
        // .catch(err => console.log(err));
        
    }
    const ForgetSubmit = (e) =>{
        e.preventDefault();
        window.location = "/api/recover";
    }
    return(
        <>
        {redirect && <Redirect to="/" />}
        <form onSubmit={LoginSubmit}>
            <input 
            type="text" 
            placeholder="Username" 
            name="username"
            value={setData.username}
            onChange={InputData}
            />
            <input 
            type="password" 
            placeholder="password" 
            name="password"
            value={setData.password}
            onChange={InputData}
            />
            <input 
            type="password" 
            placeholder="conform pasword" 
            name="verifyPassword"
            value={setData.verifyPassword}
            onChange={InputData}
            />

            <button type="submit">Submit</button>
        </form>
        <form onSubmit={ForgetSubmit}>
            <button type="submit">Forget password</button>
        </form>
        </>
    )
}