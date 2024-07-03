import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



export default function Protected(
    {
        children,
        authentication=true,
    }
) {

    const navigate = useNavigate()
    const [loader, setLoader] = useState(true)

    const authStatus = useSelector(state=> state.authSlice.status)


    useEffect(() =>{
        // authentication = true and authstatus = false then evaluated as true
        if(authentication && authStatus!==authentication){
            console.log("Entered login ")
            navigate('/login')
        }else if(!authentication && authStatus!==authentication){
            navigate("/")
        }
        setLoader(false)
    },[authStatus, navigate, authentication])
    return loader ? <h1>Loading</h1> : <>{children}</>;
}
// giving a different name for the function is valid syntax 


