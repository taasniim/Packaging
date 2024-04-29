import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Library  from "./Library";
import {Palette} from "./Palette"; 
import Scene from "./Scene";
import { useState } from "react";
function Main(){ 
  const [color, setColor] = useState("#898080");

  const handleColorChange = (color) => {
    setColor(color);
  };
  return( 
    <DndProvider backend={HTML5Backend}>
<div className="Main"> 
<Library/> 
<Scene color={color}/>
<Palette onColorChange={handleColorChange}/>

</div> 
</DndProvider>
  );
}

export default Main;