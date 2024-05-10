// le main page  (ici on va appeler tous les compnent pour creer le page qui contient le packaging tool ) 
import LeftSide from "../components/LeftSide"; 
import RightSide from "../components/RightSide";  



function Tool (){
  return (
    <div className="Tool">  
    <LeftSide></LeftSide> 
    <RightSide></RightSide> 
   
    </div>
  );
} 
export default Tool;