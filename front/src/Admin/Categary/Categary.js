//helper file
import React, { useEffect, useState } from "react";
import {Redirect} from "react-router-dom";
import CategaryC from "./CategaryC";
import Navbar from "../../FormType/Navbar";

export default function Categary(){
    const [redirect , setRedirect] = useState(false);
    const [categories,setCategories] = useState([]);
    let token;
    useEffect(() =>{
        token = sessionStorage.getItem('Token');
        let data = JSON.parse(sessionStorage.getItem('userInfo'))
        if(data.isAdmin){
            if(token){
                fetch('http://localhost:8000/categery/categery', {
                method: 'GET',
                headers: {
                    'x-auth-token': token,
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                }
            })
            .then(res=>res.json())
            .then(data =>{
                // sessionStorage.setItem("Cat", JSON.stringify(data));
                // setCategories(JSON.parse(sessionStorage.getItem('Cat')));    
                setCategories(data); 
            })
            .catch(err=>console.log(err));
            }
        }
        else{
            setRedirect(true);
        }
    },[])

    
    const onSb = (e) =>{
        e.preventDefault();
        window.location  = "/categery/update";
    }

    return(
        
        <>
            {redirect &&  <Redirect to="/api/login" />}
            <Navbar />
            {categories.length !== 0 && (
                categories.map((value) =>{
                    return(
                        <CategaryC 
                        name = {value.Categary}
                        id = {value._id}
                        />
                    )
                })
            )}
            <form onSubmit={onSb}>
                <button>Add New</button>
            </form>
        </>
    )
}