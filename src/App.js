import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
//import NavBar from "./Components/NavBar";
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  return (

    <BrowserRouter>
       <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element = {<About />} />
        <Route path="/Contact" element = {<Contact />} />
        <Route path="/Login" element = {<Login />} />
        <Route path="/Signup" element = {<Signup />} />
      </Routes> 
    </BrowserRouter>
  )
};

export default App();