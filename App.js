import React from 'react';
import './App.css';
import UserList from './Components/UserList'; 
import Home from './Components/Home';
import Contact from './Components/Contact';
import Attendance from './Components/Attendance';
import About from './Components/About';
import Blog from './Components/Blog';
import { BrowserRouter, Routes, Route, Link, Navigate} from 'react-router-dom';
import ErrorPage from './Components/ErrorPage';
import EmployeeList from './Components/EmployeeList';

const App = ()=>{
  return(
    <div className='App'>
      <div>
      <BrowserRouter >
        <ul className='Links'>
          <li> <Link to='/'>Home Page</Link></li>
          <li> <Link to='/userlist'>userlist</Link></li>
          <li> <Link to='/about'>About</Link></li>
          <li> <Link to='/contact'>Contact</Link></li>
          <li> <Link to='/attendance'>Attendance</Link></li>
          <li> <Link to='/blog/1'>Blog 1</Link></li>
          <li> <Link to='/blog/2'>Blog 2</Link></li>
          <li> <Link to='/employees'>Employee List</Link></li>

        </ul>
      <Routes>
        <Route path='/' element = {<Home/>}></Route>
        <Route path='/userlist' element = {<UserList/>}></Route>
        <Route path='/contact' element = {<Contact/>}></Route>
        <Route path='/attendance' element = {<Attendance/>}></Route>
        <Route path='/about/*' element = {<About/>}></Route>
        <Route path='/blog/:id' element = {<Blog/>}></Route>
        <Route path='/error' element = {<ErrorPage/>}></Route>
        <Route path='*' element = {<Navigate to={'/error'} replace/>}></Route>
        <Route path='/employees' element = {<EmployeeList/>}></Route>

      </Routes>
      </BrowserRouter>
      </div>
    </div>
  );
}


export default App;
