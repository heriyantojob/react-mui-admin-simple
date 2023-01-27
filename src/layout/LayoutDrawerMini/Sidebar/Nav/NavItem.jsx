import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { Link } from "react-router-dom";
function NavItem({parent=1,menu}) {
  const menuIcon = (menu?.icon) ? menu?.icon :<FiberManualRecordIcon /> 
  return (
    <Link to={menu.url}>
      <ListItemButton  sx={{ pl:  2**parent }}>
          <ListItemIcon>
            {menuIcon}
          
          </ListItemIcon>
          
          <ListItemText primary={menu.title} />
      </ListItemButton>

    </Link>


  )
}

export default NavItem