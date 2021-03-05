import React from "react";

export default function Recover(){
    return(
        <>
        <form action="/api/recover" method="post">
            <input type="email" placeholder="type Email" name="email"/>
            <button type="submit">Submit</button>
        </form>
        </>
    )
}