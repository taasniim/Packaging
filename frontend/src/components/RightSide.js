// comme le left side c'est la partie qui contient le logo, le parametre et le photo de profile, le rigt side va contient tous les autre component 
import { useState } from "react";
import Header from "../components/Header"; 
import Main from "./Main";

function RightSide({idUser}){  
  const [scene,setScene]=useState(null) 
  const [projectname,setProjectName]=useState('')  
  const [color, setColor] = useState("#FFFFFF");
  const [texture, setTexture] = useState(null);
  const [scale,setScale]=useState([1,1,1]) ;
  const handleProjectName=(name)=>{
    setProjectName(name);
  } 
  const updateScene=(mockup)=>{
    setScene(mockup);
  
  }  

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleTextureChange = (texture) => {
    setTexture(texture);
   
  };

  const handleSizeChange = ([x,y,z]) => {
    setScale([x,y,z]); 
   
  };
  return( 
   
    <div className="RightSide"> 
    
      <Header onChangeNameproject={handleProjectName} projectName={projectname} idUser={idUser} scene={scene} color={color} size={scale} texture={texture}/> 
      <Main projectname={projectname} idUser={idUser} updateSceneForRightSide={updateScene} updateColorForRightSide={handleColorChange} updateTextureForRightSide={handleTextureChange} updateSizeForRightSide={handleSizeChange} updateProjectName={handleProjectName} /> 
  
    </div>
  )
} 

export default RightSide;