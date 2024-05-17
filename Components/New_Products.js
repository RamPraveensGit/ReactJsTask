import { useParams } from "react-router-dom";
export default function New_Products(){
    const {id} = useParams();

    return <h1>New Products <b>{id}</b></h1>
}