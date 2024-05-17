import '../App.css';
import { useParams } from "react-router-dom";


const Blog = ()=>{
    const {id} = useParams();

    if(id==1) return <h1>The Blog Param is {id} </h1>
   else if(id==2)return <h1>The Blog Param is {id}</h1>
}

export default Blog;