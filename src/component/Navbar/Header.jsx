import React, { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import { dropdownData, navLinks } from '../../utils/ExternalData/Data'; // Ensure this contains the necessary links/data

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentDropdown, setCurrentDropdown] = useState(null);
  const [rotateArrow, setRotateArrow] = useState({}); // Object to track arrow rotation for each dropdown
  const [nestedAnchorEls, setNestedAnchorEls] = useState([]); // To track nested dropdowns
  const [rotateNestedArrows, setRotateNestedArrows] = useState({}); // Object to track nested arrow rotation

  const handleOpenDropdown = (event, dropdownName, index) => {
    setAnchorEl(event.currentTarget);
    setCurrentDropdown(dropdownName);
    
    // Toggle rotation for specific dropdown using the index
    setRotateArrow((prevState) => ({
      ...prevState,
      [index]: !prevState[index], // Toggle the rotation of the specific dropdown arrow
    }));
  };

  const handleOpenNestedDropdown = (event, subIndex) => {
    const updatedNestedAnchorEls = [...nestedAnchorEls];
    updatedNestedAnchorEls[subIndex] = event.currentTarget;
    setNestedAnchorEls(updatedNestedAnchorEls);

    setRotateNestedArrows(prevState => ({
      ...prevState,
      [subIndex]: !prevState[subIndex], // Toggle the rotation for the specific nested dropdown
    }));
  };

  const handleCloseDropdown = () => {
    setAnchorEl(null);
    setCurrentDropdown(null);
    setRotateArrow({}); // Reset all main dropdown arrow rotations
  };

  const handleCloseNestedDropdown = (subIndex) => {
    const updatedNestedAnchorEls = [...nestedAnchorEls];
    updatedNestedAnchorEls[subIndex] = null;
    setNestedAnchorEls(updatedNestedAnchorEls);
    setRotateNestedArrows(prevState => ({
      ...prevState,
      [subIndex]: false, // Reset arrow rotation for the specific nested dropdown
    }));
  };

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
      <Toolbar sx={{ display: 'flex', justifyContent: 'flex-start', padding: '0' }}>
        {/* Navigation Links */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {navLinks.map((link, index) => (
            <Box key={index}>
              {/* If the link has a dropdown, show the dropdown button */}
              {dropdownData[link.name] ? (
                <Box>
                  <Button
                    onClick={(event) => handleOpenDropdown(event, link.name, index)}
                    endIcon={
                      <IoIosArrowDown
                        style={{
                          transform: rotateArrow[index] ? 'rotate(270deg)' : 'rotate(0deg)',
                          transition: 'transform 0.3s ease',
                        }}
                      />
                    }
                    sx={{
                      color: '#262a2e',
                  fontSize: '14px',
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

                  {/* Dropdown Menu with Animation */}
                  <Menu
                    anchorEl={anchorEl}
                    open={currentDropdown === link.name}
                    onClose={handleCloseDropdown}
                    MenuListProps={{
                      'aria-labelledby': 'outline-button',
                    }}
                    sx={{
                      mt: 1,
                    }}
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {dropdownData[link.name].map((item, subIndex) => (
                        item.nestedDropdown ? (
                          <MenuItem
                            key={subIndex}
                            onClick={(event) => handleOpenNestedDropdown(event, subIndex)}
                            sx={{
                              fontSize: '0.9rem',
                              color: '#333',
                              '&:hover': {
                                color: '#007D88',
                                backgroundColor: '#f5f5f5',
                              },
                            }}
                          >
                            {item.label}
                            <IoIosArrowDown
                              style={{
                                transform: rotateNestedArrows[subIndex] ? 'rotate(180deg)' : 'rotate(0deg)',
                                transition: 'transform 0.3s ease',
                              }}
                            />
                          </MenuItem>
                        ) : (
                          <MenuItem
                            key={subIndex}
                            onClick={handleCloseDropdown}
                            component="a"
                            href={item.path}
                            sx={{
                              fontSize: '0.9rem',
                              color: '#333',
                              '&:hover': {
                                color: '#007D88',
                                backgroundColor: '#f5f5f5',
                              },
                            }}
                          >
                            {item.label}
                          </MenuItem>
                        )
                      ))}
                    </motion.div>
                  </Menu>

                  {/* Nested Dropdown for "Create Invoice" */}
                  {nestedAnchorEls[index] && (
                    <Menu
                      anchorEl={nestedAnchorEls[index]}
                      open={nestedAnchorEls[index] !== null}
                      onClose={() => handleCloseNestedDropdown(index)}
                      MenuListProps={{
                        'aria-labelledby': 'nested-button',
                      }}
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
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        
                      >
                        {dropdownData['Invoices'][3].nestedDropdown.map((item, subIndex) => (
                          <MenuItem
                            key={subIndex}
                            onClick={() => handleCloseNestedDropdown(subIndex)}
                            component="a"
                            href={item.path}
                            
                            sx={{
                              fontSize: '0.9rem',
                              color: '#333',
                              '&:hover': {
                                color: '#007D88',
                                backgroundColor: '#f5f5f5',
                              },
                            }}
                          >
                            {item.label}
                            
                          </MenuItem>
                        ))}
                      </motion.div>
                    </Menu>
                  )}
                </Box>
              ) : (
                <Button
                  href={link.path}
                  sx={{
                    color: '#333',
                    fontWeight: '500',
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
