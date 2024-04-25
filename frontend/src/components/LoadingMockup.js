
import React, { useRef } from "react"; 
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";



export function Mockup3DBox({color}){
  const group =useRef();
  const mtl=useLoader(MTLLoader,"untitled.mtl");
  const obj=useLoader(OBJLoader,"untitled.obj",(loader)=>loader.setMaterials(mtl));
  return(
   <group ref={group}> 
   {obj.children.map((child,index)=>{
    return(
      <mesh key={index} material-color={color} > 
        <primitive object={child}/> 
        <meshBasicMaterial attach="material" color={color}/>
      </mesh>
    );
   })}

   </group>
  );
} 

export function LoadingMockup({color}){
  return(
    <Canvas camera={{position:[0,0,5]}} >
    <ambientLight/> 
    <pointLight position={[10,10,10]}/>
    <OrbitControls/> 
    <Mockup3DBox color={color}/>

  </Canvas>
  )
}


