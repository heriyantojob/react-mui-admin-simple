import React from 'react'
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import NavCollapseDummy from "./NavCollapseDummy"
import NavItem from "./NavItem"
function NavCollapse({parent=1,title=""}) {
    const [openMenu, setOpenMenu] = React.useState(true);

    const handleClick = () => {
      setOpenMenu(!openMenu);
    };
  return (
    <>
        {/* dropdown */}
            <ListItemButton onClick={handleClick} sx={{ pl:  2**parent }}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={title} />
              {openMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMenu} timeout="auto" unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <StarBorder />
                  </ListItemIcon>
                  <ListItemText primary="Starred" />
                </ListItemButton>
                <NavItem/>
                <NavItem/>
                <NavItem/>

                <NavCollapseDummy />
                </List>
            </Collapse>
    
    </>
  )
}

export default NavCollapse