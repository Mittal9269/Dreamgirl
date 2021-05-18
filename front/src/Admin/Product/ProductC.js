import {useState} from "react";
import UpdateProduct from "./UpdateProduct";

export default function CategaryC(props){
    
    const onSub = (e)=>{
        e.preventDefault();
        fetch('http://localhost:8000/product/product/' + props.everything._id, {
               method: 'DELETE',
           })
           .then(res =>res.text()) // or res.json()
           .then(text => window.location("/product/product"))
           .catch(err => console.log(err))
    }
    const GotoUpdate =(e) =>{
        e.preventDefault();
        window.location = "/product/updateProduct" + "/" + props.everything._id
    }
    return(
        <>
            <div>
            
            <button>{props.everything.ProductName}</button>
            <p>{props.everything.Prize}</p>
            <p>{props.everything.Quantity}</p>
            <p>{props.everything.ImgFront}</p>
            <form onSubmit={GotoUpdate}>
                <button>Update</button>
            </form>
            <form onSubmit = {onSub}>
            <button>delete</button>
            </form>
            
            <br/>
            </div>
        </>
    )
}