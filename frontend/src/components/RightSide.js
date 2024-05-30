// comme le left side c'est la partie qui contient le logo, le parametre et le photo de profile, le rigt side va contient tous les autre component 
import { useState } from "react";
import Header from "../components/Header"; 
import Main from "./Main";

function RightSide({idUser}){  
  const [scene,setScene]=useState(null)
  const [projectname,setProjectName]=useState('') 
  const handleProjectName=(name)=>{
    setProjectName(name);
  } 
  const updateScene=(mockup)=>{
    setScene(mockup);
  
  } 
  return( 
   
    <div className="RightSide"> 
    
      <Header onChangeNameproject={handleProjectName} idUser={idUser} scene={scene}/> 
      <Main projectname={projectname} idUser={idUser} updateSceneForRightSide={updateScene} /> 
   
    
    </div>
  )
} 

export default RightSide;