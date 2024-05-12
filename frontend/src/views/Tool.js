// le main page  (ici on va appeler tous les compnent pour creer le page qui contient le packaging tool ) 
import LeftSide from "../components/LeftSide"; 
import RightSide from "../components/RightSide";  
import { useLocation } from 'react-router-dom';




function Tool ({id}){
  const searchParams = new URLSearchParams(useLocation().search);
  const idUser = searchParams.get('id');
  return (
    <div className="Tool">  
    <LeftSide></LeftSide> 
    <RightSide></RightSide> 
    {
                  console.log("tool id",idUser)
                }
    </div>
  );
} 
export default Tool;