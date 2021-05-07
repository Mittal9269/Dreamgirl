import React from "react";
import { NavLink } from "react-router-dom";

export default function Card(props) {
  return (
    <>
      <div className="col-md-4 col-10 mx-auto my-2" >
        <div className="card" style={{ backgroundColor: "rgba(255, 255, 255, .1)" }}>
          <div className="image" style={{height:"300px"}}>
            <img src={props.img} class="card-img-top" alt="Hello" />
          </div>
          <div className="card-body details">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              bulk of the card's content.
            </p>
            <div className="row">
            <NavLink to="..." className="btn btn-outline-info">
              Info
            </NavLink>
            <NavLink to="..." className="ml-4  btn btn-outline-secondary">
              Add In Cart
            </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}