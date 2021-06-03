import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useStateWithCallbackLazy } from 'use-state-with-callback';
import "../CartFloder/card.css";

export default function ShowCard(props) {

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
            <div className="col-md-4 col-12 mx-auto my-2" >
                <div className="card-img" >
                    <div class="image card__image-container">
                        <img class="card__image" src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2126&q=80" alt="" />
                    </div>

                    {/* <svg class="card__svg" viewBox="0 0 800 500">

            <path d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400 L 800 500 L 0 500" stroke="transparent" fill="#333" />
            <path class="card__line" d="M 0 100 Q 50 200 100 250 Q 250 400 350 300 C 400 250 550 150 650 300 Q 750 450 800 400" stroke="pink" stroke-width="3" fill="transparent" />
          </svg> */}

                    <div class="card__content">
                        <h3 class="card__title">{props.productInfo.ProductName}</h3>
                        <p className="card-text">
                            {props.productInfo.Prize} Rupees
            </p>
                        <div className="row">
                            <NavLink to={href} className="btn btn-outline-info">
                                Info
            </NavLink>
                            <form onSubmit={SendId}>
                                <button className="ml-4  btn btn-outline-secondary">
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
    )
}