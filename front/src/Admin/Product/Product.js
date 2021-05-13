//helper file


import React, { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";
// import product from "../../../backend/models/Product";
import Navbar from "../../FormType/Navbar";
// import CategaryCard from "./CategaryCard";
import ProductC from "./ProductC";

export default function Product(){
    const [redirect , setRedirect] = useState(false);
    const [products,setProducts] = useState([]);
    let Cate;
    let token
    useEffect(() =>{
        token = sessionStorage.getItem('Token');
        let data = JSON.parse(sessionStorage.getItem('userInfo'))
        if(data.isAdmin){
            if(token){
                fetch('http://localhost:8000/product/product', {
              method: 'GET',
              headers: {
                'x-auth-token': token,
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            })
            .then(res=>res.json())
            .then(data =>{
                setProducts(data); 
            })
            .catch(err=>console.log(err));
        }
        }
        else{
            setRedirect(true);
        }
    },[])


    const AddProduct = (e) =>{
        e.preventDefault();
        window.location  = "/product/update";
    }

    return(
        
        <>
            <Navbar />
            {redirect &&  <Redirect to="/api/login" />}
            {products.length !== 0 && (
                products.map((value) =>{
                    return(
                        <ProductC 
                        everything = {value}
                        />
                    )
                })
            )}
            <form onSubmit={AddProduct}>
                <button>
                    Add product
                </button>
            </form>
        </>
    )
}