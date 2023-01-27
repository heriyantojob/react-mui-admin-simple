import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import StarBorder from '@mui/icons-material/StarBorder';
import NavCollapseDummy from "./NavCollapseDummy"
function NavItem() {
  return (
    <ListItemButton sx={{ pl: 4 }}>
        <ListItemIcon>
        <StarBorder />
        </ListItemIcon>
        <ListItemText primary="Starred" />
    </ListItemButton>

  )
}

export default NavItem