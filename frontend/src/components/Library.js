import React, { useState } from 'react';
import object1 from '../assets/object1.png'; 
import object2 from '../assets/object2.png';
import Package from './Package';
import object3 from '../assets/object3.png'; 
import mockupList from '../data/mockup';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';

function Library() {
  const [judgesOpen, setJudgesOpen] = useState(false);
  const [bottlesOpen, setBottlesOpen] = useState(false);
  const [tubesOpen, setTubesOpen] = useState(false);
  
  const handleJudgesClick = () => {
    setJudgesOpen(!judgesOpen);
  };

  const handleBottlesClick = () => {
    setBottlesOpen(!bottlesOpen);
  };

  const handleTubesClick = () => {
    setTubesOpen(!tubesOpen);
  };

 

  return (
    <div className="Library"> 
      <div className="Head">   
        <div className="Internal"> Internal</div>
        <div className="External">External</div> 
      </div> 

      <div className="Search"> 
      <Paper component="form" sx={{ p: '1px 2px', display: 'flex', alignItems: 'center', width: 200 }}>
                         <InputBase  sx={{ ml: 0.5, flex: 1 }} placeholder="Search Project" inputProps={{ 'aria-label': 'search project' }} />
                             <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                 <SearchIcon />
                             </IconButton>
         </Paper> 
      </div> 

      <div className="Choix">  
        <div> Creme</div> 
        <div> Serume</div>  
        <div> Creme</div> 
        <div> Serume</div> 
      </div> 

      <div className="Packaging"> 
        <div className="First-column">  
        {
          mockupList.map((mockup)=>  { 
            if (mockup.id %2===0){
            return <Package src={mockup.src} id={mockup.id}/>}
          })
        }
        </div> 
        <div className="Second-column">  
        {
          mockupList.map((mockup)=>  { 
            if (mockup.id %2!==0){
            return <Package src={mockup.src} id={mockup.id}/>}
          })
        }
        </div>
      </div>  

      
      <List
        sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        component="nav"
        aria-labelledby="nested-list-subheader"
      >
        <ListItemButton onClick={handleJudgesClick}>
          <ListItemText primary="Judges" />
          {judgesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <ListItemButton onClick={handleBottlesClick}>
          <ListItemText primary="Bottles" />
          {bottlesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <ListItemButton onClick={handleTubesClick}>
          <ListItemText primary="Tubes" />
          {tubesOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={judgesOpen} timeout="auto" unmountOnExit>
          
        </Collapse>
      </List>
      
    </div> 
  );
}

export default Library;
