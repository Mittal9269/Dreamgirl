import { useEffect, useState } from 'react';
import "../Admin/Product/product.css";

export default function Price(props) {
    const [checked, setChecked] = useState([]);


    const handleChange = (id) => {
        let newArray;
        if(checked.includes(id)){
            let index = checked.indexOf(id);
            newArray = [...checked];
            newArray.splice(index,1);
        }else{
            newArray = [...checked];
            newArray.push(id);
        }
        setChecked(newArray);
        props.filteredSearch(newArray,"price");
    }
    return (
        <>
            <div className="itemAccro">
            <div className="title" >
                    <h4>Price</h4>
                    <span>'+'</span>
                </div>
                <div className='content show' >
                    {props.Prices.map((val , i) =>{
                        return(
                            <li  className="list-unstyled">
                                <input  
                                    type="radio"
                                    name = "radio-button"
                                    className="form-check-input" 
                                    value = {checked.includes(val._id)}
                                    onChange={(e)=>{handleChange(val._id)}}
                                 />
                                <label className="form-check-label">{val.mini}-{val.maxi}</label>
                            </li>
                        )
                    })}
                </div>
            </div>
        </>
    )
}