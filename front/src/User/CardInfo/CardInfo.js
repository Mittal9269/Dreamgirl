import React, { useEffect, useState } from "react";
import  { Redirect } from 'react-router-dom';
import Navbar from "../../FormType/Navbar";
import { useParams } from "react-router-dom";
import Img from "../../Images/image_2.jpeg";
import "./Info.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Colors from "./Color";
import Relative from "./Relative";

export default function CardInfo(){
    const {id} = useParams();
    const [quantityEnter , setQuantityEnter]  = useState(1);
    const [userdata ,Setuserdata] = useState([]);

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
                // console.log(data)
            })
            .catch(err=>console.log(err));
    }

    useEffect(()=>{
        fetchData();
    },[])

    useEffect(() => {
        // let token = sessionStorage.getItem("Token");
        let userInfo  = JSON.parse(localStorage.getItem("productId")); 
        if(userInfo && userInfo.length !== 0){
            Setuserdata(userInfo)       
        }else{
          // sessionStorage.setItem("productId" , JSON.stringify([]));
          let arr = [];
          Setuserdata(arr)
        }
    }, [])
    

    const SendId = (e) =>{
      e.preventDefault();
      if(!quantityEnter){
        setQuantityEnter(1);
      }
        
        if(!userdata.includes(id)){
            toast.success(' Card added successfully !', {
              position: "top-center",
              autoClose: 1000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            });
            
            let prevdata = JSON.parse(localStorage.getItem("productId"));
            if(!prevdata){
              let newdata = [id];
              localStorage.setItem(id , quantityEnter)
              localStorage.setItem("productId",JSON.stringify(newdata));
      
              Setuserdata(newdata);
            }else{
              let newdata = [...prevdata,id];
              localStorage.setItem(id , quantityEnter)
              localStorage.setItem("productId",JSON.stringify(newdata));
              Setuserdata(newdata); 
            }
          }
          else{
              if( localStorage.getItem(id) !== quantityEnter){
                toast.success(' Successfully quantity updated!', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
                  localStorage.setItem(id , quantityEnter)
              }
              else{
                toast.info(' Card already exits !', {
                    position: "top-center",
                    autoClose: 1000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                  });
              }
          }
        
    }



    const dataEnter = (e) =>{
        setQuantityEnter(e.target.value)
    }
    return(
        <>
            <Navbar />
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
                {Available === "Yes" ? <h4 style={{Color:'green'}}>Available</h4> : <h4 style={{Color:'red'}}>Not Avalable</h4>}
                <input 
                    type="number"
                    min = "1"
                    max = {Quantity}
                    name = "numberValue"
                    value={quantityEnter}
                    onChange={dataEnter}
                    placeholder="Enter quatity"
                    className="input_change"
                />
                <form onSubmit={SendId}>
                    <button className="cart">Add to cart</button> 
                </form>
              </div>
              </div>
            </div>  
            {categary.length !== 0 && <Relative identity={id} cat={categary} />} 
           
            
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