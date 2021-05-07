import { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";
// import Categary from "../../../backend/models/Categary";

export default function Update(){
    const [redirect , setRedirect] = useState(false);
    const [data , setData] = useState("");
    useEffect(() =>{
        let Token = sessionStorage.getItem('Token');
        let data = JSON.parse(sessionStorage.getItem('userInfo'))
        if(data.isAdmin){

        }
        else{
            setRedirect(true);
        }
    },[])
    const InputData = (event) =>{
        setData(event.target.value);
    }
    const onSub = (e) =>{
        e.preventDefault();
        const val = {
            Categary : data
        }
        console.log(val);
        fetch('http://localhost:8000/categery/categery', {
              method: 'POST',
              headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              },
              body: JSON.stringify(val),
              credentials: "same-origin"
            })
            .then(res=>console.log(res))
            .catch(err=>console.log(err));
        // axios.post('http://localhost:8000/api/signup',registerd)
        // .then(Response => console.log(Response))
        // .catch(err => console.log(err));

        window.location = '/catege ry/cate';
       
        }

    
    return(
        <>
            {redirect && <Redirect to="/api/login" />}
            <form onSubmit={onSub}>
                <input 
                type="text"  
                placeholder="Please write"
                onChange={InputData}
                value={data}
                name = "Categary"
                />
                <button>Add</button>
            </form>
        </>
    )
}