import React, { useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { navLinks } from '../../utils/ExternalData/Data';
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io';
import DropDown from '../Model/DropDown';
import { Responsivecontext } from '../../context/HeaderContext';

const Header = () => {
  const { showSidebar } = useContext(Responsivecontext);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openNestedDropdown, setOpenNestedDropdown] = useState(false); // State for nested dropdown
  const dropdownRef = useRef(null);
  const nestedDropdownRef = useRef(null);

  const linksWithDownArrow = ['Invoices', 'Scrumboard', 'Todo', 'Contacts'];

  const toggleDropdown = (linkName) => {
    if (linksWithDownArrow.includes(linkName)) {
      setOpenDropdown(openDropdown === linkName ? null : linkName);
    } else {
      setOpenDropdown(null);
    }
  };

  const toggleNestedDropdown = () => {
    setOpenNestedDropdown(!openNestedDropdown);
  };

  const handleClickOutside = (e) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target) &&
      (!nestedDropdownRef.current || !nestedDropdownRef.current.contains(e.target))
    ) {
      setOpenDropdown(null);
      setOpenNestedDropdown(false);
    }
  };

  useEffect(() => {
    if (openDropdown || openNestedDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown, openNestedDropdown]);

  return (
    <header
      className={`lg:flex ${
        showSidebar ? 'block' : 'hidden'
      } border-b-[1px] border-gray-300 py-3 relative`}
    >
      <div className="w-full">
        <nav className="flex justify-start items-center flex-wrap gap-6">
          <ul className="flex md:flex-row flex-col md:gap-6 gap-3">
            {navLinks.map((link, index) => (
              <li key={index} className="flex items-center relative">
                <div
                  className={`flex gap-2 items-center cursor-pointer ${
                    location.pathname === link.path
                      ? 'text-[#007D88]'
                      : 'text-black'
                  } transition-colors duration-200 ease-in-out hover:text-[#32CD32]`}
                  style={{ textDecoration: 'none' }}
                  onClick={() => toggleDropdown(link.name)}
                >
                  <div className="text-2xl">{link.icon}</div>
                  <div className="text-md">{link.name}</div>
                  {linksWithDownArrow.includes(link.name) && <IoIosArrowDown />}
                </div>

                {/* Parent Dropdown Menu */}
                {openDropdown === link.name && linksWithDownArrow.includes(link.name) && (
                  <div
                    ref={dropdownRef}
                    className="absolute top-[50px] left-0 z-50 bg-white shadow rounded-md p-2"
                  >
                    {link.name === 'Invoices' ? (
                      <ul>
                        <li
                          className="flex justify-between items-center cursor-pointer py-1 px-3 hover:bg-gray-100"
                          onClick={toggleNestedDropdown}
                        >
                          Create Invoice
                          <IoIosArrowForward />
                        </li>

                        {/* Nested Dropdown */}
                        {openNestedDropdown && (
                          <ul
                            ref={nestedDropdownRef}
                            className="absolute left-full top-0 bg-white shadow rounded-md p-2"
                          >
                            <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                              Performa Invoice
                            </li>
                            <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                              Tax Invoice
                            </li>
                            <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                              Quote
                            </li>
                          </ul>
                        )}

                        {/* Rest of Invoice Dropdown */}
                        <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                          View Invoices
                        </li>
                        <li className="py-1 px-3 hover:bg-gray-100 cursor-pointer">
                          Payment Status
                        </li>
                      </ul>
                    ) : (
                      <DropDown linkName={link.name} />
                    )}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
