import React from "react";
import { NavLink } from "react-router-dom";

import Img1 from "../Images/image_1.jpeg";
import Img2 from "../Images/image_3.jpeg";
import Img3 from "../Images/image_2.jpeg";
import Blank from "../Images/brown.png";
import Page1 from "../Images/image1.jpeg"
import Page2 from "../Images/image2.jpeg"
import Page3 from "../Images/image3.jpeg"
import "./homeproducts.css";
import "jquery";
// import Carousel from 'react-gallery-carousel';
// import 'react-gallery-carousel/dist/index.css';
import Carousel from 'react-bootstrap/Carousel'
import Section from "./Section";
import Card from "./Card";
import Navbar from "../FormType/Navbar";
import ImageHome from "./ImageHome";
import Search from "./HomeComponent/Search";
import PopularSearch from "./HomeComponent/PopularSearch";



export default function Home() {
    return (
        <>
            <Navbar />
            <div style={{ width: "200px" }}>

            </div>
            {/* <Section /> */}
            <div className="my-3 claser col-10 mx-auto">
                <Carousel >
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100"
                            src={Page3}
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
                            src={Page2}
                            alt="Second slide"
                            style={{ opacity: "0.8" }}
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={Page1}
                            alt="Third slide"
                            style={{ opacity: "0.8" }}
                        />
                        <Carousel.Caption>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div className="my-5">
                <h1 className="text-center"> Find your Product</h1>
            </div>
            {/* <hr/> */}
            {/* <Search /> */}
            <ImageHome />
            <PopularSearch />
        </>
    )
}