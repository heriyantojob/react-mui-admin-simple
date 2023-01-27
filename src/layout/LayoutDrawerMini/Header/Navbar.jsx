import React from 'react'
import Box from '@mui/material/Box';
import Badge from '@mui/material/Badge';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MailIcon from '@mui/icons-material/Mail';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MoreIcon from '@mui/icons-material/MoreVert';
import MuiAppBar from '@mui/material/AppBar';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AppBar from './AppBar';
import { Link } from "react-router-dom";
// import Link from '@mui/material/Link';
function Navbar({ openDrawer,setOpenDrawer,toggleDrawer}) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (

    <AppBar position="fixed" open={openDrawer}>
      <Toolbar
        sx={{
          pr: '24px', // keep right padding when drawer closed
        }}
      >
        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer}
          sx={{
            marginRight: '36px',
            ...(openDrawer && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          component="h1"
          variant="h6"
          color="inherit"
          noWrap
          sx={{ flexGrow: 1 }}
        >
          Admin Panel
        </Typography>
        {/* user */}
        <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >

                <Link  to={"profile"} style={{ textDecoration: 'none' }}> 
                  <MenuItem onClick={handleClose} >Profile</MenuItem>
                </Link>
                <Link to={"/profile/password"} style={{ textDecoration: 'none' }}> 
                  <MenuItem onClick={handleClose}>Change Password</MenuItem>
                </Link>
      

                <MenuItem onClick={handleClose}>Logout</MenuItem>
              </Menu>
            </div>
      
      </Toolbar>
      </AppBar>


  )
}

export default Navbar