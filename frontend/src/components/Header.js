import React from 'react';
import { FaArrowLeft, FaPlus, FaAngleLeft, FaAngleRight, FaImage } from 'react-icons/fa';
import firstParticipant from '../assets/firstParticipant.jpg';
import secondParticipant from '../assets/second-participant.jpg';

function Header() {
  return (
    <div className="Header"> 
      <div className="Left"> 
        <FaArrowLeft className="fa-2xl" style={{width:'10%',color:'rgba(65, 48, 188, 1)'}} />
        <p className="Titre">Tool de conception d'emballage</p>
      </div> 
      <div className="Right">  
        <div className="First-container"> 
          <div className="Design">
            <FaImage  style={{color:'rgba(65, 48, 188, 1)' }}/>
            <p>import Label design </p>
          </div> 
        </div>
        
        <div className="Second-container">   
          <div className="Controbutors"> 
            <FaAngleLeft style={{ color: 'rgba(65, 48, 188, 1)',width: '10px', 
            background: 'rgba(238, 239, 243, 1)'}} />
            <FaAngleRight  style={{ color: 'rgba(65, 48, 188, 1)',width: '10px', 
            background: 'rgba(238, 239, 243, 1)'}}/>
            <img src={firstParticipant} alt="First Participant" />
            <img src={secondParticipant} alt="Second Participant" />
            <FaPlus style={{ color: 'rgba(65, 48, 188, 1)',
  width: '10px'}} />
          </div>
        </div> 

        <div className="Publish"> 
          <button> Publier</button>
        </div>
      </div>
    </div>
  );
} 

export default Header;
