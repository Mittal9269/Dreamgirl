import { useEffect, useState } from 'react';
import "../Admin/Product/product.css";

export default function Price(props) {
    const [selected, setSelected] = useState(null);
    const [checked, setChecked] = useState([]);
    let arr = {};
    // useEffect(() =>{
    //     let newarr = {}
    //     props.Prices.map((val , i) => {
    //         // newarr.push([val[0] , 0]);
    //         newarr[val[0]] = "0"
    //     })
    //     arr = {
    //         ...newarr
    //     } 
    // })
    // console.log(props)


    const handleChange = (id) => {
    //     console.log(id);
    //     const currentIndex = checked.indexOf(id);
    //    const newChecked = [...checked];
    //    if(currentIndex === -1){
    //        newChecked.push(id);
    //    }else{
    //        newChecked.splice(currentIndex,1);
    //    }
    //    setChecked(newChecked);
       // fiteredSearch(newChecked);
       console.log(arr)
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
                    <h4>Price</h4>
                    <span>'+'</span>
                </div>
                <div className='content show' >
                    {props.Prices.map((val , i) =>{
                        arr[val[0].toString()] = "0"
                        console.log(arr)
                        console.log(val[0])
                        return(
                            <li  className="list-unstyled">
                                <input  type="checkbox" className="form-check-input" onChange = {handleChange(val[0])} value={arr.val[0]==="0"}
                                 />
                                <label className="form-check-label">{val[1]}-{val[2]}</label>
                        </li>
                        )
                    })}
                </div>
            </div>
        </>
    )
}