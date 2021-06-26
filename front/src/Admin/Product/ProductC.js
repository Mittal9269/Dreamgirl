import { useState } from "react";
import UpdateProduct from "./UpdateProduct";
import "../../User/CartFloder/card.css"

export default function CategaryC(props) {

    const onSub = (e) => {
        e.preventDefault();
        fetch('http://localhost:8000/product/product/' + props.everything._id, {
            method: 'DELETE',
        })
            .then(res => res.text()) 
            .then(text => window.location("/product/product"))
            .catch(err => console.log(err))
    }
    const GotoUpdate = (e) => {
        e.preventDefault();
        window.location = "/product/updateProduct" + "/" + props.everything._id
    }
    return (
        <>

                      <div className="col-md-3 col-10 mx-auto my-2" >
                <div className="card-img" >
                            <div class="card__content">
                                <h4 class="card__title">{props.everything.ProductName}</h4>
                                <div className="row">
                                    <p className="card-text">
                                        {props.everything.Prize} Rupees
                        </p>
                                    <p className="card-text">
                                        {props.everything.Quantity} Quantity
                        </p>
                                </div>
                                <div className="row">
                                    <form onSubmit={GotoUpdate}>
                                        <button
                                            className="btn btn-outline-info"
                                        >Update</button>
                                    </form>
                                    <form onSubmit={onSub}>
                                        <button className="ml-4  btn btn-outline-secondary">delete</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
            

        </>
    )
}