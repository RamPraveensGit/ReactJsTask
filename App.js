import React from 'react';
import './App.css';
import UserList from './UsersList';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Attendance from './Components/Attendance';
import About from './Components/About';
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom';




const App = ()=>{
  return(
    <div className='App'>

      <BrowserRouter>
        <ul>
          <li> <Link to='/'>Home Page</Link></li>
          <li> <Link to='/userslist'>userslist</Link></li>
          <li> <Link to='/attendance'>attendance</Link></li>
        </ul>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/userslist' element = {<UserList/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/attendance' element = {<Attendance/>}></Route>
        <Route path='/about' element = {<About/>}></Route>

      </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;