// import React from "react";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import "./CartFloder/card.css"

export default function Card(props) {
  let href = "/api/login";
  if (props.productInfo !== undefined) {
    href = '/shopInfo/' + props.productInfo._id;
  }
  const [userdata, Setuserdata] = useState([]);

  useEffect(() => {
    let token = sessionStorage.getItem("Token");

    let userInfo = JSON.parse(localStorage.getItem("productId"));
    if (userInfo && userInfo.length !== 0) {
      Setuserdata(userInfo)
    } else {
      // sessionStorage.setItem("productId" , JSON.stringify([]));
      let arr = [];
      Setuserdata(arr)
    }
  }, [])



  const SendId = (e) => {
    e.preventDefault();
    if (!userdata.includes(props.productInfo._id)) {
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
      if (!prevdata) {
        let newdata = [props.productInfo._id];
        localStorage.setItem(props.productInfo._id, "1")
        localStorage.setItem("productId", JSON.stringify(newdata));

        Setuserdata(newdata);
      } else {
        let newdata = [...prevdata, props.productInfo._id];
        localStorage.setItem(props.productInfo._id, "1")
        localStorage.setItem("productId", JSON.stringify(newdata));
        Setuserdata(newdata);
      }
    }
    else {
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

  return (
    <>
      <div className="div_change col-sm-4 col-12 mx-auto my-2" >
        <div className="card-img" >
          <div class="image card__image-container">
            <img class="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt="" />
          </div>

    
          <div class="card__content">
            <h3 class="card__title">{props.productInfo.ProductName}</h3>
            <p className="card-text">
               {props.productInfo.Prize} Rupees
            </p>
            <div className="row div_button">
            <NavLink to={href} className="btn btn-outline-info navlink">
              Info
            </NavLink>
            <form onSubmit={SendId}>
            <button  className="ml-4  btn btn-outline-secondary button1">
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



// link uses
// https://stackoverflow.com/questions/34687091/can-i-execute-a-function-after-setstate-is-finished-updating