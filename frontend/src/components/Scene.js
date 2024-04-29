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

  return (
    <div className="Scene">
      <TopSmallPalette onDelete={clearScene} />
      <RightSmallPalette />
      <div className="RealScene" ref={drop} style={{ width: "95%", height: "80%", alignContent: "center" }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
         
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />
          {  
          scene &&  <Mockup color={color}/>} 
           {
            console.log(color)
           }
        </Canvas>
      </div>
      <BottomSmallPalete />
    </div>
  );
};

export default Scene;
