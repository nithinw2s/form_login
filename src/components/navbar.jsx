import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import Home from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const pages = [
  { name: 'Products', path: '/products' },
  { name: 'Pricing', path: '/pricing' },
  { name: 'Blog', path: '/blog' }
];

function ResponsiveAppBar() {
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">

        <Toolbar disableGutters>
          <Home sx={{ m:1 }}/>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 10,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >

          <Button
            key='home'
            component={Link}
            to={'/home'}
            sx={{ my: 2, color: 'white', display: 'block' }}
            >
              Home
              </Button>
          </Typography>
          

          
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                component={Link}
                to={page.path}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page.name}
              </Button>
            ))}
            
          </Box>
    

          <Tooltip title="Open settings">
          
              <IconButton sx={{ p:0, ml:2 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
