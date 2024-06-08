import React, { useEffect, useState } from 'react';
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

function Header({onChangeNameproject,projectName,idUser,scene,color,size,texture,handleCurrentProject,Project}) { 

console.log('size  heeder of uopdate',size)

  const handleInputChange = (e) => {
    onChangeNameproject(e.target.value); 
    
  }; 
  const createProject= async()=>{  
   let project;  
   if (projectName.length===0 || !idUser){
    return;
  }
   if (!Project){
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
             const responseMockup=await axios.post('http://localhost:5000/api/mockups',mockup)  
            
             const idMockup=responseMockup.data._id;  
            
             project={
              project_name:projectName, 
              owner:idUser,
              mockups:idMockup,
             } 
             
        } 
      
     const responseProject= await axios.post('http://localhost:5000/api/project',project); 
    
        handleCurrentProject(responseProject.data)
     
      }
    catch(error){
      console.error('Error while saving project:', error);
    }} 
    
   
  } 
  const saveMockupChange= async()=>{ 
  
    if (projectName.length===0 || !idUser){
     return; }
     
     try{  
 
        const mockup={ 
          ...scene, 
          color:color,
          texture:texture,
          size:{x:size[0],y:size[1],z:size[2]},
        } 
           const response=await axios.put(`http://localhost:5000/api/mockups/${Project.mockups[0]}`,mockup)  
          console.log('mockkkkkkkkkkkkkkup upda',response)
           const idMockup=response.data._id;  
          
          
           
      } 
    
 
  catch(error){
    console.error('Error while updating project:', error);
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
       <button  className="saveButton" onClick={createProject}> Create </button> 
        <button  className="saveButton" onClick={saveMockupChange}> save</button> 
        { console.log(' The Project is  ',Project)}
   
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
