import React, { useEffect, useState } from "react";
import  { Redirect } from 'react-router-dom';
import Navbar from "../../FormType/Navbar";
import { useParams } from "react-router-dom";
import Img from "../../Images/image_2.jpeg";
import "./Info.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Colors from "./Color";

export default function CardInfo(){
    const [redirect,setRedirect] = useState(false);
    const {id} = useParams();
    const [userdata ,Setuserdata] = useState({
        
    });

    const [data,setData] = useState({
        ProductName : "",
        Prize : "",
        Quantity :"",
        Available : "",
        ImgFront : "",
        categary : "",
        Discription : "",
        Section  : ""
    });

    const {ProductName,Prize,Quantity,Available,ImgFront,categary,Discription,Section} = data;

    const fetchData = ()=>{
        fetch('http://localhost:8000/product/product/' + id , {
              method: 'GET',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
              }
            })
            .then(res=>res.json())
            .then(fetchedata =>{
                setData({
                    ...data,
                    ProductName:fetchedata.ProductName,
                    Prize: fetchedata.Prize,
                    Quantity: fetchedata.Quantity,
                    Available: fetchedata.Available,
                    ImgFront: fetchedata.ImgFront,
                    categary:fetchedata.categary,
                    Discription:fetchedata.Discription,
                    Section:fetchedata.Section
                })
            })
            .catch(err=>console.log(err));
    }

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(() => {
        let token = sessionStorage.getItem("Token");
        if(token){
            let array = [];
            let userInfo  = JSON.parse(sessionStorage.getItem("userInfo")); 
            if(userInfo !== undefined){
                Setuserdata(userInfo)       
            }

        }else{
            setRedirect(true);
        }
    }, [])
    const render = () =>{
        alert("please login first to see our product");
        <Redirect to="/api/login" />
    }

    const SendId = (e) =>{
        e.preventDefault();
        
        if(Object.keys(userdata).length > 0){
            if(userdata.history.indexOf(id) === -1){
                userdata.history.push(id);
                sessionStorage.setItem("userInfo" , JSON.stringify(userdata))
                toast.success(' Successfully Added', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                   
            }else{
                toast.warning(' Product already in Cart', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                sessionStorage.setItem("userInfo" , JSON.stringify(userdata))   
            }
        }
        
    }
    return(
        <>
            <Navbar />
            {redirect && <Redirect to="/api/login" />}
            <div className="app">

            <div className="details-info" key={id}>
              <div className="big-img-info">
                <img src={Img} alt="Not Found"/>
              </div>

              <div className="box-info">
                <div className="row-info">
                  <h2>{ProductName}</h2>
                  <span>${Prize}</span>
                </div>
                 {/* <Colors colors={Color} /> */}
                <p className="change-text">{Section}</p>
                <p className="change-text">{Discription}</p>
                <br/>
                {Available === "Yes" ? <h4 style={{Color:'green'}}>Avalable</h4> : <h4 style={{Color:'red'}}>Not Avalable</h4>}
                <form onSubmit={SendId}>
                   
                    <button className="cart">Add to cart</button> 
                </form>
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