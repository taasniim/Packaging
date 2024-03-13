//ce componnent est pour la partie qui ccontient le logo et le parametre et le profil
import { FaCog}  from 'react-icons/fa'  
import photoProfile from '../assets/photo-profile.jpg';
import logo from '../assets/logo.png';


function LeftSide(){
  return(
    <div className="LeftSide"> 
    <div className="Top">
    <img src={logo}/>
    </div> 
    <div className="Bottom">
      <FaCog color='gray' size={20}/> 
      <img src={photoProfile}/>
    </div>
    </div>
  );
} 

export default LeftSide;
