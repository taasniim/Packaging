import React, { useRef, useEffect , useState} from "react";
import * as THREE from "three";
import { TopSmallPalette,BottomSmallPalete,RightSmallPalette } from "./Palette"; 
import { useDrop } from "react-dnd";
import mockupList from "../data/mockup";
import Package from "./Package";
import { Mockup3DBox,LoadingMockup} from "./LoadingMockup";
import { Canvas } from "@react-three/fiber"; 
import { OrbitControls } from "@react-three/drei";
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
   
    return (
      <React.Fragment key={mockup.id} >
     <LoadingMockup/>
    </React.Fragment>
);
  
      

    })} 
    
    </div>
    
  <BottomSmallPalete/>

  </div>
 );
  };

export default Scene;