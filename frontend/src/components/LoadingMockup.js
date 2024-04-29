
import React, { useRef, useState } from "react"; 
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
  
export function Mockup(){
  const mtl=useLoader(MTLLoader,"untitled.mtl");
  const obj=useLoader(OBJLoader,"untitled.obj",(loader)=>loader.setMaterials(mtl)); 
  console.log("function Mocup Three")
  return(
    <group>
      <primitive object={obj}/>
    </group>
  )
}





