/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from 'react-icons/io';

const KanbanDropDown = ({ linkName }) => {
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const getLinks = (linkName) => {
    switch (linkName) {
      case 'Invoices':
        return [
          { path: '/invoice-list', label: 'Invoice List' },
          { path: '/invoice-templates', label: 'Invoice Templates' },
          {
            path: '#',
            label: 'Create Invoice',
            subMenu: [
              { path: '/create-performa-invoice', label: 'Performa Invoice' },
              { path: '/create-tax-invoice', label: 'Tax Invoice' },
              { path: '/create-quote', label: 'Quote' },
            ],
          },
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
      className="bg-white shadow-lg absolute z-10 rounded-md mt-2 transition-all duration-200 ease-in-out w-[200px] p-2"
      style={{
        boxShadow:
          'rgba(50, 50, 105, 0.15) 0px 2px 5px 0px, rgba(0, 0, 0, 0.05) 0px 1px 1px 0px',
      }}
    >
      <div className="flex flex-col gap-[5px] text-black justify-start items-start">
        {links.map((link, index) => (
          <div key={index} className="w-full">
            {link.subMenu ? (
              <div>
                <div
                  className="text-sm text-black no-underline hover:bg-gray-100 rounded-md transition-all duration-200 w-full p-2 block cursor-pointer flex items-center justify-between"
                  onClick={() =>
                    setOpenSubMenu(
                      openSubMenu === link.label ? null : link.label
                    )
                  }
                >
                  <span>{link.label}</span>
                  <IoIosArrowForward
                    className={`transform transition-transform duration-200 ${
                      openSubMenu === link.label ? 'rotate-90' : ''
                    }`}
                  />
                </div>
                {openSubMenu === link.label && (
                  <div className="pl-4 mt-2 space-y-2">
                    {link.subMenu.map((subLink, subIndex) => (
                      <Link
                        key={subIndex}
                        to={subLink.path}
                        className="text-sm text-black no-underline hover:bg-gray-100 rounded-md transition-all duration-200 w-full p-2 block"
                      >
                        {subLink.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                to={link.path}
                className="text-sm text-black no-underline hover:bg-gray-100 rounded-md transition-all duration-200 w-full p-2 block"
              >
                {link.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default KanbanDropDown;
