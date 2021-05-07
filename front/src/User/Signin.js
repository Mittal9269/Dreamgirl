import React, { useEffect, useState } from 'react';
import { Redirect } from "react-router-dom";
import "./Form.css"
import Logo from "../Images/logo.png";
// import axios from 'axios';

export default function Signin() {
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        if (sessionStorage.getItem('Token')) {
            setRedirect(true);
        }
    })
    const [data, setData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        verifyPassword: "",
        email: ""
    })
    const eventInput = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    const formSubmit = (e) => {
        e.preventDefault();
        const registerd = {
            username: data.username,
            password: data.password,
            verifyPassword: data.verifyPassword,
            firstName: data.firstName,
            lastName: data.lastName,
            email: data.email
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
            .then(res => console.log(res))
            .catch(err => console.log(err));
        // axios.post('http://localhost:8000/api/signup',registerd)
        // .then(Response => console.log(Response))
        // .catch(err => console.log(err));

        // window.location = '/api/login';

    }
    return (
        <>
            {redirect && <Redirect to="/" />}
            <div class="container px-4 py-5 mx-auto">
                <div class="card card0">
                    <div class="d-flex flex-lg-row flex-column-reverse">
                        <div class="card card1">
                            <div class="row justify-content-center my-auto">
                                <div class="col-md-8 col-10 my-5">
                                    <div class="row justify-content-center px-3 mb-3"> <img id="logo" src={Logo} /> </div>
                                    <h3 class="mb-5 text-center heading">We are DreamGirl</h3>
                                    <h6 class="msg-info">Please login to your account</h6>

                                    <form onSubmit={formSubmit}>
                                        <div class="form-group">
                                            <label class="form-control-label text-muted">Username</label>
                                            <input type="text" 
                                                placeholder="Enter username" name="username"
                                                value={data.username}
                                                onChange={eventInput}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-muted">Password</label>
                                            <input type="password" placeholder="Enter password" 
                                                value={data.password}
                                                onChange={eventInput}
                                                name="password"  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-muted">verify Password</label>
                                            <input type="password" placeholder="Enter password" 
                                                value={data.verifyPassword}
                                                onChange={eventInput}
                                                name="verifyPassword"  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-muted">First Name</label>
                                            <input type="text" 
                                                placeholder="Enter firstname" name="firstName"
                                                value={data.firstName}
                                                onChange={eventInput}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-muted">Last Name</label>
                                            <input type="text" 
                                                placeholder="Enter lastname" name="lastName"
                                                value={data.lastName}
                                                onChange={eventInput}  />
                                        </div>
                                        <div class="form-group">
                                            <label class="form-control-label text-muted">Email Address</label>
                                            <input type="email" 
                                                placeholder="Enter Email" 
                                                name="email"
                                                value={data.email}
                                                onChange={eventInput}  />
                                        </div>
                                        <div class="row justify-content-center my-3 px-3">
                                            <button type="submit" class="btn-block btn-color">Sign In to DreamGirl</button>
                                        </div>
                                    </form>

                                </div>
                            </div>
                            <div class="bottom text-center mb-5">
                                <p href="#" class="sm-text mx-auto mb-3">Already have an account?<button class="btn btn-white ml-2">Login </button></p>
                            </div>
                        </div>
                        <div class="card card2">
                            <div class="my-auto mx-md-5 px-md-5 right">
                                <h3 class="text-black">We are more than just a company</h3> <small class="text-black">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}