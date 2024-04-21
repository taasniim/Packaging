import React from 'react';
import object1 from '../assets/object1.png'; 
import object2 from '../assets/object2.png';
import Package from './Package';
import object3 from '../assets/object3.png'; 
import mockupList from '../data/mockup';

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
        {
          mockupList.map((mockup)=>  {
            return <Package src={mockup.src} id={mockup.id}/>
          })
        }
        </div> 
        <div className="Second-column">  
        {
          mockupList.map((mockup)=>  {
            return <Package src={mockup.src} id={mockup.id}/>
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
