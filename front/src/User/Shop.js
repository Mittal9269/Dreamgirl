import React from "react";
import Card from "./Card";
import img1 from "../Images/blank.png";
import img2 from "../Images/brown.png";
import Scroll from "./Scroll";

export default function Shop() {
    return (
        <>
            <div className="my-5">
                <h1 className="text-center"> Our Products</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="clo-10 mx-auto">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row">
                                    <div className="col-md-2 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">
                                        <Scroll />
                                    </div>
                                    <div className="col-lg-10 order-1 order-lg-2 header-img">
                                        <div className="row">
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
                                            <Card img={img2} />
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