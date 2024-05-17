import {Routes,Route,Link} from "react-router-dom"
import New_Products from './New_Products';
import Old_Products from './Old_Products';


export default function About(){
    return <>
    
    <h1>About Page</h1>
    
    <ul>
          <li> <Link to='pro/new_products/1'>New Products</Link></li>
          <li> <Link to='pro/old_products/2'>Old Products</Link></li>
    </ul>

    <Routes path>
        <Route path="pro">
        <Route path='new_products/:id' element = {<New_Products/>}></Route>
        <Route path='old_products/:id' element = {<Old_Products/>}></Route>
        </Route>

    </Routes>
</>
}
