import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Image from "../../Images/brown.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CardForCart(props) {
    let href = "/shopInfo";
    if (props.info != undefined) {
        href = '/shopInfo/' + props.info;
    }
    const [quantityNumber, setQuantityNumber] = useState(0);
    const [productData, setProductData] = useState([])
    const [data, setData] = useState({

    })
    const [userdata, Setuserdata] = useState({

    });
    useEffect(() => {
        fetch('http://localhost:8000/product/product/' + props.info, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(fetchedata => {
                setData(fetchedata)
            })
            .catch(err => console.log(err));
    }, [])
    useEffect(() => {
        let token = sessionStorage.getItem("Token");
        setQuantityNumber(localStorage.getItem(props.info))

        if (token) {
            let array = [];
            let userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
            if (userInfo !== undefined) {
                Setuserdata(userInfo)
            }

        }
    }, [])
    const SendId = (e) => {
        e.preventDefault();
        let product = JSON.parse(localStorage.getItem("productId"))
        console.log(product)
        let filtered = product.filter(
            function (value, index, arr) {
                return value !== props.info;
            });
        let temp = [...filtered]
        console.log(temp)
        localStorage.setItem("productId", JSON.stringify(temp))
        localStorage.removeItem(props.info)
        toast.success(' Successfully Removed', {
            position: "top-center",
            autoClose: 1000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        setTimeout(() => {
            window.location.reload();
        }, 1000);


    }

    const StoreId = (e) => {
        e.preventDefault();
        let token = sessionStorage.getItem("Token");
        if(!token){
            toast.warning(' Please Login to purchase', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            setTimeout(() => {
                window.location = "/api/login";
            }, 1000);
        }

    }

    const Increment = (e) => {
        if (quantityNumber < data.Quantity) {
            let t = parseInt(quantityNumber) + 1;
            setQuantityNumber(t)
            localStorage.setItem(props.info, t)
        }
    }
    const Decrement = (e) => {
        if (quantityNumber > 1) {
            let t = quantityNumber - 1;
            setQuantityNumber(t)
            localStorage.setItem(props.info, t)
        }
    }
    return (
        <>
            
            <div className="col-md-3 col-10 mx-auto my-2" >
                <div className="card-img" >
                    <div class="image card__image-container">
                        <img class="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt="" />
                    </div>

                    <div class="card__content">
                        <h4 class="card__title">{data.ProductName}</h4>
                        <div className="row">
                        <p className="card-text change__card">
                            {data.Prize * quantityNumber} Rupees
                        </p>
                            <button
                                onClick={Increment}
                                className="button2__cart"
                                style={{height:"25px"}}
                            >
                                <i className="fa fa-plus"></i>
                            </button>
                            <p className="card-text mx-4">
                                {quantityNumber}
                            </p>
                            <button
                                className="button2__cart"
                                onClick={Decrement}
                                style={{height:"25px"}}
                            >

                                <i className="fa fa-minus" ></i>
                            </button>
                        </div>
                        <div className="row">
                            <NavLink to={href} className="btn btn-outline-info">
                                Info
                            </NavLink>
                            <form onSubmit={SendId}>
                                <button className="ml-4  btn btn-outline-secondary">
                                    Remove
                            </button>
                            </form>
                        </div>
                        <div className=" row">
                            <form onSubmit={StoreId}>
                                <button className="mt-4  btn btn-secondary">
                                    Purchase
                            </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-center"
                autoClose={1000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />

        </>
    )
}