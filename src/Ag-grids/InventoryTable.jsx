/* eslint-disable no-unused-vars */
import React, { useState, useMemo } from 'react';
import { AgGridReact } from '@ag-grid-community/react';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import '@ag-grid-community/styles/ag-grid.css';
import '@ag-grid-community/styles/ag-theme-quartz.css';
import { invoicesData } from '../utils/ExternalData/Data';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsFiletypeCsv } from 'react-icons/bs';
import {
  EditIcon,
  IconButton,
  majorScale,
  Menu,
  toaster,
  TrashIcon,
  Popover,
  Position,
  Button,
} from 'evergreen-ui';
import { useNavigate } from 'react-router';

// Registering the required AG Grid modules
ModuleRegistry.registerModules([ClientSideRowModelModule]);

const GridExample = () => {
  const navigate = useNavigate();
  const [rowData] = useState(invoicesData);

  const getStatusButtonClass = (status) => {
    switch (status) {
      case 'Unpaid':
        return 'bg-[#FF0000] text-[#fff] hover:opacity-70'; // Red for Unpaid
      case 'Paid':
        return 'bg-[#007D88] text-[#fff] hover:opacity-70'; // Green for Paid
      case 'Draft':
        return 'bg-[#eaeaea] text-[#262a2e] hover:opacity-70'; // Gray for Draft
      default:
        return 'bg-blue-800 text-white'; // Default color
    }
  };

  const handleDelete = (id) => {
    toaster.danger(`Invoice ${id} deleted successfully`);
    console.log('Invoice deleted:', id);
  };

  const handleEdit = (id) => {
    toaster.success(`Invoice ${id} edited successfully`);
    navigate('/create-invoice');
    console.log('Invoice edited:', id);
  };

  const columnDefs = useMemo(
    () => [
      { headerName: 'ID', field: 'id', resizable: true },
      { headerName: 'Date', field: 'date', resizable: true },
      { headerName: 'Recipient', field: 'recipient', resizable: true },
      { headerName: 'Email', field: 'email', flex: 1, resizable: true },
      {
        headerName: 'Status',
        field: 'status',
        cellRenderer: (params) => {
          const status = params.value;
          return (
            <span
              className={`px-3 py-2 text-[11px] text-[#fff] rounded-full ${getStatusButtonClass(
                status
              )}`}
            >
              {status}
            </span>
          );
        },
      },
      { headerName: 'Amount', field: 'amount', resizable: true },
      {
        headerName: 'Actions',
        field: 'actions',
        flex: 1,
        cellRenderer: (params) => {
          const { id } = params.data;
          return (
            <div className="flex justify-start items-center gap-3">
               
              <Popover
                position={Position.BOTTOM_LEFT}
                content={
                  <Menu>
                    <Menu.Group>
                      <Menu.Item
                        onSelect={() => toaster.success('Invoice sent.')}
                      >
                        Send
                      </Menu.Item>
                      <Menu.Item onSelect={() => handleEdit(id)}>
                        Edit
                      </Menu.Item>
                      <Menu.Item
                        onSelect={() => toaster.success('Invoice archived.')}
                      >
                        Archive
                      </Menu.Item>
                      <Menu.Item
                        onSelect={() => handleDelete(id)}
                        intent="danger"
                      >
                        Delete
                      </Menu.Item>
                    </Menu.Group>
                  </Menu>
                }
              >
              <Button marginRight={16} intent='success' className='w-[100px]'>Edit</Button>
              </Popover>

              {/* Edit and Delete Icons */}
              <IconButton
                icon={EditIcon}
                intent="success"
                onClick={() => handleEdit(id)}
              />
              <IconButton
                icon={TrashIcon}
                intent="danger"
                onClick={() => handleDelete(id)}
              />
            </div>
          );
        },
      },
    ],
    []
  );

  const defaultColDef = useMemo(
    () => ({
      filter: 'agTextColumnFilter',
      floatingFilter: true,
      resizable: true,
      sortable: true,
    }),
    []
  );

  const gridOptions = {
    pagination: true,
    paginationPageSize: 10,
    rowSelection: 'multiple',
  };

  return (
    <div
      className="ag-theme-quartz pt-6"
      style={{ height: '75vh', width: '96%', margin: '0 auto' }}
    >
      <div className="flex justify-between items-center mb-4">
        <button
          type="button"
          className="btn btn-outline-primary d-flex justify-center items-center gap-2"
        >
          <AiOutlineFilePdf className="text-[20px]" />
          Export in PDF
        </button>
        <div className="button d-flex gap-4">
          <button
            type="button"
            className="btn btn-outline-success d-flex justify-center items-center gap-2"
          >
            <BsFiletypeCsv className="text-[20px]" />
            Export in CSV
          </button>
        </div>
      </div>
      <AgGridReact
        rowData={rowData}
        columnDefs={columnDefs}
        defaultColDef={defaultColDef}
        gridOptions={gridOptions}
      />
    </div>
  );
};

export default GridExample;
