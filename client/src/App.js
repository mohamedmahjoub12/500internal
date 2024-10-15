import React, { useEffect } from 'react';
import './App.css';
import {Routes , Route} from "react-router-dom"
import NavBar from './components/navBar';
import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Errors from './pages/Errors';
import Profile from './pages/Profile';



function App() {
  
  return (
    <div className="App">
     <NavBar/>
<Routes>
<Route path='/' element={<Home/>}/>
<Route path='/register' element={<Register/>} />
<Route path='/login' element={<Login/>} />
<Route path='/profile' element={<Profile/>} />
<Route path='/*' element={<Errors/>} />

</Routes>
    </div>
  );
}

export default App;
