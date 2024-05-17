import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

export default function ErrorPage(){

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(()=>{
            navigate('/');
        },5000);
    
        return() => clearTimeout();
    },[navigate])
   
    return <h2>This is an error page you will be redirected automatically to the Home Page shortly....</h2>
}