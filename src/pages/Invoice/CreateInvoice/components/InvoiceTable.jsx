import React, { useState } from 'react';
import { TbArrowsTransferUp } from 'react-icons/tb';
import { IoIosSearch } from 'react-icons/io';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { BsFiletypeCsv } from 'react-icons/bs';
import { invoicesData } from '../../../../utils/ExternalData/Data';
import InvoicePagepagination from '../../../../component/Pagination/InvoicePagepagination';
import {
  EditIcon,
  IconButton,
  majorScale,
  toaster,
  TrashIcon,
} from 'evergreen-ui';
import { useNavigate } from 'react-router';

const InvoiceTable = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const navigate = useNavigate();

  // Filter invoices based on the search query
  const filteredInvoices = invoicesData.filter((invoice) => {
    // Convert both recipient and email to lowercase and check if the search query is included
    const recipientMatch = invoice.recipient
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const emailMatch = invoice.email
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return recipientMatch || emailMatch; // Return true if either matches
  });

  // Paginated data
  const paginatedInvoices = filteredInvoices.slice(
    currentPage * rowsPerPage,
    currentPage * rowsPerPage + rowsPerPage
  );

  // Function to determine the button class for the status
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
    // Logic for deleting an invoice
    toaster.danger(`Invoice ${id} deleted successfully`);
    console.log('Invoice deleted:', id);
  };

  const handleEdit = (id) => {
    // Logic for editing an invoice
    toaster.success(`Invoice ${id} edited successfully`);
    navigate('/create-invoice');

    console.log('Invoice edited:', id);
  };

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  return (
    <>
      <div className="container-fluid mx-auto p-4">
        {/* Search input and pagination */}
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

          <div className="ml-auto flex items-center space-x-4">
            <div className="flex items-center w-[350px] border border-gray-300 rounded p-1">
              <input
                type="text"
                className="w-full pl-2 text-[14px] border-none focus:outline-none rounded"
                placeholder="Search invoices..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button className="bg-blue-600 p-2 rounded-r-lg">
                <IoIosSearch className="text-white" />
              </button>
            </div>
            <InvoicePagepagination
              count={filteredInvoices.length}
              page={currentPage}
              rowsPerPage={rowsPerPage}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </div>
        </div>

        <table className="table-auto w-full border-separate border-spacing-0">
          <thead className="bg-gray-300">
            <tr>
              <th className="px-4 py-2">#</th>
              <th className="px-4 py-2">Invoice #</th>
              <th className="px-4 py-2">Date</th>
              <th>
                <TbArrowsTransferUp className="inline ml-2" />
              </th>
              <th className="px-4 py-2">Recipient</th>
              <th>
                <TbArrowsTransferUp className="inline ml-2" />
              </th>
              <th className="px-4 py-2">Status</th>
              <th>
                <TbArrowsTransferUp className="inline ml-2" />
              </th>
              <th className="px-4 py-2">Activity</th>
              <th>
                <TbArrowsTransferUp className="inline ml-2" />
              </th>
              <th className="px-4 py-2">Amount</th>
              <th>
                <TbArrowsTransferUp className="inline ml-2" />
              </th>
              <th className="px-4 py-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {paginatedInvoices.map((invoice, index) => (
              <tr key={invoice.id} className="border-b border-gray-300">
                <td className="px-4 py-2 border-b">
                  {currentPage * rowsPerPage + index + 1}
                </td>
                <td className="px-4 py-2 border-b">{invoice.id}</td>
                <td className="px-4 py-2 border-b">{invoice.date}</td>
                <td className="border-b"></td>
                <td className="px-4 py-2 border-b d-flex flex-col">
                  {invoice.recipient}
                  <span className="text-gray-500 text-[15px]">
                    {invoice.email}
                  </span>
                </td>
                <td className="border-b"></td>
                <td className="px-4 py-2 border-b">
                  <button
                    className={`px-3 py-1 text-[13px] rounded-full ${getStatusButtonClass(invoice.status)}`}
                  >
                    {invoice.status}
                  </button>
                </td>
                <td className="border-b"></td>
                <td className="px-4 py-2 border-b">-</td>
                <td className="border-b"></td>
                <td className="px-4 py-2 border-b">{invoice.amount}</td>
                <td className="border-b"></td>
                <td className="px-4 py-2 border-b d-flex items-center gap-2">
                  <span className="btn btn-outline-secondary w-[150px]">
                    {invoice.actions}
                  </span>
                  <div className="actionIcons d-flex justify-between items-center gap-3">
                    <div className="d-flex justify-end w-full pl-12">
                      <IconButton
                        icon={EditIcon}
                        intent="success"
                        marginRight={majorScale(2)}
                        className="hover:outline-black hover:bg-green-500"
                        onClick={() => handleEdit(invoice.id)} // Fix this line to pass a function
                      />
                    </div>
                    <div className="delete text-[20px] text-red-500">
                      <IconButton
                        icon={TrashIcon}
                        intent="danger"
                        marginRight={majorScale(2)}
                        className="hover:outline-black hover:bg-red-500"
                        onClick={() => handleDelete(invoice.id)} // Fix this line to pass a function
                      />
                    </div>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default InvoiceTable;
