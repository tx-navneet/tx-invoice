import React, { useState, useContext } from 'react';
import { Responsivecontext } from '../../context/HeaderContext';
import AccountMenu from '../Avtar/LoginAvatar';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import { Menu as MenuIcon } from '@mui/icons-material';

const Navbar = () => {
  const { handleClick } = useContext(Responsivecontext);
  const [showUser, setShowUser] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [anchorEl, setAnchorEl] = useState(null);

  const handleToggle = (event) => {
    setAnchorEl(event.currentTarget);
    setShowUser(!showUser);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
    setShowUser(false);
  };

  return (
    <>
      <AppBar position="static" sx={{ backgroundColor: '#FFFFFF', boxShadow: 0, padding: '0 20px',borderBottom: "1px solid #e5e7eb" }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Left side - Brand */}
          <Box className="boxOne" sx={{ display: { xs: 'none', lg: 'block' } }}>
            <Typography variant="h6" sx={{ color: 'black', fontWeight: 'bold' }}>
              TX INVOICE
            </Typography>
          </Box>

          {/* Right side - Hamburger menu (for mobile) */}
          <Box sx={{ display: { xs: 'block', lg: 'none' } }}>
            <IconButton edge="start" onClick={handleClick} sx={{ color: 'black' }}>
              <MenuIcon sx={{ fontSize: '30px' }} />
            </IconButton>
          </Box>

          {/* Avatar / User Profile */}
          <Box>
            <IconButton onClick={handleToggle}>
              <img
                src="/img/avatar12.jpg"
                alt="User Avatar"
                className="rounded-full"
                style={{ width: '40px', height: '40px', cursor: 'pointer' }}
              />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* User menu/modal */}
      {showUser && (
        <Box
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 9999,
          }}
        >
          <Box
            sx={{
              backgroundColor: 'white',
              borderRadius: '8px',
              padding: '16px',
              width: '280px',
              boxShadow: 3,
              position: 'relative',
            }}
          >
            <AccountMenu />

            {/* Close button */}
            <IconButton
              onClick={handleCloseMenu}
              sx={{
                position: 'absolute',
                top: '8px',
                right: '8px',
                color: 'gray',
                fontSize: '20px',
              }}
            >
              &#10006;
            </IconButton>
          </Box>
        </Box>
      )}
    </>
  );
};

export default Navbar;
