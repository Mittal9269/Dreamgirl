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
    const [data, setData] = useState({

    })
    const [userdata ,Setuserdata] = useState({
        
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
        if(token){
            let array = [];
            let userInfo  = JSON.parse(sessionStorage.getItem("userInfo")); 
            if(userInfo !== undefined){
                Setuserdata(userInfo)       
            }

        }
    }, [])
    const SendId = (e) =>{
        e.preventDefault();
        
       
            let filtered = userdata.history.filter(
                function(value, index, arr){ 
                    return value !== props.info;
                });
                userdata.history = [...filtered]
                sessionStorage.setItem("userInfo" , JSON.stringify(userdata))
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
    return (
        <>
            <div className="col-md-4 col-10 mx-auto my-2" >
                <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, .1)" }}>
                    <div className="image" style={{ height: "300px" }}>
                        <img src={Image} style={{ width: "500px", height: "300px" }} class="card-img-top" alt={Image} />
                    </div>
                    <div className="card-body details">
                        <h5 className="card-title">{data.ProductName}</h5>
                        <p className="card-text">
                            {data.Prize} Rupees.
            </p>
                        <div className="row">
                            <NavLink to={href} className="btn btn-outline-info">
                                Info
                            </NavLink>
                            <form onSubmit={SendId}>
                            <button  className="ml-4  btn btn-outline-secondary">
                            Remove
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