
import React, { useRef } from "react"; 
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader";

/*export function Mockup3DCube({color,x,y,z}) { 
  return(
    <div className="Mockup3D"> 
    <Canvas>
      <mesh>
        <boxGeometry  args={[x, y, z]}/> 
        <meshPhongMaterial color={color}/>
      </mesh> 

      <ambientLight args={[0xff0000]} intensity={0.1}/> 
      <directionalLight position={[0,0,5]} intensity={0.5}/> 
      
      
      </Canvas> 

    </div>
  )
  
} */

export function Mockup3DBox(){
  const group =useRef();
  const mtl=useLoader(MTLLoader,"untitled.mtl");
  const obj=useLoader(OBJLoader,"untitled.obj",(loader)=>loader.setMaterials(mtl));
  return(
   <group ref={group}> 
   {obj.children.map((child)=>{
    return <primitive key={child.uuid} object={child} />
   })}

   </group>
  );
} 

export function LoadingMockup(){
  return(
    <Canvas camera={{position:[0,0,5]}} >
    <ambientLight/> 
    <pointLight position={[10,10,10]}/>
    <OrbitControls/> 
    <Mockup3DBox/>

  </Canvas>
  )
}


