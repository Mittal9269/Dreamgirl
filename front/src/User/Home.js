import React from "react";
import { NavLink } from "react-router-dom";

import Img1 from "../Images/image_1.jpeg";
import Img2 from "../Images/image_3.jpeg";
import Img3 from "../Images/image_2.jpeg";
import Blank from "../Images/brown.png";
import "jquery";
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';
import Carousel from 'react-bootstrap/Carousel'
import Section from "./Section";
import Card from "./Card";



export default function Home() {
    return (
        <>
            <div style={{ width: "200px" }}>

            </div>
            {/* <Section /> */}
            <div className="my-5 claser col-9 mx-auto">
                <Carousel>
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={Blank}
                            alt="First slide"
                            style={{ opacity: "0.2" }}
                        />
                        <Carousel.Caption>
                            <Section style={{ position: "absolute", marginUp: "1000px" }} />
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={500}>
                        <img
                            className="d-block w-100"
                            src={Blank}
                            alt="Second slide"
                            style={{ opacity: "0.2" }}
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Blank}
                            alt="Third slide"
                            style={{ opacity: "0.2" }}
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            
            <div className="my-5 claser col-10 mx-auto" 
            style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}>
                <form className="card card-sm"
                style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}
                >
                    <div className="card-body row no-gutters align-items-center"
                    style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}
                    >
                        <div class="col-auto">
                            <i class="fas fa-search h4 text-body"></i>
                        </div>

                        <div class="col">
                            <input class="form-control form-control-lg form-control-borderless" type="search" placeholder="Search topics or keywords"
                            style={{backgroundColor:"rgba(255, 255, 255, 0.1)"}}
                             />
                        </div>

                        <div class="col-auto">
                            <button class="btn btn-lg btn-danger" type="submit">Search</button>
                        </div>

                    </div>
                </form>
            </div>

            <div className="my-5">
                <h1 className="text-center"> Find your Product</h1>
            </div>
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="clo-10 mx-auto">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row gy-4">
                                    <Card img={Blank} />
                                    <Card img={Blank} />
                                    <Card img={Blank} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}