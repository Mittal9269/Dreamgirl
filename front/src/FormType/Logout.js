import { useState } from "react";
import {Redirect} from "react-router-dom";
export default function Logout(){
    
    return(
        <>
            {sessionStorage.clear()}
            
            <Redirect to="/api/login" />

        </>
    )
}

// export {time};
