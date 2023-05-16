import { AppBar, Box, Button, Container, CssBaseline, Divider, Drawer, IconButton, Link, List, ListItem, ListItemButton, ListItemText, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';


const drawerWidth = 240;
const navItems = ['HOME', 'ALL COURSES', 'PRICING', "BLOG"];

export default function Header(props) {
    const { window } = props;
  const [mobileOpen, setMobileOpen] =useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
<>   
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar component="nav" sx={{background:"#E4F5EB", boxShadow:"none", color:"#575859"}}>
<Container>
        <Toolbar sx={{display:"flex" ,justifyContent:"space-between"}}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography 
            variant="h6"
            component="div"
            sx={{ display: { xs: 'none', sm: 'flex' } }}
          >
            <Typography variant='h5' sx={{color:"#45B871"}}>
            U</Typography>-Coda
          </Typography>
          <Box sx={{flexGrow:"0.4" ,display: { xs: 'none', sm: 'flex' }, justifyContent:"space-between" }}>
            
          <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
                <NavLink to="/">
              <Button variant='text'sx={{ color: '#575859' }}>
                Home
              </Button>
              </NavLink>
                
              <Button variant='text'sx={{ color: '#575859' }} {...bindTrigger(popupState)}>
                All courses
              </Button>
              
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={popupState.close}>IELTS</MenuItem>
            <MenuItem onClick={popupState.close}>IT</MenuItem>
            <MenuItem onClick={popupState.close}>GRAPHIC</MenuItem>
          </Menu>
    </>
      )}
    </PopupState>

                <NavLink to="/">
              <Button variant='text'sx={{ color: '#575859' }}>
                Pricing
              </Button>
              </NavLink>
                <NavLink to="/about">
              <Button variant='text'sx={{ color: '#575859' }}>
                About
              </Button>
              </NavLink>
            
          </Box>
             <Box sx={{display: 'flex' , gap:{ xs:0 , sm:"50px"}}}> 
      <NavLink to="/signin">
        <Button variant='text' sx={{color:"#575859"}}>Sign in</Button>
        </NavLink>
        <NavLink to="/freetrial" >
        <Button variant='contained' color="success" sx={{display: { xs: 'none', sm: 'block' } }}>Free trial</Button>
      </NavLink>
            </Box>
        </Toolbar>
          </Container>
      </AppBar>
      
      <Box component="nav">
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
  </Box>
    
</>
  );
}
