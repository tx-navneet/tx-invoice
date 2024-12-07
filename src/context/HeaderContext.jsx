/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import React from 'react';

const Responsivecontext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(false);

  const handleClick = () => {
    setshowSidebar(!showSidebar);
  };

  return (
    <Responsivecontext.Provider value={{ showSidebar, handleClick }}>
      {children}
    </Responsivecontext.Provider>
  );
};

export { Responsivecontext }; 
