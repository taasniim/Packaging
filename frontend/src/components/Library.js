import React, { useState } from 'react';
import object1 from '../assets/object1.png'; 
import object2 from '../assets/object2.png';
import Package from './Package';
import object3 from '../assets/object3.png'; 
import {ExternalList,InternalList} from '../data/mockup';
import { useSpriteLoader } from '@react-three/drei';

function Library( {handleMain}) {  
  const [InternalColor,setInternalColor]=useState([" rgba(238, 239, 243, 1)"," rgba(65, 48, 188, 1)"])  ;
  const [ExternalColor,setExternalColor]=useState(["rgba(65, 48, 188, 1)"," rgba(238, 239, 243, 1)"])  ; 
  const [Listes,setListes]=useState(ExternalList)
 
  const LibrayChange=(id)=>{  
    if (id===1){ 
      setInternalColor(["rgba(65, 48, 188, 1)"," rgba(238, 239, 243, 1)"]) 
      setExternalColor([" rgba(238, 239, 243, 1)"," rgba(65, 48, 188, 1)"]) 
      setListes(InternalList) 
      handleMain(InternalList);
      
    }  
    //linear-gradient(106.79deg, rgba(65, 48, 188, 1) -13.72%, rgba(106, 176, 250, 1) 108.14%)
    else if (id===2){
      setExternalColor(["rgba(65, 48, 188, 1)"," rgba(238, 239, 243, 1)"]) 
      setInternalColor([" rgba(238, 239, 243, 1)"," rgba(65, 48, 188, 1)"]) 
      setListes(ExternalList) 
      handleMain(ExternalList)
    }
  }
  return (
    <div className="Library"> 
      <div className="Head">   
        <div className="Internal" id='1' style={{background:InternalColor[0],color:InternalColor[1]}}onClick={()=>LibrayChange(1)} > Internal</div>
        <div className="External"id='2'style={{background:ExternalColor[0],color:ExternalColor[1]}}  onClick={()=>LibrayChange(2)}>External</div> 
      </div> 

      <div className="Search">  
        <input type="Text" placeholder="search" />
      </div> 

      <div className="Choix">  
        <div> Creme</div> 
        <div> Serume</div>  
        <div> Creme</div> 
        <div> Serume</div> 
      </div> 

      <div className="Packaging"> 
        <div className="First-column">  
        {
          Listes.map((mockup)=>  { 
            if (mockup.id %2===0){
            return <Package src={mockup.src} id={mockup.id}/>}
          })
        }
        </div> 
        <div className="Second-column">  
        {
          Listes.map((mockup)=>  { 
            if (mockup.id %2!==0){
            return <Package src={mockup.src} id={mockup.id}/>}
          })
        }
        </div>
      </div>  

      <div className="Other-lists"> 
        <div><p>Judges</p> <span className="fas fa-angle-down"></span></div> 
        <div><p>Bottles</p> <span className="fas fa-angle-down"></span></div> 
        <div><p>Tubes</p> <span className="fas fa-angle-down"></span></div>
      </div>
    </div> 
  );
}

export default Library;
