import React from "react";
import Card from "./Card";
import { useEffect, useState } from "react";
import img1 from "../Images/blank.png";
import img2 from "../Images/brown.png";
// import Scroll from "./Brands";
import {Brands , Prices} from "./Filter";
import Navbar from "../FormType/Navbar";
// import categories from "./Filter";
import Brand from "./Brands";
import Price from "./Prices";

export default function Shop() {
    const [products, setProducts] = useState([]);
    const [state,setState] = useState([]);
    const [checked,setChecked] = useState([]);

    const handleStateChange = (id) => {
         console.log(id);
        //  console.log(id);
         const currentIndex = checked.indexOf(id);
        const newChecked = [...checked];
        if(currentIndex === -1){
            newChecked.push(id);
        }else{
            newChecked.splice(currentIndex,1);
        }
        setChecked(newChecked);
        // fiteredSearch(newChecked);
    }

    useEffect(() => {
        fetch('http://localhost:8000/product/product', {

            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(data => {
                // let newArray = [];
                let filterAray = sessionStorage.getItem("Ids");
                // findFilter(data)
                // const 
                setProducts(data);
                // console.log(data)
            })
            .catch(err => console.log(err));
    }, [])
    return (
        <>
            <Navbar />
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
                                        {/* <Scroll /> */}
                                        <div className="left-part" style={{ textAlign: "center" }}>
                                            <h4 style={{ justifyContent: "center", paddingLeft: "20px", textAlign: "center" }}>Filter | <span><a>Clear all</a></span> </h4>
                                            <hr />
                                            <div className="accordion">
                                                {/* <ul>
                                                    <Brand handleStateChange={handleStateChange} Brands = {Brands} /> 
                                                </ul>
                                                <ul>
                                                    <Price handleStateChange={handleStateChange} Prices = {Prices} /> 
                                                </ul> */}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-10 order-1 order-lg-2 header-img">
                                        <div className="row">

                                            {products.length !== 0 && (
                                                products.map((value) => {
                                                    return (
                                                        <Card
                                                            productInfo={value}
                                                            img={img2}
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
                </div>
            </div>
        </>
    )
}