
import React, { useRef, useState,useEffect} from "react"; 
import logo from '../assets/logo.png';
import { useGLTF } from '@react-three/drei';
import { Canvas, useLoader,useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader";
import { MTLLoader } from "three/examples/jsm/loaders/MTLLoader"; 
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader"; 
import { InternalList,ExternalList } from "../data/mockup";
  import * as THREE from "three";

  




export function ExternalMockup( {color, scale,rotation , texture ,materialType,Animation}){
  
  
  const glb=useLoader(GLTFLoader,"boxx2.glb")

 
  const material = new THREE.MeshBasicMaterial({ color : color ,side: THREE.DoubleSide });
  if (texture){
  const selectedtexture = new THREE.TextureLoader().load(texture);
  material.map= selectedtexture;
}else if (materialType){
  const selectedMaterial= new THREE.TextureLoader().load(materialType); 
  material.map=selectedMaterial;
}  




glb.scene.traverse((node) => {
  if (node.isMesh) {
    node.material = material; 
  
  }
});
 
  
 // glb.animation nal9a fih deux animation bech nfilter wa7da 
  const filteredAnimations = glb.animations.filter(animation => animation.name !== "NurbsPathAction");
  
  let mixer;
  //ken famma animation 
  if (filteredAnimations.length > 0) {  
    //mixer houwa elli bech ykoun responsable 3al animation fe scene 
    mixer = new THREE.AnimationMixer(glb.scene); 

   // mixer.timeScale=5; hedhi tet7akem fe sor3a 
  
    filteredAnimations.forEach((clip) => { 
     
      const action = mixer.clipAction(clip);  
      //action.paused=false; ebih el variable hedha nwa9fou bih el animation    
      action.paused=true 
   
      if (Animation) //ken famma animation
      { 
        action.time=(clip.duration*Animation)/100; //time twa9fou fi nesba mou3ayna  
       
        action.paused=true;// wtwa9ef el animation 8adi
      }
      
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
    <group scale={[scale[0],scale[1],scale[2]]} rotation={[rotation[0],rotation[1],rotation[2]]}   > 
   
      { glb.scene && <primitive object={glb.scene}   />}
    </group>
  )
}   




export function InternalMockup( { scale}){
  
  
  const glb=useLoader(GLTFLoader,"bottle1111.glb")

  
  return(
    <group scale={[scale[0],scale[1],scale[2]]} >
      { glb.scene && <primitive object={glb.scene}   />}
    </group>
  )
}   



 export function Preview({color,scale,displayPreview}){ 
  const glb=useLoader(GLTFLoader,"myboxx-for-preview.glb");
  const material = new THREE.MeshBasicMaterial({ color : color ,side: THREE.DoubleSide });
  glb.scene.traverse((node) => {
    if (node.isMesh) {
      node.material = material; 
    
    }
  });  
  const glbAnimation=glb.animations;
  let mixer; 
  if (glbAnimation.length>0){ 
    mixer=new THREE.AnimationMixer(glb.scene) 
    glbAnimation.forEach((clip)=>{
      const action=mixer.clipAction(clip)  
      if (!displayPreview){
        action.paused=true;
      }
      action.play()
    })
  } 
  useFrame((_, delta) => {
    if (mixer) {
      mixer.update(delta);
    }
  }); 
  return( 
    <group scale={[scale[0],scale[1],scale[2]]} >
    { glb.scene && <primitive object={glb.scene}   />}
  </group>

  );
 }