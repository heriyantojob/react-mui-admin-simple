import React from 'react'
import List from '@mui/material/List';
import NavCollapse from "../Nav/NavCollapse"
import NavItem from "../Nav/NavItem"
function NavList() {
  return (
    <List component="nav">
        <NavCollapse title='bagus'/>
        <NavCollapse/>
        <NavItem/>
        {/* dropdown */}

    
    </List>
  )
}

export default NavList