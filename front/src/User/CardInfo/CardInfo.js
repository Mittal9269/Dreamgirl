import React, { useEffect, useState } from "react";
import  { Redirect } from 'react-router-dom';
import Navbar from "../../FormType/Navbar";
import { useParams } from "react-router-dom";
import Img from "../../Images/image_2.jpeg";
import "./Info.css";
import Colors from "./Color";

export default function CardInfo(){
    const [redirect,setRedirect] = useState(false);
    const {id} = useParams();

    const [data,setData] = useState({
        ProductName: "",
        Prize: "",
        Size: "",
        Available: "",
        Color: "",
        ImgFront: "",
        ImgLeft: "",
        ImgRight: "",
        categary:""
    });

    const {ProductName,Prize,Size,Available,Color,ImgFront,ImgLeft,ImgRight,categary} = data;

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
                    Size: fetchedata.Size,
                    Available: fetchedata.Available,
                    Color:fetchedata.Color,
                    ImgFront: fetchedata.ImgFront,
                    ImgLeft:fetchedata.ImgLeft,
                    ImgRight:fetchedata.ImgRight,
                    categary:fetchedata.categary
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
            // let userInfo  = JSON.parse(sessionStorage.getItem("userInfo")); 
            // Setdata(userInfo)       

        }else{
            setRedirect(true);
        }
    }, [])
    const render = () =>{
        alert("please login first to see our product");
        <Redirect to="/api/login" />
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
                <p className="change-text">This is one of the best product</p>
                <p className="change-text">Product is Available for everyone and it is fully Available A design is 
                a plan or specification</p>
                <br/>
                {Available === "Yes" ? <h4 style={{Color:'green'}}>Avalable</h4> : <h4 style={{Color:'red'}}>Not Avalable</h4>}
                <button className="cart">Add to cart</button> 

              </div>
              </div>
            </div>
        </>
    )
}