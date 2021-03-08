import React, { useEffect, useState } from 'react';
import {Redirect} from "react-router-dom";
// import axios from 'axios';

export default function Signin(){
    const [redirect , setRedirect] = useState(false);
    useEffect(() =>{
        if(sessionStorage.getItem('Token')){
            setRedirect(true);
        }
    })
    const [data, setData] = useState({
        username :"",
        firstName : "",
        lastName :"",
        password :"",
        verifyPassword:"",
        email :""
    })
    const eventInput = (event) =>{
        const { name, value } = event.target;
        setData((preValue) =>{      
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    const formSubmit = (e) =>{
        e.preventDefault();
        const registerd = {
            username: data.username,
            password: data.password,
            verifyPassword:data.verifyPassword,
            firstName:data.firstName,
            lastName:data.lastName,
            email:data.email
        }
        console.log("hello");
        console.log(registerd);
        fetch('http://localhost:8000/api/signup', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(registerd),
              credentials: "same-origin"
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        // axios.post('http://localhost:8000/api/signup',registerd)
        // .then(Response => console.log(Response))
        // .catch(err => console.log(err));

        window.location = '/api/login';
       
    }
    return(
    <>
        {redirect && <Redirect to="/" /> }
        <form onSubmit={formSubmit}>
        <input 
        type="text" 
        placeholder="Enter username" name="username"
        value={data.username}
        onChange={eventInput}
        />
        <input type="password" placeholder="Enter password" 
        value={data.password}
        onChange={eventInput}
        name="password"

        />
        <input type="password" placeholder="Enter con password" name="verifyPassword"
        value={data.verifyPassword}
        onChange={eventInput}
        />
        <input type="text" 
        placeholder="Enter firstname" name="firstName"
        value={data.firstName}
        onChange={eventInput}

        />
        <input type="text" 
        placeholder="Enter lastname" name="lastName"
        value={data.lastName}
        onChange={eventInput}

        />
        <input type="email" 
        placeholder="Enter Email" 
        name="email"
        value={data.email}
        onChange={eventInput}
        />
        <button type="submit">Submit</button>
        </form>
    </>
    )
}