import Tool from "./views/Tool";
import React, {useEffect, useState} from "react";
import HomePage from "./views/homePage";
import Login from "./views/login";
import Signup from "./views/signup";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { useId } from "react";


 function App() { 

  const  [idUser,setUserID]=useState(null);


const updateId=(id)=>{
setUserID(id); 
}
  return (
    <div className="app">
      {console.log('tool1',idUser)}
    <Router> 
    {console.log('tool2',idUser)}
    <Routes>
    {console.log('tool3',idUser)}
    <Route exact path="/" element={<Login updateid={updateId}/>} /> 
    {console.log('tool4',idUser)}
    <Route exact path="/home" element={<HomePage id={idUser}/>} /> 
    {console.log('tool5',idUser)}
  
      <Route exact path="/signup" element={<Signup/>} />
      {console.log('tool6',idUser)}
      <Route exact path="/Tool" element={<Tool />} />
      {console.log('tool7',idUser)}
    </Routes>
    {console.log('tool8',idUser)}
    </Router> 
    </div>
  );
}

export default App;
