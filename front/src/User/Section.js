import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../Images/dreamgirl.png";
import Miltom from "../Images/borosil.png";
import Cello from "../Images/cello.png";
import Borosil from "../Images/milton.png";
import Nayasa from "../Images/nayasa.png";
import Prastige from "../Images/prastige.png";
import Ski from "../Images/ski.png";


export default function Section() {
    return (
        <>
            <section id="header" className="d-flex align-item-center">
                <div className="container-fluid nav-bg">
                    <div className="row">
                        <div className="clo-10 mx-auto mt-5">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column ">
                                    <h1>
                                        Find the best Home
                                        <strong className="brand-name"> Products </strong>
                                    </h1>
                                    <h2 className="my-3">
                                        We are here to give you best service
                                    </h2>
                                    <div className="mt-4">
                                        <a href="/api/signup" className="btn-get-started">
                                            "Sign In"
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 justify-content-center">
                                    <h1 className="mt-5">We are here with</h1>
                                    <img
                                        src={Miltom}
                                        className="mr-2"
                                        style={{width:"150px" , height:"80px"}}
                                        alt="Common img"
                                    />
                                    <img
                                        src={Cello}
                                        className="ml-2"
                                        style={{width:"150px" , height:"80px"}}
                                        alt="Common img"
                                    />
                                    <img
                                        src={Borosil}
                                        className="mr-2"
                                        style={{width:"200px" , height:"100px"}}
                                        alt="Common img"
                                    />
                                    <img
                                        src={Ski}
                                        className="ml-2"
                                        style={{width:"150px" , height:"100px"}}
                                        alt="Common img"
                                    />
                                    <img
                                        src={Prastige}
                                        className="mr-3"
                                        style={{width:"130px" , height:"80px"}}
                                        alt="Common img"
                                    />
                                    <img
                                        src={Nayasa}
                                        className="ml-3"
                                        style={{width:"130px" , height:"80px"}}
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