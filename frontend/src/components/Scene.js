import React, { useState } from "react";
import { useDrop } from "react-dnd";
import mockupList from "../data/mockup";
import { Mockup} from "./LoadingMockup";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TopSmallPalette, BottomSmallPalete, RightSmallPalette } from "./Palette"; 
import { Box } from "@react-three/drei";

const Scene = ({ color }) => {
  const [scene, setScene] = useState(null);
  const [scale,setScale]=useState(1);
  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addMocupToScene(item.id), 
    
   
    
  }));

  const addMocupToScene = (id) => {
    const mockup = mockupList.find((mockup) => mockup.id === id);
    if (mockup) {
      setScene(mockup);
    } 
    console.log("function add mocup to scene ");
    console.log(id);
  };

  const clearScene = () => {
    setScene(null);
  }; 
  const Zoomin=()=>{
    setScale(scale*1.1)
  } 
  const Zoomout=()=>{
    setScale(scale/1.1)
  }

  return (
    <div className="Scene">
      <TopSmallPalette onDelete={clearScene} />
      <RightSmallPalette zoomin={Zoomin} zoomout={Zoomout}/>
      <div className="RealScene" ref={drop} style={{ width: "95%", height: "80%", alignContent: "center" }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
         
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {  
          scene &&  <Mockup color={color} scale={scale}/>} 
           {
            console.log(scale)
           }
        </Canvas>
      </div>
      <BottomSmallPalete />
    </div>
  );
};

export default Scene;
