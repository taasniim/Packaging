import * as React from 'react';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import { styled, alpha } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import  PackagingLogo from '../assets/packaginglogo.png'
import etiquette from '../assets/etiquettelogo.png'
import getQuote from '../assets/getQuote.png'
import boxnex from '../assets/box.png'
import Agenda from '../assets/agenda.png'
import add from '../assets/addproject.png'
import submission from '../assets/submission.png'
import Market from '../assets/market.png'
import AI from '../assets/AI.png'
import Dashboard from '../assets/dashboard.png'
import { Link } from '@material-ui/core'
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import SearchIcon from '@mui/icons-material/Search';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
const drawerWidth = 240;

export default function HomePage() {
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
  
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const CustomAppBar = styled(AppBar)(({ theme }) => ({
        backgroundColor: 'white',
      }));
      const CustomIconButton = styled(IconButton)(({ theme }) => ({
        color: 'grey',
      }));
      const [selectedTab, setSelectedTab] = useState('Nexumus tool');
      const [projects, setProjects] = useState([]);

    const handleTabChange = (tabName) => {
        setSelectedTab(tabName);
    };
    useEffect(() => {
      if (selectedTab === 'Projects') {
          fetchProjects();
      }
  }, [selectedTab]);

  const fetchProjects = async () => {
      try {
          const response = await fetch('http://localhost:5000/api/project');
          const data = await response.json();
          setProjects(data);
      } catch (error) {
          console.error('Error fetching projects:', error);
      }
  };
  // Fonction pour mettre à jour un projet
  const updateProject = async (_id) => {
    try {
        await fetch(`http://localhost:5000/api/projects/${_id}`, {
            method: 'PUT',
           
            // Ajoutez les en-têtes et le corps de la requête si nécessaire
        });
        // Mettre à jour la liste des projets après la mise à jour réussie
        fetchProjects();
    } catch (error) {
        console.error('Error updating project:', error);
    }
};

// Fonction pour supprimer un projet
const deleteProject = async (_id) => {
    try {
        await fetch(`http://localhost:5000/api/project/${_id}`, {
            method: 'DELETE',
            // Ajoutez les en-têtes de la requête si nécessaire
        });
        // Mettre à jour la liste des projets après la suppression réussie
        fetchProjects();
    } catch (error) {
        console.error('Error deleting project:', error);
    }
};
 const renderProjectButtons = (projectId) => (
        <div>
          <IconButton aria-label="delete" size="large">
            <ModeEditIcon  onClick={() => updateProject(projectId)}/>   </IconButton>
            <IconButton aria-label="delete" size="large">
            <DeleteIcon  onClick={() => deleteProject(projectId)}/>   </IconButton>

           
        </div>
    );


    const [originalProjects, setOriginalProjects] = useState([]);

    useEffect(() => {
        // Copier les projets originaux au montage du composant
        setOriginalProjects(projects);
    }, [projects]);
    
    const resetProjects = () => {
      setProjects(originalProjects);
  };
  const handleSearchClear = () => {
    resetProjects();
};
  
    const searchProjects = (searchTerm) => {
      const filteredProjects = originalProjects.filter((project) =>
          project.project_name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setProjects(filteredProjects);
  };
  
  const handleSearchChange = (event) => {
    const searchTerm = event.target.value;
    searchProjects(searchTerm);
};

  
    const handleProfileMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleMobileMenuClose = () => {
      setMobileMoreAnchorEl(null);
    };
  
    const handleMenuClose = () => {
      setAnchorEl(null);
      handleMobileMenuClose();
    };
  
    const handleMobileMenuOpen = (event) => {
      setMobileMoreAnchorEl(event.currentTarget);
    };
    const items = [
        { text: 'Dashboard', icon: <img  src={Dashboard} alt="Dashboard"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      />  },
        { text: 'Agenda', icon: <img  src={Agenda} alt="Agenda"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      />  },
        { text: 'Submission', icon: <img  src={submission} alt="Submission"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      />  },
        { text: 'Projects', icon:<img  src={add} alt="Projects"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      />   },
        { text: 'Nexumus tool', icon: <img  src={boxnex} alt="Nexumus tool"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      />  },
        { text: 'Market Place', icon: <img  src={Market} alt="Market Place"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      />  },
        { text: 'Get Quote', icon: <img  src={getQuote} alt="Get Quote"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      /> },
        { text: 'Nexumus IA', icon: <img  src={AI} alt="Nexumus IA"
        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
      />  }
      ];
  
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={handleMenuClose}>My account</MenuItem>
      </Menu>
    );
  
    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
      <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
      >
       
        <MenuItem>
          <IconButton
            size="large"
            color="inherit"
          >
            
          </IconButton>
          <p>Notifications</p>
        </MenuItem>
        <MenuItem onClick={handleProfileMenuOpen}>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="primary-search-account-menu"
            aria-haspopup="true"
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <p>Profile</p>
        </MenuItem>
      </Menu>
    );
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <CustomAppBar
        position="fixed"
        
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
        
      >
        
      </CustomAppBar>
      <Drawer
       sx={{
        width: drawerWidth,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
        },
    }}
    variant="permanent"
    anchor="left"
      >
        <Toolbar />
        <Divider />
   

<List>
  {items.map((item, index) => (
    <ListItem key={index} disablePadding>
      <ListItemButton
      key={index}
      disablePadding
      selected={selectedTab === item.text}
      onClick={() => handleTabChange(item.text)}>
        <ListItemIcon>
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.text} />
      </ListItemButton>
    </ListItem>
  ))}
</List>
        <Divider />
       
      </Drawer>
      <Box sx={{ flexGrow: 1 }}>
        <CustomAppBar position="static">
          <Toolbar>
            <CustomIconButton
               size="large"
               edge="start"
               color="inherit"
               aria-label="open drawer"
               sx={{ mr: 2 }}
            >
              <MenuIcon />
            </CustomIconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' ,color: 'grey'} }}
            >
             Nexumus tool
            </Typography>
            
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
              <CustomIconButton size="large"  color="inherit">                
                  <MailIcon />             
              </CustomIconButton>
              <CustomIconButton
                size="large"    
                color="inherit"
              >    
                  <NotificationsIcon />
              </CustomIconButton>
              <CustomIconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </CustomIconButton>
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none'  } }}>
              <CustomIconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </CustomIconButton>
            </Box>
          </Toolbar>
        </CustomAppBar>
        {renderMobileMenu}
        {renderMenu}


      {selectedTab === 'Nexumus tool' && (
        <Box
        component="main"
        sx={{ flexGrow: 1,  p: 3   }}
        height={635}
        backgroundColor = '#FCFCFC'
       
      >
        <Toolbar />
        
        <Typography  variant="h4"
            noWrap
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, fontWeight: 'bold', color: 'navy', textAlign: 'center' }}>
          Choose your tool
        </Typography>
        
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                            <Box sx={{ display: 'flex', gap: 4 }}>
                                <Box
                                    height={200}
                                    width={200}
                                    my={4}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    p={2}
                                    sx={{ border: '0px solid grey', cursor: 'pointer' }}
                                    backgroundColor='White'
                                >
                                    <img
                                        src={PackagingLogo}
                                        alt="Packaging"
                                        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ fontWeight: 'bold', color: 'navy', textAlign: 'center' }}
                                    >
                                        <Link href="/Tool" >Packaging</Link>
                                    </Typography>
                                </Box>
                                <Box
                                    height={200}
                                    width={200}
                                    my={4}
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    justifyContent="center"
                                    p={2}
                                    sx={{ border: '0px solid grey', cursor: 'pointer' }}
                                    backgroundColor='White'
                                >
                                    <img
                                        src={etiquette}
                                        alt="Etiquette"
                                        style={{ maxWidth: '50%', maxHeight: '50%', width: 'auto', height: 'auto' }}
                                    />
                                    <Typography
                                        variant="h6"
                                        component="div"
                                        sx={{ fontWeight: 'bold', color: 'navy', textAlign: 'center' }}
                                    >
                                        <Link href="/Tool" >Etiquette</Link>
                                    </Typography>
                                </Box>
                            </Box>
                        </Box>
                  
    <Box sx={{ display: 'flex', justifyContent: 'center' }}>
       <Button variant="contained" color="primary" sx={{ mt: 2 , bgcolor: 'navy' }}>Continue</Button>
    </Box>
      </Box>
        )}

{selectedTab === 'Projects' && (
      <Box component="main"
                    height={635}
                    backgroundColor = '#FCFCFC'>
                         <Typography  variant="h4" noWrap component="div" sx={{ display: { xs: 'none', sm: 'block' }, flexGrow: 1, fontWeight: 'bold', color: 'navy', textAlign: 'center' }}>
                             List of projects 
                         </Typography>
                         <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
                         <InputBase  sx={{ ml: 1, flex: 1 }} placeholder="Search Project" inputProps={{ 'aria-label': 'search project' }}  onChange={handleSearchChange}onClear={handleSearchClear}/>
                             <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
                                 <SearchIcon />
                             </IconButton>
                         </Paper>
        <ul>
            {projects.map((project, index) => (
                
                    <Paper key={project._id} sx={{ p: 0.25 ,bgcolor: 'white'}}>
                        <Typography variant="h6">{project.project_name}</Typography>
                        <Typography variant="h8" style={{ color: 'grey' }}>Date :{project.Date}</Typography>
                        {renderProjectButtons(project._id)}
                    </Paper>
                
            ))}
        </ul>
        
                    </Box>
                )}  
      </Box>
      
    </Box>
  );
}

  
 