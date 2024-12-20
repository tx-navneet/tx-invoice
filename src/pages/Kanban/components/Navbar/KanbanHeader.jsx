import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import { headerLinks } from '../../../../utils/ExternalData/Data'; // Import your data
import { useMediaQuery, useTheme, Drawer, IconButton } from '@mui/material';
import { BsMenuApp } from 'react-icons/bs';

const KanbarDropdown = () => {
  const [anchorEls, setAnchorEls] = useState({});
  const [nestedAnchorEls, setNestedAnchorEls] = useState({});
  const [arrowRotation, setArrowRotation] = useState({});
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md')); // Check for mobile screen sizes

  const handleOpenMenu = (event, index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: event.currentTarget }));
    // Toggle the rotation for the arrow
    setArrowRotation((prev) => ({
      ...prev,
      [index]: prev[index] === 270 ? 0 : 270, // Rotate between 0 and 270 degrees
    }));
  };

  const handleCloseMenu = (index) => {
    setAnchorEls((prev) => ({ ...prev, [index]: null }));
    // Reset the rotation on close
    setArrowRotation((prev) => ({ ...prev, [index]: 0 }));
  };

  const handleOpenNestedMenu = (event, parentIndex, subIndex) => {
    setNestedAnchorEls((prev) => ({
      ...prev,
      [`${parentIndex}-${subIndex}`]: event.currentTarget,
    }));
    // Rotate the arrow for the nested menu
    setArrowRotation((prev) => ({
      ...prev,
      [`${parentIndex}-${subIndex}`]: prev[`${parentIndex}-${subIndex}`] === 270 ? 0 : 270,
    }));
  };

  const handleCloseNestedMenu = (parentIndex, subIndex) => {
    setNestedAnchorEls((prev) => ({
      ...prev,
      [`${parentIndex}-${subIndex}`]: null,
    }));
    // Reset the rotation for the nested menu arrow
    setArrowRotation((prev) => ({ ...prev, [`${parentIndex}-${subIndex}`]: 0 }));
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const renderLinks = () => (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      {headerLinks.map((link, index) => (
        <Box key={index}>
          {link.dropdown ? (
            <Box>
              <Button
                onClick={(event) => handleOpenMenu(event, index)}
                endIcon={
                  link.name === '' ? null : (
                    <IoIosArrowDown
                      style={{
                        transform: `rotate(${arrowRotation[index] || 0}deg)`, // Apply rotation here
                        transition: 'transform 0.3s ease',
                      }}
                    />
                  )
                }
                sx={{
                  color: '#262a2e',
                  fontSize: '14px',
                  // paddingTop: "14px",
                  fontWeight: '400', // Semi-bold
                  letterSpacing: '1px',
                  textTransform: 'capitalize',
                  '&:hover': {
                    color: '#007D88',
                  },
                }}
                startIcon={link.icon}
              >
                {link.name}
              </Button>
              <Menu
                anchorEl={anchorEls[index]}
                open={Boolean(anchorEls[index])}
                onClose={() => handleCloseMenu(index)}
                sx={{ mt: 1 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  {link.dropdown.map((item, subIndex) =>
                    item.nestedDropdown ? (
                      <MenuItem
                        key={subIndex}
                        onClick={(event) =>
                          handleOpenNestedMenu(event, index, subIndex)
                        }
                        sx={{
                     
                          display: 'flex',
                          justifyContent: 'space-between',
                          '&:hover': {
                            color: '#007D88',
                            backgroundColor: '#f5f5f5',
                          },
                        }}
                      >
                        <span>{item.label}</span>
                        <IoIosArrowDown
                          style={{
                            transform: `rotate(${arrowRotation[`${index}-${subIndex}`] || 0}deg)`,
                            transition: 'transform 0.3s ease',
                          }}
                        />
                      </MenuItem>
                    ) : (
                      <MenuItem
                        key={subIndex}
                        component="a"
                        href={item.path}
                        sx={{
                          color: '#262a2e',
                  fontSize: '14px',
                  // paddingTop: "14px",
                  fontWeight: '400', // Semi-bold
                  letterSpacing: '1px',
                  textTransform: 'capitalize',
                          '&:hover': {
                            color: '#007D88',
                            backgroundColor: '#f5f5f5',
                          },
                        }}
                      >
                        {item.label}
                      </MenuItem>
                    )
                  )}
                </motion.div>
              </Menu>
              {Object.keys(nestedAnchorEls)
                .filter((key) => key.startsWith(`${index}-`))
                .map((nestedKey) => {
                  const [parentIndex, subIndex] = nestedKey.split('-');
                  return (
                    <Menu
                      key={nestedKey}
                      anchorEl={nestedAnchorEls[nestedKey]}
                      open={Boolean(nestedAnchorEls[nestedKey])}
                      onClose={() =>
                        handleCloseNestedMenu(parentIndex, subIndex)
                      }
                    sx={{
                        mt: 1,
                        // Position the nested dropdown to the right of the parent dropdown
                        transform: 'translateX(0%)', // Adjust the X-axis to show it to the right
                        
                      }}
                      anchorOrigin={{
                        vertical: 'top', // Align to the top of the parent
                        horizontal: 'right', // Align to the left of the parent
                      }}
                      transformOrigin={{
                        vertical: 'top', // Keep it aligned at the top
                        horizontal: 'left', // Keep it aligned to the left of the nested dropdown
                      }}
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                      >
                        {link.dropdown[+subIndex].nestedDropdown.map(
                          (nestedItem, nestedIndex) => (
                            <MenuItem
                              key={nestedIndex}
                              component="a"
                              href={nestedItem.path}
                              sx={{
                                fontSize: '14px',
                                fontWeight: '400',
                                color: '#333',
                                textTransform: 'capitalize',
                                '&:hover': {
                                  color: '#007D88',
                                  backgroundColor: '#f5f5f5',
                                },
                              }}
                            >
                              {nestedItem.label}
                            </MenuItem>
                          )
                        )}
                      </motion.div>
                    </Menu>
                  );
                })}
            </Box>
          ) : (
            <Button
              href={link.path}
              sx={{
                color: '#262a2e',
                // padding: '.5rem 1rem',
                fontSize: '14px',
                fontWeight: '400',
                textTransform: 'capitalize',
                letterSpacing: '1px',
                '&:hover': {
                  color: '#007D88',
                },
              }}
              startIcon={link.icon}
            >
              {link.name}
            </Button>
          )}
        </Box>
      ))}
    </Box>
  );

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: '#FFFFFF',
        borderBottom: '1px solid #e0e0e0',
        boxShadow: 'none',
        padding: '0 20px',
      }}
    >
      <Toolbar
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          padding: '0',
        }}
      >
        {/* Hamburger Menu for Mobile */}
        {isMobile && (
          <IconButton onClick={toggleDrawer} sx={{ color: '#333' }}>
            <BsMenuApp size={130} />
          </IconButton>
        )}

        {/* Links for Desktop and Mobile */}
        {!isMobile ? (
          renderLinks()
        ) : (
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer}
            sx={{ width: 250 }}
          >
            <Box sx={{ width: 250, padding: '20px' }}>{renderLinks()}</Box>
          </Drawer>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default KanbarDropdown;
