import {useState} from "react";
import UpdateProduct from "./UpdateProduct";

export default function CategaryC(props){
    
    const onSub = (e)=>{
        e.preventDefault();
        fetch('http://localhost:8000/product/product/' + props.everything._id, {
               method: 'DELETE',
           })
           .then(res =>res.text()) // or res.json()
           .then(text => console.log(text))
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
            <p>{props.everything.Size}</p>
            <p>{props.everything.Available}</p>
            <p>{props.everything.Color}</p>
            <p>{props.everything.ImgFront}</p>
            <p>{props.everything.ImgLeft}</p>
            <p>{props.everything.ImgRight}</p>
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