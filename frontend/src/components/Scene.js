import React, { useState,useEffect } from "react";
import { useDrop } from "react-dnd";
import {ExternalList, InternalList} from "../data/mockup";
import { ExternalMockup,InternalMockup,Mockup} from "./LoadingMockup";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TopSmallPalette, BottomSmallPalete, RightSmallPalette } from "./Palette"; 
import Ruler from "@scena/react-ruler"; 
import { height, width } from "@mui/system";



const Scene = ({ color ,texture ,size , materialType,TypeOfObject,updateValueOfScene, projectname}) => {

  const [scene, setScene] = useState(null); 
  
  const [scale,setScale]=useState(size); 
const [rotation,setRotation]=useState([0,0,0]);  
const[OpenClose,setOpenClose]=useState(0) 
const [Rule,setRule]=useState(false);
 



  const [{ isOver }, drop] = useDrop(() => ({
    accept: "image",
    drop: (item) => addMocupToScene(item.id), 
    
   
    
  }));

  const addMocupToScene = (id) => {
    const mockup = ExternalList.find((mockup) => mockup.id === id);
    if (mockup) {
      setScene(mockup);  
     
      updateValueOfScene(mockup)  
      
    }  
   
  
  }; 
  

  const clearScene = () => { 
   
    setScene(null); 
    updateValueOfScene(null)
    setScale([1,2,1]);
    setRotation([0,0,0]) 

   
  }; 
  const Zoomin=()=>{
    setScale([scale[0]*1.1,scale[1]*1.1,scale[2]*1.1]) 
    console.log("hello Zoom in function",scale)
  } 
  const Zoomout=()=>{
    setScale([scale[0]/1.1,scale[1]/1.1,scale[2]/1.1]) 
    console.log("hello ZoomOut function",scale)
  }
 const RotationX=()=>{
   setRotation([rotation[0],rotation[1]+(Math.PI)/4,rotation[2]]); 
    
  } 
  const RotationY=()=>{
    setRotation([rotation[0]+(Math.PI)/4,rotation[1],rotation[2]]); 
     
   } 

   const RotationZ=()=>{
    setRotation([rotation[0],rotation[1],rotation[2]+(Math.PI)/4]); 
     
   }
  
  useEffect(() => {
    setScale(size);
  }, [size]);  
  const handleOpenClose=( value)=>{
    setOpenClose(value);  
    
  } 
  const displayRule=()=>{
    setRule(!Rule);
  }
  return (
    <div className="Scene">   
    { Rule &&(
     <div className="horizentalRuler " > <Ruler backgroundColor="rgba(250, 250, 251, 1)" textColor="black" ></Ruler> </div>  
    
     ) }  
      { Rule &&(
     <div className="verticalRuler " > <Ruler type="vertical"  backgroundColor="rgba(250, 250, 251, 1)" textColor="black" ></Ruler> </div>  
    
     ) } 


   
     {/* <Ruler type="horizontal" backgroundColor=" rgba(250, 250, 251, 1)" style={{height:"5%"}}/> */}
      <TopSmallPalette onDelete={clearScene} onClickRule={displayRule} /> 
     
      {
        TypeOfObject===ExternalList? (
          <RightSmallPalette zoomin={Zoomin} zoomout={Zoomout} OpenClose={handleOpenClose}/>
        ) : null
      }

      <div className="RealScene" ref={drop} style={{ width: "95%", height: "70%", alignContent: "center", marginBottom:'0%'}}>
        <Canvas camera={{ position: [0, 0, 5] }} style={{display:'inline-block'}}>
         
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <OrbitControls />  

          
          {console.log("material tyoe scene",materialType)}

          
          {scene && (
  TypeOfObject === ExternalList ? (
    <ExternalMockup color={color} scale={scale} rotation={rotation} texture={texture} material={materialType} Animation={OpenClose} />
    
  ) : (
    <InternalMockup scale={scale} rotation={rotation} />
  )
) 



} 
{scene !== null && (
  console.log("scene  de la sceeeeeeeeeen", scene)
)}






   
         
        </Canvas>
      </div>
      <BottomSmallPalete zoomin={Zoomin} zoomout={Zoomout} rotationX={RotationX} rotationY={RotationY} rotationZ={RotationZ} projectname={projectname}/> 
      {console.log('project name apres bottome small palette',projectname)}
    </div>
  );
};

export default Scene;
