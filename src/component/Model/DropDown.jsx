/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

const DropDown = ({ linkName }) => {
  // Define dropdown links based on the linkName
  const getLinks = (linkName) => {
    switch (linkName) {
      case 'Invoices':
        return [
          { path: '/invoice-list', label: 'Invoice List' },
          { path: '/invoice-templates', label: 'Invoice Templates' },
          { path: '/create-invoice', label: 'Create Invoice' },
          { path: '/invoice-preview', label: 'Invoice Preview' },
        ];
      case 'Scrumboard':
        return [
          { path: '/all-boards', label: 'All Boards' },
          { path: '/project-kanban', label: 'Project Kanban' },
          { path: '/pipeline-kanban', label: 'Pipeline Kanban' },
        ];
      case 'Contacts':
        return [
          { path: '/contact-list', label: 'Contact List' },
          { path: '/contact-cards', label: 'Contact Cards' },
          { path: '/edit-contact', label: 'Edit Contact' },
        ];
      case 'Todo':
        return [
          { path: '/tasklist', label: 'Tasklist' },
          { path: '/gantt', label: 'Gantt' },
        ];
      default:
        return [];
    }
  };

  const links = getLinks(linkName);

  return (
    <div
      className="bg-white shadow-lg absolute z-10 rounded-md mt-2 transition-all duration-200 ease-in-out w-[150px] p-2"
      style={{
        boxShadow:
          'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      }}
    >
      <div className="flex flex-col gap-[5px] text-black justify-center items-center">
        {links.map((link, index) => (
          <div key={index} className="w-full">
            <Link
              to={link.path}
              className="text-sm text-black no-underline hover:bg-gray-100 hover:transform hover:translate-x-[-2px] hover:translate-y-[-2px] rounded-md transition-all duration-200 w-full p-2 block"
            >
              {link.label}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
