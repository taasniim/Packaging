import React from 'react';
import texture1 from '../assets/texture1.jpg'; 
import texture2 from '../assets/texture2.jpg';
import texture3 from '../assets/texture3.jpg';
import texture4 from '../assets/texture4.jpg';
import texture5 from '../assets/texture5.jpg';
import texture6 from '../assets/texture6.jpg';
import carton from'../assets/carton.jpg';
import blanc from '../assets/blancjpg.jpg';
function Palette() {
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
        <div><input type="color" name="" id="" /></div>
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

export default Palette;
