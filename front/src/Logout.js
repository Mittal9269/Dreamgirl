import { useState } from "react";
import {Redirect} from "react-router-dom";
export default function Logout(){
    const [time , setTime] = useState(false);
    return(
        <>
            {sessionStorage.clear()}
            {setTime(true)}
            <Redirect to="/api/login" />

        </>
    )
}

// export {time};
