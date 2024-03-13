import { FaArrowLeft, FaPlus,FaAngleLeft,FaAngleRight } from 'react-icons/fa'; 
import firstParticipant from '../assets/firstParticipant.jpg';
import secondParticipant from '../assets/second-participant.jpg';


function Header(){
  return(
    <div className="Header">
      <div className="Left"> 
      <FaArrowLeft size={12} color='blue'/> 
      <p> Tool de conception d'emballage </p>
      </div>  
      <div className="Right"> 
      <input type='file' placeholder='import label design' />  
      <FaAngleLeft size={10} color='blue' />
      <FaAngleRight size={10} color='blue'/> 
      <img src={firstParticipant}/>
      <img src={secondParticipant}/> 
      <FaPlus size={10} color='blue'/>
      <button> publier</button>
       </div>
    </div>
  );
} 

export default Header;