import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Library  from "./Library";
import {Palette} from "./Palette"; 
import Scene from "./Scene";
import { useState } from "react";
function Main(){ 
  const [color, setColor] = useState("#898080");
  const [texture, setTexture] = useState(null);
  

  const handleColorChange = (color) => {
    setColor(color);
  };

  const handleTextureChange = (texture) => {
    setTexture(texture);
    console.log("texture done");
  };
  
  

  
  return( 
    <DndProvider backend={HTML5Backend}>
<div className="Main"> 
<Library/> 
<Scene color={color} texture={texture} />
<Palette onColorChange={handleColorChange} onTextureChange={handleTextureChange} />

</div> 
</DndProvider>
  );
}

export default Main;