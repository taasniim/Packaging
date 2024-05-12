import Tool from "./views/Tool";
import React, {useEffect, useState} from "react";
import HomePage from "./views/homePage";
import Login from "./views/login";
import Signup from "./views/signup";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useId } from "react";


function App() {
  const [idUser,setUserId]= useState(null)

const updateId=(id)=>{
  setUserId(id);
}

  return (
    <div className="app">
      
    <Router>
    <Routes>
      
    <Route exact path="/home" element={<HomePage id={idUser}/>} />
    {console.log("app js id",idUser)}
    <Route exact path="/" element={<Login  updateid={updateId}/>} />
      <Route exact path="/signup" element={<Signup/>} />
      <Route exact path="/Tool" element={<Tool/>} />
    </Routes>
    </Router> 
    </div>
  );
}

export default App;
