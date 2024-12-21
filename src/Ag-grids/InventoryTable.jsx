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
import Navbar from '../component/Navbar/Navbar';
import Header from '../component/Navbar/Header';

ModuleRegistry.registerModules([ClientSideRowModelModule]);

const InventoryTable = () => {
  const navigate = useNavigate();
  const [rowData] = useState(invoicesData);

  const getStatusButtonClass = (status) => {
    switch (status) {
      case 'Unpaid':
        return 'hover:opacity-80 bg-red-500 text-white py-1 px-4 rounded-full';
      case 'Paid':
        return 'hover:opacity-80 bg-green-500 text-white py-1 px-4 rounded-full';
      case 'Draft':
        return 'hover:opacity-80 bg-blue-500 text-white py-1 px-4 rounded-full';
      default:
        return 'bg-gray-300 text-black';
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
      { headerName: 'ID', field: 'id', resizable: true, cellClass: 'text-left' },
      { headerName: 'Date', field: 'date', resizable: true, cellClass: 'text-left' },
      { headerName: 'Recipient', field: 'recipient', resizable: true, cellClass: 'text-left' },
      { headerName: 'Email', field: 'email', flex: 1, resizable: true, cellClass: 'text-left' },
      {
        headerName: 'Status',
        field: 'status',
        cellRenderer: (params) => {
          const status = params.value;
          return (
            <span className={getStatusButtonClass(status)}>
              {status}
            </span>
          );
        },
        cellClass: 'text-left',
      },
      { headerName: 'Amount', field: 'amount', resizable: true, cellClass: 'text-left' },
      {
        headerName: 'Actions',
        field: 'actions',
        flex: 1,
        cellRenderer: (params) => {
          const { id } = params.data;
          return (
            <div className="flex justify-center items-center gap-3">
              <Popover
                position={Position.BOTTOM_LEFT}
                content={
                  <Menu>
                    <Menu.Group>
                      <Menu.Item onSelect={() => toaster.success('Invoice sent.')}>
                        Send
                      </Menu.Item>
                      <Menu.Item onSelect={() => handleEdit(id)}>
                        Edit
                      </Menu.Item>
                      <Menu.Item onSelect={() => toaster.success('Invoice archived.')}>
                        Archive
                      </Menu.Item>
                      <Menu.Item onSelect={() => handleDelete(id)} intent="danger">
                        Delete
                      </Menu.Item>
                    </Menu.Group>
                  </Menu>
                }
              >
                <Button marginRight={16} intent="success" className="w-[100px]">
                  Edit
                </Button>
              </Popover>
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
        cellClass: 'text-left',
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
    animateRows: true,
  };

  return (
    <>
      <Navbar />
      <Header />
      <div className="ag-theme-quartz pt-3" style={{ height: '78vh', width: '96%', margin: '0 auto' }}>
        <div className="flex justify-between items-center mb-4">
          <button type="button" className="btn btn-outline-primary d-flex justify-center items-center gap-2">
            <AiOutlineFilePdf className="text-[20px]" />
            Export in PDF
          </button>
          <button type="button" className="btn btn-outline-success d-flex justify-center items-center gap-2">
            <BsFiletypeCsv className="text-[20px]" />
            Export in CSV
          </button>
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          gridOptions={gridOptions}
          rowHeight={60}
        />
      </div>
    </>
  );
};

export default InventoryTable;
