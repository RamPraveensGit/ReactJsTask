import { useParams } from "react-router-dom";
export default function Old_Products(){
    const {id} = useParams();

    return <h1>Old Products <b>{id}</b></h1>
   }