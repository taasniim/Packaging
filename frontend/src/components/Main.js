import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Library  from "./Library";
import {Palette} from "./Palette"; 
import Scene from "./Scene";
import { useState } from "react";

function Main(){ 
  const [color, setColor] = useState("#898080");
  const [texture, setTexture] = useState(null);

const [scale,setScale]=useState([1,1,1]) 
const [materialType, setMaterialType]= useState(null); 



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
  


  
  return( 
    <DndProvider backend={HTML5Backend}>
<div className="Main"> 
<Library/> 



<Scene color={color} texture={texture} size={scale}  material={materialType}/>
<Palette onColorChange={handleColorChange} onTextureChange={handleTextureChange} onSizechange={handleSizeChange} onMaterialChange={handleMaterialChange} />


</div> 
</DndProvider>
  );
}

export default Main;