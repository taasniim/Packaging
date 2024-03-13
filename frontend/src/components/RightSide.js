// comme le left side c'est la partie qui contient le logo, le parametre et le photo de profile, le rigt side va contient tous les autre component 
import Header from "../components/Header"; 
import Library from "../components/Library"; 
import Palette from "../components/Palette";
import Scene from "../components/Scene"; 

function RightSide(){
  return(
    <div className="RightSide"> 
    
      <Header/> 
      <Library/>    
      <Scene/>  
     

      
    </div>
  )
} 

export default RightSide;