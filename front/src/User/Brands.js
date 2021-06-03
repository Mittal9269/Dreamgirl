import {useState} from "react";
// import Price from "./Prices";
import categories from "./Filter";
import { useEffect } from 'react';
export default function Brand(props) {
    const [checked,setChecked] = useState([]);
    
    const handleChange = (id) => {
        let newArray;
        if(checked.includes(id)){
            let index = checked.indexOf(id);
            newArray = [...checked];
            newArray.splice(index,1);
        }else{
            newArray = [...checked];
            newArray.push(id);
            setChecked(newArray);
        }
        setChecked(newArray);
        props.filteredSearch(newArray,"category");
    }

    return (
        <>
            <div className="itemAccro">
                <div className="title" >
                    <h4>Brand</h4>
                    <span>'+'</span>
                </div>
                    <div className= 'content show'>
                    {props.Brands.map((val , i) =>{
                        return(
                            <li key={val._id} className="">
                                <input  
                                    type="checkbox" 
                                    className="form-check-input" 
                                    value={checked.includes(val._id)}
                                    onChange={()=>{handleChange(val._id)}}
                                />
                                <label className="form-check-label">{val.name}</label>
                            </li>
                            )
                        })} 
                    </div> 
                </div>
        </>
    )
}




