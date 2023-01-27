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
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import NavList from "./NavList"
function NavCollapse({parent=1,menu}) {

    const menuIcon = (menu?.icon) ? menu?.icon :<FiberManualRecordIcon /> 
    const [openMenu, setOpenMenu] = React.useState(false);

    const handleClick = () => {
      setOpenMenu(!openMenu);
    };
    let parentNext = parent+1
  return (
    <>
        {/* dropdown */}
            <ListItemButton onClick={handleClick} sx={{ pl:  2**parent }}>
              <ListItemIcon>
                {/* <FiberManualRecordIcon /> */}
                {menuIcon}
           
              </ListItemIcon>
              <ListItemText primary={menu?.title} />
              {openMenu ? <ExpandLess /> : <ExpandMore />}
            </ListItemButton>
            <Collapse in={openMenu} timeout="auto" unmountOnExit>
              <NavList parent={parentNext} menuItems={menu.children} ></NavList>
            
            </Collapse>
    
    </>
  )
}

export default NavCollapse


//https://dev.to/franciscomendes10866/how-to-pass-components-as-props-in-react-26ig