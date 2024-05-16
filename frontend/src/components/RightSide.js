// comme le left side c'est la partie qui contient le logo, le parametre et le photo de profile, le rigt side va contient tous les autre component 
import { useState } from "react";
import Header from "../components/Header"; 
import Main from "./Main";

function RightSide({idUser}){ 
  const [projectname,setProjectName]=useState('') 
  const handleProjectName=(name)=>{
    setProjectName(name);
  }
  return( 
   
    <div className="RightSide"> 
    
      <Header onChangeNameproject={handleProjectName}/> 
      <Main projectname={projectname} idUser={idUser} /> 
    {console.log('title og project right side ',projectname)}
    </div>
  )
} 

export default RightSide;