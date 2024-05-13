import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Library  from "./Library";
import {Palette} from "./Palette"; 
import Scene from "./Scene";
import { useState } from "react";
import { ExternalList,InternalList } from "../data/mockup";


function Main(){ 

  const [scene,setScene]=useState(null);
  const [color, setColor] = useState("#898080");
  const [texture, setTexture] = useState(null);

const [scale,setScale]=useState([1,1,1]) ;
const [Listes,setListes]=useState(ExternalList)
const [materialType, setMaterialType]= useState(null);  

const updateScene=(mockup)=>{
  setScene(mockup)
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
  const handleMaterialChange=(materialType) =>{
    setMaterialType(materialType);
    setTexture(null);

  } 

  const handleMain=(TypeOfListes)=>
  {
    setListes(TypeOfListes)
  }


  
  return( 
    <DndProvider backend={HTML5Backend}>
<div className="Main"> 
<Library handleMain={handleMain}/> 



<Scene color={color} texture={texture} size={scale}  material={materialType} TypeOfObject={Listes} updateValueOfScene={updateScene}/> 
{ 
  Listes === InternalList ? (<div style={{background:"rgba(238, 239, 243, 1)"}}></div>) : (
    <Palette onColorChange={handleColorChange} onTextureChange={handleTextureChange} onSizechange={handleSizeChange} onMaterialChange={handleMaterialChange} scene={scene} /> 
  )
}

{console.log(" scene of main",scene)}

</div> 
</DndProvider>
  );
}

export default Main;