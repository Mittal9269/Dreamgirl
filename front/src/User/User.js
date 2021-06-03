import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';
import Navbar from "../FormType/Navbar";
import "./user.css";

export default function User() {
    const [redirect, setRedirect] = useState(false);
    const [data, Setdata] = useState({

    });
    useEffect(() => {
        let token = sessionStorage.getItem("Token");
        if (token) {
            let array = [];
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            Setdata(userInfo)

        } else {
            setRedirect(true);
        }
    }, [])
    const onSub = (e) => {
        e.preventDefault();
        console.log("here");
        window.location = "/api/update_user"
    }
    return (
        <>
            <Navbar />
            {redirect && <Redirect to="/api/login" />}
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
                                                    <h6 className="text-muted f-w-400">{data.email}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">UserName</p>
                                                    <h6 className="text-muted f-w-400">{data.username}</h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 p-b-5 b-b-default f-w-600"></h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">FirstName</p>
                                                    <h6 className="text-muted f-w-400">{data.firstName}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Last Name</p>
                                                    <h6 className="text-muted f-w-400">{data.lastName}</h6>
                                                </div>
                                            </div>
                                            <h6 className="m-b-20 m-t-40 p-b-5 b-b-default f-w-600"></h6>
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">History</p>
                                                    <h6 className="text-muted f-w-400">{data.history === [] ? data.history : "Nothing"}</h6>
                                                </div>
                                                <div className="col-sm-6">
                                                    <p className="m-b-10 f-w-600">Most Viewed</p>
                                                    <h6 className="text-muted f-w-400">Dinoter husainm</h6>
                                                </div>
                                            </div>
                                            <form onSubmit={onSub}>
                                                <button className="btn btn-primary">Update</button>
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