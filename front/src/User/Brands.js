import {useState} from "react";
// import Price from "./Prices";
import categories from "./Filter";
import { useEffect } from 'react';
export default function Brand(props) {
    const [checked,setChecked] = useState([]);
    let arr = {};
    // useEffect(() =>{
    //     let newarr = {}
    //     props.Brands.map((val , i) => {
    //         // newarr.push([val[0] , 0]);
    //         newarr[val._id] = "0"
    //     })
    //     arr = {
    //         ...newarr
    //     } 
    // })
    const handleChange = (id) => {
        // console.log(id);
        // const currentIndex = checked.indexOf(id);
        // const newChecked = [...checked];
        // if(currentIndex === -1){
        //     newChecked.push(id);
        // }else{
        //     newChecked.splice(currentIndex,1);
        // }
        // setChecked(newChecked);
        // fiteredSearch(newChecked);
        // props.handleChange(id)
        if(arr.id === "0"){
            props.handleStateChange(id)
            arr.id = "1"
           }else{
               arr.id = "0"
           }

    }

    return (
        <>
            <div className="itemAccro">
                <div className="title" >
                    <h4>Brand</h4>
                    <span>'+'</span>
                </div>
                    {/* {console.log(props.item)} */}
                {/* <div className={selected === props.index ? 'content show' : 'content'}> */}
                    <div className= 'content show'>
                    {props.Brands.map((val , i) =>{
                        arr[val._id] = "0"
                        return(
                            <li key={val._id} className="">
                                <input  type="checkbox" className="form-check-input" 
                                    onChange = {handleChange(val._id)} value={arr._id==="0"}
                                    
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




