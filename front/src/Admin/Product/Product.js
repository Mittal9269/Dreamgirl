//helper file


import React, { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
// import product from "../../../backend/models/Product";
import Navbar from "../../FormType/Navbar";
// import CategaryCard from "./CategaryCard";
import ProductC from "./ProductC";

export default function Product() {
    const [redirect, setRedirect] = useState(false);
    const [products, setProducts] = useState([]);
    let Cate;
    let token
    useEffect(() => {
        token = sessionStorage.getItem('Token');
        let data = JSON.parse(sessionStorage.getItem('userInfo'))
        if (data.isAdmin) {
            if (token) {
                fetch('http://localhost:8000/product/product', {
                    method: 'GET',
                    headers: {
                        'x-auth-token': token,
                        'Accept': 'application/json',
                        'Content-Type': 'application/json',
                    }
                })
                    .then(res => res.json())
                    .then(data => {
                        setProducts(data);
                    })
                    .catch(err => console.log(err));
            }
        }
        else {
            setRedirect(true);
        }
    }, [])


    const AddProduct = (e) => {
        e.preventDefault();
        window.location = "/product/update";
    }

    return (

        <>
            <Navbar />
            <form onSubmit={AddProduct}>
                <button
                    className="btn btn-outline-secondary"
                >
                    Add product
                </button>
            </form>

            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="clo-10 mx-auto">
                        <div className="row">
                            <div className="col-10 mx-auto">
                                <div className="row gy-4">
                                    {redirect && <Redirect to="/api/login" />}
                                    {products.length !== 0 && (
                                        products.map((value) => {
                                            return (
                                                <ProductC
                                                    id={value._id}
                                                    everything={value}
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