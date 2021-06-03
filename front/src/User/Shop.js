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
import Parallex from "react-rellax";
import ScrollToUp from "./CartFloder/ScrollToUp";

export default function Shop() {
    const [myFilters,setMyFilters] = useState({
        filters:{category:[],price:[]}
    });

    const [products, setProducts] = useState([]);
    const [state,setState] = useState([]);
    const [checked,setChecked] = useState([]);


    useEffect(() => {
        loadFilters(myFilters);
    }, []);

    const loadFilters = (filters)=>{
        fetch("http://localhost:8000/product/product/by/search",{
            method:"POST",
            headers: {
                Accept: "applications/json",
                "Content-Type": "application/json",
              },
            body: JSON.stringify(filters),
        }).then(res=>res.json())
        .then(data=>{
            if(data && data.error){
                alert("Data not found")
            }else{
                setProducts(data);
            }
        }).catch(err=>{
            console.log(err);
        })
    }


    const handlePrice = (filters) => {
        let priceArray = [];

        for(let key = 0; key<Prices.length; key++){
            if(filters.includes(Prices[key]._id))
                priceArray.push([Prices[key].mini,Prices[key].maxi]);
        }
        return priceArray;
    }


    const handleCategory = (filters)=>{
        let category = [];
        for(let key = 0; key<Brands.length; key++){
            if(filters.includes(Brands[key]._id))
                category.push(Brands[key].name)
        }
        return category;
    }


    const handleSearch = (filters,filterBy) => {
        const newFilter = {...myFilters};
        newFilter.filters[filterBy] = filters;
        if(filterBy === "price"){
            let priceValue = handlePrice(filters);
            newFilter.filters[filterBy] = priceValue;
        }else {
            let category = handleCategory(filters);
            newFilter.filters[filterBy] = category;
        }
        setMyFilters(newFilter);
        loadFilters(newFilter);
    }


    return (
        <>
            <Navbar />
            <div className="my-5">
                <h1 className="text-center"> Our Products</h1>
            </div>
            <ScrollToUp />
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
                                                <ul>
                                                    <Brand  Brands = {Brands} filteredSearch={handleSearch}/> 
                                                </ul>
                                                <ul>
                                                    <Price  Prices = {Prices} filteredSearch={handleSearch}/> 
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <Parallex speed={-5}></Parallex> */}
                                    <div className="col-lg-10 order-1 order-lg-2 header-img">
                                        <div className="row">
                                            {products.length !== 0 && (
                                                products.map((value) => {
                                                    return (
                                                        <Card
                                                            id = {value._id}
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