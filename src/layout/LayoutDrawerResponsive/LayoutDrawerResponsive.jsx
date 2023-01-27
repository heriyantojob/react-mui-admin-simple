
import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';



import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Outlet } from 'react-router-dom'
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
const drawerWidth = 300;

import Container from '@mui/material/Container';
import Navbar from './Header/Navbar';
import Sidebar from './Sidebar/Sidebar';

function LayoutDrawerResponsive(props) {
  console.log("props",props)
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  


  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Navbar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>
      <Sidebar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
      {/* drawer */}
      {/* Side */}
      {/* main layout */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            {/* content */}
            <Grid container spacing={3}>
                
                 <Outlet />
            </Grid>
            <Copyright sx={{ pt: 4 }} />
        </Container>
  
      </Box>
    </Box>
  );
}

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }



export default LayoutDrawerResponsive;