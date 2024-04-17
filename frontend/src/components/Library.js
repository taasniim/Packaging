import React from 'react';
import object1 from '../assets/object1.png'; 
import object2 from '../assets/object2.png';
import object3 from '../assets/object3.png';

function Library() {
  return (
    <div className="Library"> 
      <div className="Head">   
        <div className="Internal"> Internal</div>
        <div className="External">External</div> 
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
          <img src={object1} alt="Object 1" /> 
          <img src={object2} alt="Object 2" />  
          <img src={object1} alt="Object 1" /> 
          <img src={object2} alt="Object 2" /> 
        </div> 
        <div className="Second-column">  
          <img src={object2} alt="Object 2" />
          <img src={object1} alt="Object 1" /> 
          <img src={object2} alt="Object 2" /> 
          <img src={object2} alt="Object 2" />
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
