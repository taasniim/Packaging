// comme le left side c'est la partie qui contient le logo, le parametre et le photo de profile, le rigt side va contient tous les autre component 
import Header from "../components/Header"; 
import Main from "./Main";

function RightSide(){
  return(
    <div className="RightSide"> 
    
      <Header/> 
      <Main/> 
    
    </div>
  )
} 

export default RightSide;