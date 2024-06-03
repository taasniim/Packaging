import React from 'react';
import { useTexture } from '@react-three/fiber';
import texture1 from '../assets/texture1.jpg'; 
import texture2 from '../assets/texture2.jpg';
import texture3 from '../assets/texture3.jpg';
import texture4 from '../assets/texture4.jpg';
import texture5 from '../assets/texture5.jpg';
import texture6 from '../assets/texture6.jpg';
import carton from'../assets/carton.jpg';
import blanc from '../assets/blancjpg.jpg';
import { FaCompress, FaDownload, FaExpand, FaFile, FaMinus, FaPlus, FaRuler,FaSyncAlt,FaTrash } from 'react-icons/fa'; 
import { Slider } from '@mui/material';
import Box from '@mui/material/Box'; 
import IconButton from '@mui/material/IconButton'; 
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import { useState , useEffect} from 'react';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import RotateLeftIcon from '@mui/icons-material/RotateLeft';
import DeleteIcon from '@mui/icons-material/Delete';
import {  Tooltip, Menu, MenuItem } from '@mui/material';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import ZoomInRoundedIcon from '@mui/icons-material/ZoomInRounded';
import ZoomOutRoundedIcon from '@mui/icons-material/ZoomOutRounded';
import FileDownloadRoundedIcon from '@mui/icons-material/FileDownloadRounded';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import { ExternalMockup,Preview,Mockup } from './LoadingMockup';
import { FaPause } from 'react-icons/fa';
import Scene from './Scene';
import axios from 'axios';

export function Palette({onColorChange , onTextureChange,onSizechange ,onMaterialChange,scene,color,scale}) { 
 
  const [dispalyPreview,setdisplayPreview]=useState(false);
  
  const [materialType, setMaterialType]= useState(null);  
  const handlesize=(event)=>{ 
    const id= parseInt(event.target.id);
    const value=parseFloat(event.target.value);  
    if (!isNaN(value)){
    if(id===1){
      
      onSizechange([value,scale[1],scale[2]])
    }
    else if(id===2){ 
     
      onSizechange([scale[0],value,scale[2]])

    } 
    else if(id===3){
      
      onSizechange([scale[0],scale[1],value])
    }
   
  }
  else if (event.target.value === '') {
    if (id === 1) {
      onSizechange([0, scale[1], scale[2]]);
    } else if (id === 2) { 
      onSizechange([scale[0], 0, scale[2]]);
    } else if (id === 3) {
      onSizechange([scale[0], scale[1], 0]);
    }

  }

}
    

const handleColor=(event)=>{
    const newcolor = event.target.value;
   
    onColorChange(newcolor);
  }
  
  const handleTextureChange = (newTexture) => {
    onTextureChange(newTexture);
  };

  
  const handleMaterialChange =(newMaterialType) =>{
    setMaterialType(newMaterialType) 
    
    onMaterialChange( newMaterialType); 
  
  } 
  const onClickdisplayPreview=()=>{
    setdisplayPreview(!dispalyPreview);
  }


  return( 
    <div className="Palette">   
      <div className="Size"> 
        <p> Size</p> 
        <input type="number" name="" id="1"   placeholder="X" value={scale[0]} onInput={handlesize}/> 
        <input type="number" name="" id="2"placeholder="Y" value={scale[1]} onInput={handlesize} /> 
        <input type="number" name="" id="3" placeholder="W"value={scale[2]} onInput={handlesize} /> 
        <input type="number" name="" id="" placeholder="H" />
      </div> 
      <div className="Color">  
        <p>Color</p>  
        <div><input type="color" name="" id="" value={color} onChange={handleColor}/></div>
      </div> 
      <div className="Texture"> 
        <p>Texture</p> 
        <img src={texture1} alt="" onClick={() => handleTextureChange(texture1)} /> 
        <img src={texture2} alt="" onClick={() => handleTextureChange(texture2)} /> 
        <img src={texture3} alt="" onClick={() => handleTextureChange(texture3)} /> 
        <img src={texture2} alt="" onClick={() => handleTextureChange(texture4)} /> 
        <img src={texture1} alt="" onClick={() => handleTextureChange(texture5)} />
        <img src={texture6} alt="" onClick={() => handleTextureChange(texture6)} />
        
      </div> 
      <div className="Material"> 
        <p>Material</p> 
        <img src={blanc} alt="" onClick={()=>handleMaterialChange(blanc)} /> 
        <img src={carton} alt="" onClick={()=>handleMaterialChange(carton)} />
      </div> 
      <div className="Quantity"> 
        <p>Quantity</p>  
        <div className="List-price"> 
          <div> <p className="Number"> 1pc</p> <hr /> <p className="Price">   {scene !== null && ( <span>{scene.price*1}</span>)}dt</p></div>  
          <div> <p className="Number"> 100pc</p> <hr /> <p className="Price">  {scene !== null && ( <span>{scene.price*100}</span>)}dt</p></div> 
          <div> <p className="Number"> 500pc</p> <hr /> <p className="Price">  {scene !== null && ( <span>{scene.price*500}</span>)}dt</p></div>  
          <div> <p className="Number"> 1000pc</p> <hr /> <p className="Price">  {scene !== null && ( <span>{scene.price*1000}</span>)}dt</p></div>   
          {console.log(' scene of Palette', scene )}
        </div>  
        <input type="number" name="" id="" placeholder="quantité personnalisé" />  
      </div>   
      <p>Preview</p> 
     
    
    <div className={`Preview ${dispalyPreview? 'active' : 'inactive'}`} style={{width:'170px'}} onClick={onClickdisplayPreview}>  
  
  <Canvas>
  <ambientLight /> 
  <pointLight position={[10, 10, 10]} />  

       {scene && <Preview color={color} scale={scale} displayPreview={dispalyPreview}/>}

  </Canvas>


        

  </div>
  
      <div className="Export">  
        <p>Export</p>
        <select id="imageType" name="imageType">
          <option value="png">PNG</option>
          <option value="jpeg">JPEG</option>
          <option value="gif">GIF</option>
        </select> 
        <select id="sizeImage" name="sizeImage">
          <option value="X1">X1</option>
          <option value="X2">X2</option>
          <option value="X3">X3</option> 
        </select>  
        <button> Export High Resolution</button>
      </div>
    </div>
  );
} 




 export function TopSmallPalette({onDelete,onClickRule,idUser,SizeEdit,TextureEdit,updateValueOfScene,updateValueOfColor,OnEditUpdateProjectName}){
  const [projects, setProjects] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAllProjects, setShowAllProjects] = useState(false);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/project/${idUser}`); 
        
        setProjects(response.data);
        
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProjects();
  }, []); 
  

  const handleClose = () => {
    setAnchorEl(null); 
    console.log('hello')
  };
  
 

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  
  };



  const handleViewMore = () => {
    setShowAllProjects(true);
    handleClose();
  };
  //chnouwa bech ysir ki yecliqui 3al projet 
  const handleProjectClick= async(project)=>{ 
    console.log('the project  clickant is',project.mockups) 
    const Idmockup=project.mockups; 
    const projectName=project.project_name;  
    OnEditUpdateProjectName(projectName)
    console.log('the project name is ',projectName,'and son mockup is ',Idmockup[0])
    if(Idmockup.length!==0){
      try{ 
        const mockup= await axios.get(`http://localhost:5000/api/mockups/${Idmockup[0]}`)
        console.log('the donne of mockup is ',mockup) 
        console.log(mockup.data)
        console.log(mockup.data.size)
        console.log(mockup.data.texture)   
        const{color,size,texture,material,quantity,createdAt,updatedAt,_id,__v,...scene }=mockup.data  

        updateValueOfScene(scene)
        updateValueOfColor(mockup.data.color) 
        TextureEdit(texture) 
        SizeEdit([size.x,size.y,size.z])
       
      } 
      catch (error){
        console.error('Error fetching data:', error);
      }
    }
    handleClose()
  }
  return (
    <div className='TopSmallPalette'>
      <Tooltip title="History">
        <IconButton onClick={handleClick}>
          <FaFile style={{ width: '50%', color: 'navy' }} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete">
        <IconButton>
          <FaTrash style={{ width: '50%', color: 'navy' }} onClick={onDelete} />
        </IconButton>
      </Tooltip>
      <Tooltip title="Repère">
        <IconButton>
          <FaRuler style={{ width: '60%', color: 'navy' }} onClick={onClickRule} />
        </IconButton>
      </Tooltip>

      {/* Menu for project names */}
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        id="account-menu"
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}

      >
        {/* Display first six projects or all projects if "View More" clicked */}
        {projects.slice(0, showAllProjects ? projects.length : 20).map(project => (
          <MenuItem key={project._id} onClick={()=>handleProjectClick(project)}>{project.project_name}
          <DriveFileRenameOutlineIcon style={{width:'15%',color:'navy'}}/></MenuItem>
        ))}
        {/* Add a "View More" option */}
        <MenuItem onClick={handleViewMore} >View More</MenuItem>
      </Menu>
       {console.log('list of all projects',projects)}
    </div>
  );
} 



export function BottomSmallPalete({zoomin,zoomout,rotationX,rotationY,rotationZ,projectname}){ 

  return(
<div className='BottomSmallPalette'>    
<IconButton aria-label='RotaionZ'>
   <RotateLeftIcon sx={{color:'navy'}} onClick={rotationZ} />  
</IconButton>
<IconButton aria-label='RotaionY'>
   <SettingsBackupRestoreIcon sx={{color:'navy'}} onClick={rotationY} />  
</IconButton> 
<IconButton >
<FaSyncAlt style={{width:'65%',color:'navy'}} onClick={rotationX} /></IconButton>
<IconButton >
<FaMinus style={{width:'60%',color:'navy'}} onClick={zoomout}/> </IconButton>
<IconButton >
<FaPlus style={{width:'60%',color:'navy'}} onClick={zoomin}/> </IconButton>

<IconButton aria-label="3D" >
        <ThreeDRotationIcon  sx={{color:'navy'}}/>
      </IconButton>
      <IconButton aria-label="2D">
        <LooksTwoIcon  sx={{color:'navy'}}/>
      </IconButton>
      <IconButton >
        <FileDownloadRoundedIcon  sx={{color:'navy'}}/>
      </IconButton>



</div>);
} 

export function RightSmallPalette({zoomin,zoomout,OpenClose}){  
  const [Animation,setAnimation]=useState(0)  
  function BoxAnimation(event){
   const value=event.target.value; 
   setAnimation(value);
   OpenClose(Animation);

  }
  function preventHorizontalKeyboardNavigation(event) {
    if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
      event.preventDefault();
    }
  }
  return (
    <div className='RightSmallPalette'>  
    <Box sx={{height:"25%",position: "absolute",
  right: 0,marginRight:"17%",display:"flex",flexDirection:"column",alignItems:"center"}}> 
  <IconButton aria-label="zoomin" onClick={zoomin}>
        <ZoomInRoundedIcon/>
      </IconButton> 
      <IconButton aria-label="zoomout" onClick={zoomout}>
        <ZoomOutRoundedIcon/>
      </IconButton>
    <Slider
  sx={{
    '& input[type="range"]': {
      WebkitAppearance: 'slider-vertical',
    },
    color:"gray"
  }}
  orientation="vertical"
  defaultValue={0} 
  min={0}
  value={Animation}
  max={100} 
  onChange={BoxAnimation}
  aria-label="open-mockup"
  valueLabelDisplay="auto"
  onKeyDown={preventHorizontalKeyboardNavigation}
/> 
</Box> 

    </div>
  )
}


