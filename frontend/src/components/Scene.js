import React, { useRef, useEffect , useState} from "react";
import * as THREE from "three";
import { TopSmallPalette,BottomSmallPalete,RightSmallPalette } from "./Palette"; 
import { useDrop } from "react-dnd";
import mockupList from "../data/mockup";
import Package from "./Package";
import Mockup3D from "./LoadingMockup";
const Scene = () => { 
  const [scene,setScene]=useState([]);
  const [{isOver},drop]=useDrop(()=>({
    accept:"image",
    drop:(item)=>addMocupToScene(item.id),
    collect:(monitor)=>({
      isOver:monitor.isOver(),
    })
  })) 
  const addMocupToScene=(id)=>{
    const mockuplist=mockupList.filter((onemockup)=>id===onemockup.id);
    setScene([mockuplist[0]])
  }
  
 return(
  <div className="Scene">  
  <TopSmallPalette/>  
  <RightSmallPalette/>
  < div className="RealScene" ref={drop} style={{ width:"95%",height:"80%",alignContent:"center"}}>

  {scene.map((mockup)=>{ 
    if (mockup.id%2===0){
      return (
        <React.Fragment key={mockup.id} >
      <Mockup3D color={mockup.color} x={mockup.x} y={mockup.y} z={mockup.z} />
      </React.Fragment>
  );}
  else{
    return (
      <React.Fragment key={mockup.id} >
    <Package src={mockup.src} id={mockup.id} />
    <input type="color"/> 
    </React.Fragment>
);
  }
      

    })} 
    
    </div>
    
  <BottomSmallPalete/>

  </div>
 );
  };

export default Scene;