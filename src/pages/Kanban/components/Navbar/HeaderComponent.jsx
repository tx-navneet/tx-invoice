import React, { useContext, useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { IoIosArrowDown } from 'react-icons/io';

import { Responsivecontext } from '../../../../context/HeaderContext';
import DropDown from '../../../../component/Navbar/DropDown';
import { navLinks } from '../../../../utils/ExternalData/Data';

const HeaderComponent = () => {
  const { showSidebar } = useContext(Responsivecontext);
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);
  const dropdownRef = useRef(null);

  const linksWithDropdown = ['Invoices', 'Scrumboard', 'Contacts', 'Todo']; // Dropdown links

  const toggleDropdown = (linkName) => {
    setOpenDropdown(openDropdown === linkName ? null : linkName);
  };

  const handleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpenDropdown(null);
    }
  };

  useEffect(() => {
    if (openDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [openDropdown]);

  return (
    <header
      className={`lg:flex ${showSidebar ? 'block' : 'hidden'} border-b-[1px] border-gray-300  relative justify-center items-center`}
    >
      <div className="w-full ">
        <nav className="flex justify-start items-center flex-wrap gap-6">
          <ul className="flex md:flex-row flex-col md:gap-6 gap-3 items-center">
            {navLinks.map((link, index) => (
              <li key={index} className="relative">
                <div
                  className={`flex items-center gap-2 cursor-pointer ${
                    location.pathname === link.path
                      ? 'text-[#007D88]'
                      : 'text-black'
                  } transition-colors duration-200 ease-in-out hover:text-[#32CD32]`}
                  onClick={() => toggleDropdown(link.name)}
                >
                  <div className="text-2xl">{link.icon}</div>
                  <div className="text-md">{link.name}</div>
                  {linksWithDropdown.includes(link.name) && <IoIosArrowDown />}
                </div>

                {/* Dropdown */}
                {openDropdown === link.name && linksWithDropdown.includes(link.name) && (
                  <div
                    ref={dropdownRef}
                    className=""
                  >
                    <div className="absolute top-[50px] ">
                      
                    <DropDown linkName={link.name} />
                    </div>
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

export default HeaderComponent;
