import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "../User/Form.css"
import {Switch , Route} from "react-router-dom";
import {NavLink} from "react-router-dom";
import Logo from "../Images/logo.png";
import Navbar from "./Navbar";

export default function Login() {
    let token;
    const [data, setData] = useState({
        username: "",
        password: "",
        verifyPassword: ""
    })
    const [redirect, setRedirect] = useState(false);
    useEffect(() => {
        if (sessionStorage.getItem('Token')) {
            setRedirect(true);
        }
    }, [])
    const InputData = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    const LoginSubmit = (e) => {
        e.preventDefault();
        const login = {
            username: data.username,
            password: data.password,
            verifyPassword: data.verifyPassword,
        }

        fetch('http://localhost:8000/api/login', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(login)
        })
            .then(res => res.json())
            .then(data => {

                token = data.jsonToken;
                // console.log(data)
                if(token !== undefined && token !== null){
                    // console.log(token);
                    sessionStorage.setItem("Token", token);
                    sessionStorage.setItem("userInfo", JSON.stringify(data.user));
                    if (data.user.isAdmin) {
                            window.location = "/api/Admin";
                    }
                    else {
                        window.location = "/api/user";
                    }
                }
                else{
                    alert(data.message)
                }
            })
            .catch(err => console.log(err));

    }
    const ForgetSubmit = (e) => {
        e.preventDefault();
        window.location = "/api/recover";
    }
    return (
        <>
            <Navbar />
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
                                    <form onSubmit={LoginSubmit}>
                                    <div class="form-group">
                                        <label class="form-control-label text-muted">Username</label>
                                        <input type="text"
                                            placeholder="Username"
                                            name="username"
                                            value={setData.username}
                                            onChange={InputData} />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label text-muted">Password</label>
                                        <input type="password"
                                            placeholder="password"
                                            name="password"
                                            value={setData.password}
                                            onChange={InputData} />
                                    </div>
                                    <div class="form-group">
                                        <label class="form-control-label text-muted">Conform Password</label>
                                        <input type="password"
                                            placeholder="conform pasword"
                                            name="verifyPassword"
                                            value={setData.verifyPassword}
                                            onChange={InputData} />
                                    </div>
                                    <div class="row justify-content-center my-3 px-3">
                                        <button class="btn-block btn-color">Login to DreamGirl</button>
                                    </div>
                                    </form>
                                    <form onSubmit={ForgetSubmit}>
                                        <div class="row justify-content-center my-2">
                                            <NavLink to='/api/recover' type="submit"><small class="text-muted">Forget password</small></NavLink>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div class="bottom text-center mb-5">
                                <p href="#" class="sm-text mx-auto mb-3">Don't have an account?<NavLink to="/api/signup" class="btn btn-white ml-2">Create new</NavLink></p>
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