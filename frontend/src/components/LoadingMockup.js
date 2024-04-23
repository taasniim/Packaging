
import React from "react"; 
import { Canvas } from "@react-three/fiber";


function Mockup3D({color,x,y,z}) { 
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
  
}

export default Mockup3D;
