import React, { useState,useEffect } from "react";
import { useDrop } from "react-dnd";
import mockupList from "../data/mockup";
import { Mockup} from "./LoadingMockup";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TopSmallPalette, BottomSmallPalete, RightSmallPalette } from "./Palette"; 



const Scene = ({ color ,texture ,size}) => {
  const [scene, setScene] = useState(null);
  const [scale,setScale]=useState(size); 
const [rotaionX,setRotationX]=useState(0); 
console.log("hello scale scene",scale); 
console.log("hello size scene",size);


  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addMocupToScene(item.id), 
    
   
    
  }));

  const addMocupToScene = (id) => {
    const mockup = mockupList.find((mockup) => mockup.id === id);
    if (mockup) {
      setScene(mockup);
    } 
   
  };

  const clearScene = () => { 
   
    setScene(null);
  }; 
  const Zoomin=()=>{
    setScale([size[0]*1.1,size[1]*1.1,size[2]*1.1]) 
    console.log("hello Zoom in function",scale)
  } 
  const Zoomout=()=>{
    setScale([size[0]/1.1,size[1]/1.1,size[2]/1.1]) 
    console.log("hello ZoomOut function",scale)
  }
 const RotationX=()=>{
   setRotationX(rotaionX+(Math.PI)/4); 
    
  }
  
  useEffect(() => {
    setScale(size);
  }, [size]); 
  console.log("scale apre useeffect",scale);
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
          scene &&  <Mockup color={color} scale={scale} rotationX={rotaionX} texture={texture} />} 
           {
            console.log("scale apres appel Mocup",scale)
           }
        </Canvas>
      </div>
      <BottomSmallPalete zoomin={Zoomin} zoomout={Zoomout} rotationX={RotationX} />
    </div>
  );
};

export default Scene;
