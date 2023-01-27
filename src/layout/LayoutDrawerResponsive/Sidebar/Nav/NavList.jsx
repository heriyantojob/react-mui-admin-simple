import React from 'react'
import List from '@mui/material/List';
import NavCollapse from "./NavCollapse"
import NavItem from "./NavItem"
import StarBorder from '@mui/icons-material/StarBorder';

function  MenuNav({parent,menu}){
  if(menu.type==="item"){
    return   <NavItem 
    menu={menu}
    parent={parent} 
   />
  }
  else if(menu.type==="collapse"){
    return   <NavCollapse 
    menu={menu}
    parent={parent} />
  }
  return null;

}
function NavList({parent=1,menuItems}) {
  return (
    <List component="nav">

        {menuItems.map((menu) =>
          <MenuNav key={menu.id} menu={menu} parent={parent}></MenuNav>
             
        )}
        {/* <NavCollapse title='bagus' parent={parent}/> */}
        {/* <NavCollapse title='aku' parent={parent}/>

        <NavCollapse title='dia' parent={parent}/>
        <NavItem title='dia' parent={parent}/> */}
        {/* dropdown */}

    
    </List>
  )
}

export default NavList