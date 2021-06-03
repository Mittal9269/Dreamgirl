import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import Navbar from "../FormType/Navbar";
import CartForCart from "./CartFloder/CardForCart";
import Scroll from "./Scroll";

export default function Cart() {
    // const [redirect, setRedirect] = useState(false);
    const [data, Setdata] = useState([]);
    useEffect(() => {
        let token = sessionStorage.getItem("Token");
        // if (token) {
            let array = [];
            let userInfo = JSON.parse(localStorage.getItem("productId"));
            userInfo = [...new Set(userInfo)];
            Setdata(userInfo)

    }, [])

    return (
        <>
            <Navbar />
            <div className="my-5 text-center">
                <h1>Hello here are your Cart</h1>
            </div>
            {/* {redirect && <Redirect to="/api/login" />} */}

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="clo-10 mx-auto">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row gy-4">
                                    {data !== undefined && data !==null && (
                                        data.map((value , index) => {
                                            console.log(value)
                                            return (
                                                <CartForCart
                                                    id = {index}
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