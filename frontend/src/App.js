import Tool from "./views/Tool";
import React, {useEffect, useState} from "react";
import HomePage from "./components/homePage";
import Login from "./components/login";
import Signup from "./components/signup";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';


function App() {
const [backendData , setBackendData] = useState([{}])
useEffect(()=>{
  fetch("http://localhost:5000/api").then(
    response => response.json()
  ).then(
    data =>{
      setBackendData(data)
    }
  )
},[])

  return (
    <div className="app">
      
    <Router>
    <Routes>
      
    <Route exact path="/home" element={<HomePage/>} />
    <Route exact path="/" element={<Login/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/Tool" element={<Tool/>} />
    </Routes>
    </Router> 
    </div>
  );
}

export default App;
