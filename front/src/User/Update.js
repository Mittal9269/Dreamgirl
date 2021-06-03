import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import Navbar from "../FormType/Navbar";
import "./user.css"

export default function Update() {
    const [redirect, setRedirect] = useState(false);
    const [data, setData] = useState({
        username: "",
        firstName: "",
        lastName: "",
        password: "",
        verifyPassword: "",
        email: ""
    })
    useEffect(() => {
        let token = sessionStorage.getItem('Token');
        if (token) {
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            // console.log(userInfo.username);
            setData({
                username: userInfo.username,
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                password: "",
                verifyPassword: "",
                email: userInfo.email
            })
            // console.log(data);
        }
        else {
            setRedirect(true);
        }
    }, [])
    const InputChange = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        })
    }
    const onSub = (e) => {
        e.preventDefault();
        console.log("Hello evryone")
        const update = {
            firstName: data.firstName,
            lastName: data.lastName,
            username: data.username,
            password: data.password,
            verifyPassword: data.verifyPassword,
            email: data.email
        }
        // console.log(update);
        const token = sessionStorage.getItem('Token');
        fetch('http://localhost:8000/api/update_user', {
            method: 'PUT',
            headers: {
                'x-auth-token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(update)
        }).then(res => res.json())
            .then(res => {
                sessionStorage.setItem("userInfo", JSON.stringify(res.user))
                window.location = "/api/user"
            })
            .catch(err => console.log(err));
    }
    return (
        <>
            <Navbar />
            {redirect && <Redirect to="/api/login" />}
            {/* <form onSubmit={onSub}>
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
            </form> */}

            <div className="container-fluid" id="page-content">
                <div className="padding">
                    <div className="my-3 row mx-auto d-flex justify-content-center div__container">
                        <div className=" col-md-12 mx-auto">
                            <div className="card user-card-full">
                                <div className="row m-l-0 m-r-0">



                                    <div className="col-sm-4 bg-c-lite-green user-profile">
                                        <div className="card-block text-center text-white">
                                            <div className="m-b-25"> <img src="https://img.icons8.com/bubbles/100/000000/user.png" class="img-radius" alt="User-Profile-Image" /> </div>
                                            <h6 className="f-w-600">{data.username}</h6>
                                            <p>A beatuful Person</p> <i class=" mdi mdi-square-edit-outline feather icon-edit m-t-10 f-16"></i>
                                        </div>
                                    </div>


                                    <div className="col-sm-8">
                                        <div className="card-block">
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600">Information</h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Email</p>
                                                    {/* <h6 className="text-muted f-w-400">{data.email}</h6> */}
                                                    <input
                                                        type="email"
                                                        className="text-muted f-w-400"
                                                        placeholder="Enter your Email"
                                                        value={data.email}
                                                        onChange={InputChange}
                                                        name="email"
                                                        className="input-change"
                                                    />
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">UserName</p>
                                                    {/* <h6 className="text-muted f-w-400">{data.username}</h6> */}
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your username"
                                                        value={data.username}
                                                        onChange={InputChange}
                                                        name="username"
                                                        className="text-muted f-w-400"
                                                        className="input-change"
                                                    />
                                                </div>
                                            </div>
                                            {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6> */}
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">First Name</p>
                                                    {/* <h6 className="text-muted f-w-400">Sam Disuja</h6> */}
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your FirstName"
                                                        value={data.firstName}
                                                        onChange={InputChange}
                                                        name="firstName"
                                                        className="input-change"
                                                    />

                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Last Name</p>
                                                    {/* <h6 className="text-muted f-w-400">Dinoter husainm</h6> */}
                                                    <input
                                                        type="text"
                                                        placeholder="Enter your lastName"
                                                        value={data.lastName}
                                                        onChange={InputChange}
                                                        name="lastName"
                                                        className="input-change"
                                                    />
                                                </div>
                                            </div>
                                            {/* <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600">Projects</h6> */}
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Password</p>
                                                    {/* <h6 className="text-muted f-w-400">Sam Disuja</h6> */}
                                                    <input
                                                        type="password"
                                                        placeholder="Enter New password"
                                                        value={data.password}
                                                        onChange={InputChange}
                                                        name="password"
                                                        className="input-change"
                                                    />

                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Conform Password</p>
                                                    {/* <h6 className="text-muted f-w-400">Dinoter husainm</h6> */}
                                                    <input
                                                        type="password"
                                                        placeholder="Enter New con password"
                                                        value={data.verifyPassword}
                                                        onChange={InputChange}
                                                        name="verifyPassword"
                                                        className="input-change"
                                                    />
                                                </div>
                                            </div>
                                            <form onSubmit={onSub}>
                                                <button className="mt-3 btn btn-primary">Submit</button>
                                            </form>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}