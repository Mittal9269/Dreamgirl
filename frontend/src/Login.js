import React from "react";

export default function Login(){
    return(
        <>
        <form action="/api/login" method="POST">
            <input type="text" placeholder="Username" name="usrename"/>
            <input type="password" placeholder="password" name="password"/>
            <input type="password" placeholder="conform pasword" name="verityPassword"/>
            <button type="submit">Submit</button>
        </form>
        <form action="/api/recover">
            <button type="submit">Forget password</button>
        </form>
        </>
    )
}