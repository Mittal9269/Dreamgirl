// import React from "react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Card(props) {
  let href = "/api/login";
  if(props.productInfo != undefined){
    href = '/shopInfo/' + props.productInfo._id;
  }
  const [userdata ,Setuserdata] = useState({
        
  });

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

  if(Object.keys(userdata).length > 0){
      if(userdata.history.indexOf(props.productInfo._id) === -1){
        toast.success(' Card added successfully !', {
          position: "top-center",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        userdata.history.push(props.productInfo._id);
      }
      else if(userdata.history.indexOf(props.productInfo._id) > -1){
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
     else{
      toast.info(' Successfully added !', {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      userdata.history.push(props.productInfo._id);
     }
      sessionStorage.setItem("userInfo" , JSON.stringify(userdata))
  }
  else{
    toast.warning(' Please Login to Add into Cart !', {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      });
      setTimeout(() => {
        // window.location = "/api/Admin";
        window.location = "/api/login";
    }, 3000);
  }
  
}

  return (
    <>
      <div className="col-md-4 col-10 mx-auto my-2" >
        <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, .1)" }}>
          <div className="image" style={{height:"300px"}}>
            <img src={props.img} style={{width:"500px" , height:"300px"}} class="card-img-top" alt="Hello" />
          </div>
          <div className="card-body details">
            <h5 className="card-title">{props.productInfo.ProductName}</h5>
            <p className="card-text">
               {props.productInfo.Prize} Rupees
            </p>
            <div className="row">
            <NavLink to={href} className="btn btn-outline-info">
              Info
            </NavLink>
            <form onSubmit={SendId}>
            <button  className="ml-4  btn btn-outline-secondary">
              Add In Cart
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
  );
}