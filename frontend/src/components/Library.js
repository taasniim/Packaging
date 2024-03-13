import object1 from '../assets/object1.png'; 
import object2 from '../assets/object2.png';
import object3 from '../assets/object3.png';
function Library (){
  return (
    <div className="Library"> 
    <div className="Listes" >
      <div className="List1">Exrernal</div> 
      <div className="List2">Internal</div> 
      </div> 
      
        <input  className ="Search"type="text" placeholder="Search"/>  
        <div className='choix'> créme </div>  
        <div className='choix'> sérume </div>  
        <div className='choix'> créme </div>  
        <div className='choix'> sérume </div>  
        
        
       <div className='objects'> 
       <img src={object1}/>
       <img src={object3}/> 
       <img src={object2}/> 
       <img src={object1}/> 
       <img src={object1}/>
       <img src={object3}/> 
       <img src={object2}/> 
       <img src={object1}/>
       </div> 
       <div> </div>
      
    </div> 
  );
}
export default Library;