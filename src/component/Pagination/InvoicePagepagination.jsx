import { useState } from 'react';
import { TablePagination, styled } from '@mui/material';
import React from 'react';

// Create a custom-styled TablePagination component
const CustomTablePagination = styled(TablePagination)(({ theme }) => ({
  color: '#333',
  paddingTop: '10px',
  display: 'flex',
  alignItems: 'center', // Center items vertically
  justifyContent: 'space-between', // Space between items
  '.MuiTablePagination-select': {
    backgroundColor: 'transparent', // Remove background color
    color: '#333',
    border: '1px solid #ccc', // Add a border for better visibility
    borderRadius: '4px', // Rounded corners
    padding: '4px 8px', // Padding for better spacing
    marginLeft: '8px', // Space between "View" and dropdown
  },
  '.MuiTablePagination-actions': {
    justifyContent: 'flex-end', // Align pagination actions to the right
  },
  '.MuiTablePagination-spacer': {
    display: 'none', // Remove the spacer
  },
  '.MuiButtonBase-root': {
    color: '#007D88', // Change button color
  },
  '.MuiTablePagination-toolbar': {
    padding: '8px 16px', // Adjust padding for the toolbar
  },
  '.view-label': {
    marginRight: '8px', // Space between "View" and dropdown
    fontWeight: 'bold', // Optional: make the label bold
  },
}));

const InvoicePagepagination = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <CustomTablePagination
      component="div"
      count={100} // Total number of rows
      page={page} // Current page
      onPageChange={handleChangePage} // Page change handler
      rowsPerPage={rowsPerPage} // Rows per page
      onRowsPerPageChange={handleChangeRowsPerPage} // Rows per page change handler
      rowsPerPageOptions={[10, 25, 50]} // Options for rows per page
      labelRowsPerPage={<span className="view-label">View</span>} // Custom label for rows per page
    />
  );
};

export default InvoicePagepagination;
