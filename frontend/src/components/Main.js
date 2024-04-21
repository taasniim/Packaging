import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Library  from "./Library";
import {Palette} from "./Palette"; 
import Scene from "./Scene";
function Main(){
  return( 
    <DndProvider backend={HTML5Backend}>
<div className="Main"> 
<Library/> 
<Scene/>
<Palette/>

</div> 
</DndProvider>
  );
}

export default Main;