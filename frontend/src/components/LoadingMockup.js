
import React, { useRef, useState,useEffect} from "react"; 

import { Canvas, useLoader,useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
  import * as THREE from "three";

  
export function Mockup( {color, scale,rotation , texture ,materialType}){
  const mtl=useLoader(MTLLoader,"untitled.mtl");
  const obj=useLoader(OBJLoader,"untitled.obj",(loader)=>loader.setMaterials(mtl)); 

  
  
  const material = new THREE.MeshBasicMaterial({ color : color });
  if (texture){
  const selectedtexture = new THREE.TextureLoader().load(texture);
  material.map= selectedtexture;
}else if (materialType){
  const selectedMaterial= new THREE.TextureLoader().load(materialType);
  material.map=selectedMaterial;
}

  console.log("function Mocup Three");
  
  
  
  
  obj.traverse((child) => {
    if (child instanceof THREE.Mesh) {
      child.material = material;
    }
  });
  
  return(
    <group scale={[scale[0],scale[1],scale[2]]} rotation={[rotation[0],rotation[1],rotation[2]]} >
      <primitive object={obj}/>
    </group>
  )
}    



export function MockupGlb( {color, scale,rotation , texture ,materialType,Animation}){
  const glb=useLoader(GLTFLoader,"box-animation-template-gltf.glb")

  
  
  const material = new THREE.MeshBasicMaterial({ color : color });
  if (texture){
  const selectedtexture = new THREE.TextureLoader().load(texture);
  material.map= selectedtexture;
}else if (materialType){
  const selectedMaterial= new THREE.TextureLoader().load(materialType);
  material.map=selectedMaterial;
}


  console.log("function Mocup Three");
  
 // glb.animation nal9a fih deux animation bech nfilter wa7da 
  const filteredAnimations = glb.animations.filter(animation => animation.name !== "NurbsPathAction");
  
  let mixer;
  //ken famma animation 
  if (filteredAnimations.length > 0) {  
    //mixer houwa elli bech ykoun responsable 3al animation fe scene 
    mixer = new THREE.AnimationMixer(glb.scene); 
    console.log(mixer) 
   // mixer.timeScale=5; hedhi tet7akem fe sor3a 
   console.log("glb.animation",glb.animations) 
   console.log("filtred animation",filteredAnimations)
    filteredAnimations.forEach((clip) => { 
      console.log("clip",clip)
      const action = mixer.clipAction(clip);  
      //action.paused=false; ebih el variable hedha nwa9fou bih el animation    
      
      if (Animation) //ken famma animation
      { 
        action.time=(clip.duration*Animation)/100; //time twa9fou fi nesba mou3ayna  
        console.log(action.time)
        action.paused=true;// wtwa9ef el animation 8adi
      }
      console.log("action",action)
      action.play();
    });
  }

  // Update animations on each frame
  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  });

 
  
  return(
    <group scale={[scale[0],scale[1],scale[2]]} rotation={[rotation[0],rotation[1],rotation[2]]} >
      { glb.scene && <primitive object={glb.scene}   />}
    </group>
  )
}  









