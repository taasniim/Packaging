
import React, { useRef, useState } from "react"; 

import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";
  import * as THREE from "three";
  
export function Mockup( {color, scale,rotationX , texture}){
  const mtl=useLoader(MTLLoader,"untitled.mtl");
  const obj=useLoader(OBJLoader,"untitled.obj",(loader)=>loader.setMaterials(mtl)); 
  
  const material = new THREE.MeshBasicMaterial({ color: color });
  if (texture) {
    const selectedTexture = new THREE.TextureLoader().load(texture);
    material.map = selectedTexture;
  }
  console.log("function Mocup Three");
  //obj.children[0].material.color=new THREE.Color(color);  
 
  
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });
  
  return(
    <group scale={[scale,scale,scale]} rotation={[0,rotationX,0]} >
      <primitive object={obj}/>
    </group>
  )
}





