import {useNavigate} from "react-router-dom";
import {useEffect} from "react";

export default function ErrorPage(){

    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>navigate(-1),3000)
    },[])

    return (
        <>
            <h1>Page not found!!!</h1>

        </>
    )
}