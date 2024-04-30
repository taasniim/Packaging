import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Library  from "./Library";
import {Palette} from "./Palette"; 
import Scene from "./Scene";
import { useState } from "react";
function Main(){ 
  const [color, setColor] = useState("#898080");
  const [texture, setTexture] = useState(null);
  const [dimensions, setDimensions] = useState({ x: 1, y: 1, z: 1 }); 
  //--------------------

  const handleColorChange = (color) => {
    setColor(color);
  };
  //---------
  const handleTextureChange = (texture) => {
    setTexture(texture);
    console.log("texture done");
  };
  //--------------
  const handleDimensionsChange = (newDimensions) => {
    setDimensions(newDimensions);
    console.log("dim done");
  };

  
  return( 
    <DndProvider backend={HTML5Backend}>
<div className="Main"> 
<Library/> 
<Scene color={color} texture={texture} dimensions={dimensions}/>
<Palette onColorChange={handleColorChange} onTextureChange={handleTextureChange}  onDimensionsChange={handleDimensionsChange}/>

</div> 
</DndProvider>
  );
}

export default Main;