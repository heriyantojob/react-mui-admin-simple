
import React from 'react'
import Toolbar from '@mui/material/Toolbar';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import Drawer from './Drawer/Drawer';
import NavList from './Nav/NavList';
import menuPages from '../../../menu-items/menuPages';


function Sidebar({toggleDrawer,setOpenDrawer,openDrawer,drawerWidth}) {

  return (
    <Drawer variant="permanent" open={openDrawer}>
         <Toolbar
          
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />

          {/* navlist */}
          <NavList menuItems={menuPages}/>            
      </Drawer>
 
    
  )
}


export default Sidebar