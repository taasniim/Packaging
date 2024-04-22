import {useDrag} from "react-dnd"
function Package({id,src}){ 
const [{isDragging},drag]=useDrag(()=>({
  type:"image",
item:{id:id},
collect:(monitor)=>({
  isDragging:monitor.isDragging(),
})
}))
  return(
    <img 
    src={src} 
    ref={drag} 
    style={{border:isDragging?"2px solid gray":"0px"}}
    />
  );
} 

export default Package;
