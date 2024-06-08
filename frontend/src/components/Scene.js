import React, { useState,useEffect } from "react";
import { useDrop } from "react-dnd";
import {ExternalList, InternalList} from "../data/mockup";
import { ExternalMockup,InternalMockup,Mockup} from "./LoadingMockup";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { TopSmallPalette, BottomSmallPalete, RightSmallPalette } from "./Palette"; 
import Ruler from "@scena/react-ruler"; 
import { height, width } from "@mui/system";



const Scene = ({scene, color ,texture ,size , materialType,TypeOfObject,updateValueOfScene, projectname,idUser,onColorChange,onSizeChange,ontextureChange,updateProjectName,handleCurrentProject,CurrentProject}) => {

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
     
     
      updateValueOfScene(mockup)  
      
    }  
   
  
  }; 
  

  const clearScene = () => { 
   
   onColorChange("#FFFFFF")
    updateValueOfScene(null)
   onSizeChange([1,1,1])
    setRotation([0,0,0]) 

   
  }; 
  const Zoomin=()=>{
    onSizeChange([size[0]*1.1,size[1]*1.1,size[2]*1.1]) 
   
  } 
  const Zoomout=()=>{
    onSizeChange([size[0]/1.1,size[1]/1.1,size[2]/1.1]) 
   
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
      <TopSmallPalette onDelete={clearScene} onClickRule={displayRule} idUser={idUser} SizeEdit={onSizeChange}  TextureEdit={ontextureChange} updateValueOfScene={updateValueOfScene} updateValueOfColor={onColorChange} OnEditUpdateProjectName={updateProjectName} handleCurrentProject={handleCurrentProject} CurrentProject={CurrentProject} /> 
     
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

          
          

          
          {scene && (
  TypeOfObject === ExternalList ? (
    <ExternalMockup color={color} scale={size} rotation={rotation} texture={texture} material={materialType} Animation={OpenClose} />
    
  ) : (
    <InternalMockup scale={size} rotation={rotation} />
  )
) 



} 







   
         
        </Canvas>
      </div>
      <BottomSmallPalete zoomin={Zoomin} zoomout={Zoomout} rotationX={RotationX} rotationY={RotationY} rotationZ={RotationZ} projectname={projectname} idUser={idUser}/> 
      
    </div>
  );
};

export default Scene;
