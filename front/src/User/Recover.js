import React, { useState } from "react";

export default function Recover(){
    let [data,setEmail] = useState("")
    const inputData = (event) =>{
        setEmail(event.target.value)
    }
    const onSub = (e) =>{
        e.preventDefault();
        let b = {
            email : data
        }
        // console.log(email)
        fetch('http://localhost:8000/api/recover', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(b)
            })
            .then(res=>{
                console.log(res);
            })
            .catch(err=>console.log(err));   

            // window.location = "/";
    }

    return(
        <>
        <form onSubmit={onSub}>
            <input type="email" 
            placeholder="type Email" 
            name="email"
            value={data}
            onChange={inputData}
            />
            <button type="submit">Submit</button>
        </form>
        </>
    )
}