import React, { useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { navLinks } from '../../utils/ExternalData/Data';
import { IoIosArrowDown } from 'react-icons/io';
import DropDown from '../Model/DropDown';
import { Responsivecontext } from '../../context/HeaderContext';

const Header = () => {
  const { showSidebar } = useContext(Responsivecontext); // Access showSidebar state
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null); // Track currently open dropdown
  const dropdownRef = useRef(null); // Reference to the dropdown menu

  const linksWithDownArrow = ['Invoices', 'Scrumboard', 'Todo', 'Contacts'];

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(null); // Close dropdown if click is outside
    }
  };

  // Add event listener for clicks outside when dropdown is open
  useEffect(() => {
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside); // Clean up on unmount
    };
  }, [openDropdown]);

  return (
    <header
      className={`lg:flex ${
        showSidebar ? 'block' : 'hidden'
      } border-b-2 border-gray-500 py-3 relative`}
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

                {/* Dropdown Menu */}
                {openDropdown === link.name && (
                  <div
                    ref={dropdownRef} // Attach ref to the dropdown
                    className="absolute top-[50px] left-0 z-50"
                  >
                    <DropDown linkName={link.name} />
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
