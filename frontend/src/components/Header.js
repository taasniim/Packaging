import React, { useState } from 'react';
import { FaArrowLeft, FaPlus, FaAngleLeft, FaAngleRight, FaImage } from 'react-icons/fa';
import firstParticipant from '../assets/firstParticipant.jpg';
import secondParticipant from '../assets/second-participant.jpg';
import Button from '@mui/material/Button'; 
import ImageIcon from '@mui/icons-material/Image';  
import HomePage from '../views/homePage'; 
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link } from '@material-ui/core';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box'; 
import axios from 'axios';

function Header({onChangeNameproject,idUser,scene,color,size,texture}) { 
  const [projectName, setProjectName] = useState('');

  const handleInputChange = (e) => {
    setProjectName(e.target.value); 
    onChangeNameproject(e.target.value)
  }; 
  const createProject= async()=>{  
   let project;
    if (projectName.length===0 || !idUser){
      return;
    }
    
      try{  
        if(!scene) {
         project={
          project_name:projectName, 
          owner:idUser 
          
        }} 
        else{
          const mockup={ 
            ...scene, 
            color:color,
            texture:texture,
            size:{x:size[0],y:size[1],z:size[2]},
          } 
             const response=await axios.post('http://localhost:5000/api/mockups',mockup)  
            console.log('mockkkkkkkkkkkkkkup heaaaader',response)
             const idMockup=response.data._id;  
            
             project={
              project_name:projectName, 
              owner:idUser,
              mockups:idMockup,
             } 
             
        } 
      
      await axios.post('http://localhost:5000/api/project',project);
      console.log('projectsaved',project)
      }
    catch(error){
      console.error('Error while saving project:', error);
    }
  }
  return (
    <div className="Header"> 
      <div className="Left">  
      <Link to="/home" >
      <IconButton>
          <ArrowBackIcon style={{ width: '50%', color: 'navy' }}  /> 
         
             </IconButton> 
        </Link> 
        <p className="Titre">Tool de conception d'emballage</p> 
        <input className="InputWithTitle" placeholder="Project name"  value={projectName}
          onChange={handleInputChange}></input>   
        <button  className="saveButton" onClick={createProject}> save</button> 
        { console.log('color header ',color)}
   { console.log('sizer header',size)}
   { console.log('texture header ',texture)}
      </div>  

      <div className="Right">  
        <div className="First-container">  
        
        <Button
       component="label"
      role={undefined}
      variant="contained"
      tabIndex={-1}
      startIcon={<ImageIcon sx={{color:'rgba(65, 48, 188, 1)'}} />} 
      sx={{bgcolor:'rgba(238, 239, 243, 1)',color:'black',textTransform:'none','&:hover':{bgcolor:' rgb(212, 208, 208)',cursor:'pointer'}}} >
  import label design
  <Box sx={{ position: 'absolute',width: 1, height: 1, overflow: 'hidden', clip: 'rect(0 0 0 0)', '&:focus': { outline: 'auto' } }}>
    <input type="file" />
  </Box>
</Button>
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
