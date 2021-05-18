import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Redirect } from 'react-router-dom';


export default function Reset() {
    const {id} = useParams();
    // console.log(id)
    const [data, setData] = useState({
        password: "",
        verifyPassword: ""
    })
    const InputData = (event) => {
        const { name, value } = event.target;
        setData((preValue) => {
            return {
                ...preValue,
                [name]: value
            };
        })
    }

    const LoginSubmit = (e) => {
        e.preventDefault();
        const recover = {
            password: data.password,
            verifyPassword: data.verifyPassword,
        }

        fetch('http://localhost:8000/api/reset/' + id, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(recover)
        })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
                // console.log(data)
                if(data.message === 'Your password has been updated.'){
                    window.location = "/api/login";
                }
                
            })
            .catch(err => console.log(err));

    }
    
    return (
        <>
            <form onSubmit={LoginSubmit}>
                <div class="form-group" >
                    <label class="form-control-label text-muted">Password</label>
                    <input type="password"
                        placeholder="password"
                        name="password"
                        value={setData.password}
                        onChange={InputData} />
                </div>
                <div class="form-group">
                    <label class="form-control-label text-muted">Conform Password</label>
                    <input type="password"
                        placeholder="conform pasword"
                        name="verifyPassword"
                        value={setData.verifyPassword}
                        onChange={InputData} />
                </div>
                <div class="row justify-content-center my-3 px-3">
                                        <button class="btn-block btn-color">Reset Password</button>
                                    </div>
            </form>
        </>
    )
}