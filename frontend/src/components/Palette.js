import React from 'react';
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
import { useState } from 'react';
import ThreeDRotationIcon from '@mui/icons-material/ThreeDRotation';
import LooksTwoIcon from '@mui/icons-material/LooksTwo';

export function Palette({onColorChange}) { 
  const [color, setColor] = useState("#898080");
  const handleColor=(event)=>{
    const newcolor = event.target.value;
    setColor(newcolor);
    onColorChange(newcolor);
  }
  return( 
    <div className="Palette">   
      <div className="Size"> 
        <p> Size</p> 
        <input type="number" name="" id="" placeholder="X" /> 
        <input type="number" name="" id="" placeholder="Y" /> 
        <input type="number" name="" id="" placeholder="W" /> 
        <input type="number" name="" id="" placeholder="H" />
      </div> 
      <div className="Color">  
        <p>Color</p>  
        <div><input type="color" name="" id="" value={color} onChange={handleColor}/></div>
      </div> 
      <div className="Texture"> 
        <p>Texture</p> 
        <img src={texture1} alt="" /> 
        <img src={texture2} alt="" /> 
        <img src={texture3} alt="" /> 
        <img src={texture2} alt="" /> 
        <img src={texture1} alt="" />
        <img src={texture6} alt="" /> 
        <img src={texture3} alt="" />
      </div> 
      <div className="Material"> 
        <p>Material</p> 
        <img src={blanc} alt="" /> 
        <img src={carton} alt="" />
      </div> 
      <div className="Quantity"> 
        <p>Quantity</p>  
        <div className="List-price"> 
          <div> <p className="Number"> 1pc</p> <hr /> <p className="Price"> 0.5dt</p></div>  
          <div> <p className="Number"> 100pc</p> <hr /> <p className="Price"> 0.5dt</p></div> 
          <div> <p className="Number"> 500pc</p> <hr /> <p className="Price"> 0.5dt</p></div>  
          <div> <p className="Number"> 1000pc</p> <hr /> <p className="Price"> 0.5dt</p></div>  
        </div> 
        <input type="number" name="" id="" placeholder="quantité personnalisé" />  
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




 export function TopSmallPalette({onDelete}){
  return(
  <div className='TopSmallPalette'>  
   <FaFile style={{width:'30%',color:'rgba(65, 48, 188, 1)'}}/>
   <FaTrash style={{width:'30%',color:'rgba(65, 48, 188, 1)'}} onClick={onDelete}/>
   <FaRuler style={{width:'30%',color:'rgba(65, 48, 188, 1)'}}/>  
   
  </div>
  );
} 



export function BottomSmallPalete({zoomin,zoomout,rotationX}){ 
  
  return(
<div className='BottomSmallPalette'>  
<FaSyncAlt style={{width:'15%',color:'rgba(65, 48, 188, 1)'}} onClick={rotationX} />
<FaMinus style={{width:'15%',color:'rgba(65, 48, 188, 1)'}} onClick={zoomout}/> 
<FaPlus style={{width:'15%',color:'rgba(65, 48, 188, 1)'}} onClick={zoomin}/> 

<IconButton aria-label="zoomout" >
        <ThreeDRotationIcon  sx={{color:'rgba(65, 48, 188, 1)'}}/>
      </IconButton>

      <IconButton aria-label="zoomout">
        <LooksTwoIcon  sx={{color:'rgba(65, 48, 188, 1)'}}/>
      </IconButton>
<FaDownload style={{width:'15%',color:'rgba(65, 48, 188, 1)'}}/>  





</div>);
} 

export function RightSmallPalette({zoomin,zoomout}){ 
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
        <AddIcon/>
      </IconButton> 
      <IconButton aria-label="zoomout" onClick={zoomout}>
        <RemoveIcon/>
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
  aria-label="open-mockup"
  valueLabelDisplay="auto"
  onKeyDown={preventHorizontalKeyboardNavigation}
/> 
</Box> 

    </div>
  )
}


