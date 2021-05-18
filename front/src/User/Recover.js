import React, { useState } from "react";
import Navbar from "../FormType/Navbar";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                if(res.status === 200){
                    toast.success(' Please Check your Email !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                else if (res.status === 404){
                    toast.error(' Email doesn not exist !', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                else if(res.status === 403){
                    toast.warning(" You can't make Multiple Request For password Change within 20 minutes !", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }else{
                    toast.error(" There is some problem please try after sometime", {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                }
                // console.log(res.massage)
            })
            .catch(err=>console.log(err));   

            // window.location = "/";
    }

    return(
        <>
        <Navbar />
        <form onSubmit={onSub}>
            <input type="email" 
            placeholder="type Email" 
            name="email"
            value={data}
            onChange={inputData}
            />
            <button type="submit">Submit</button>
        </form>
        <ToastContainer
                position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </>
    )
}