import React from 'react';
import { FaCog } from 'react-icons/fa';
import photoProfile from '../assets/photo-profile.jpg';
import logo from '../assets/logo.png';

function LeftSide() {
  return (
    <div className="LeftSide"> 
      <div className="Logo">  
        <img src={logo} alt="Logo" /> 
      </div> 
      <div className="Profil-Settings"> 
        <div className="Container">
          <FaCog style={{ position: 'absolute', top: '75%', left: '30%', color: 'rgb(132, 133, 137)' }} />
          <img src={photoProfile} alt="Photo de profil" /> 
        </div>
      </div>
    </div> 
  );
} 

export default LeftSide;
