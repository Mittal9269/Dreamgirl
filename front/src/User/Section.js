import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../Images/dreamgirl.png";

export default function Section() {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="clo-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                                    <h1>
                                        Find the best Girl's
                                        <strong className="brand-name"> Dresses </strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are here to give you best service
                                    </h2>
                                    <div className="mt-3">
                                        <a href="/api/signup" className="btn-get-started">
                                            "Sign In"
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img
                                        src={Img}
                                        className="img-fluid animated"
                                        alt="Common img"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}