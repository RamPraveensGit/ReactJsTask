import { useNavigate } from "react-router-dom"
import '../App.css';
export default function Contact(){
    
    
    const navigate = useNavigate();
    function isClicked() {
    navigate('/')
    }
    return <>
    <h1>Contact Page</h1>
    <div className="gotohome">
    <button onClick={isClicked}>Go to Home</button>
    </div>
    </>



}