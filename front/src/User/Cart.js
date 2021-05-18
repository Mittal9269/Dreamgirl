import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import Navbar from "../FormType/Navbar";
import CartForCart from "./CartFloder/CardForCart";
import Scroll from "./Scroll";

export default function Cart() {
    const [redirect, setRedirect] = useState(false);
    const [data, Setdata] = useState({

    });
    useEffect(() => {
        let token = sessionStorage.getItem("Token");
        console.log("Hello bro i am from token")
        if (token) {
            let array = [];
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            userInfo.history = [...new Set(userInfo.history)];
            Setdata(userInfo)
            let newuserInfo = {
                firstName: userInfo.firstName,
                lastName: userInfo.lastName,
                username: userInfo.username,
                password: "",
                verifyPassword : "",
                email: userInfo.email,
                history: userInfo.history
            }
            const token = sessionStorage.getItem('Token');
            fetch('http://localhost:8000/api/update_user', {
                method: 'PUT',
                headers: {
                    'x-auth-token': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newuserInfo)
            }).then(res => res.json())
                .then(res => {
                    // console.log(res)
                    sessionStorage.setItem("userInfo", JSON.stringify(res.user))
                })
                .catch(err => console.log(err));
            console.log("No error from useEffect side")

        } else {
            setRedirect(true);
        }
    }, [])

    return (
        <>
            <Navbar />
            <div className="my-5 text-center">
                <h1>Hello here are your Cart</h1>
            </div>
            {redirect && <Redirect to="/api/login" />}

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="clo-10 mx-auto">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row gy-4">
                                    {data.history !== undefined && data.history.length !== 0 && (
                                        data.history.map((value) => {
                                            console.log(value)
                                            return (
                                                <CartForCart
                                                    info={value}
                                                />
                                            )
                                        })
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}