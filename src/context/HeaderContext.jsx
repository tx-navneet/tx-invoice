/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { createContext, useState } from 'react';

// Create Responsivecontext
const Responsivecontext = createContext();

// Context Provider
export const ResponsiveProvider = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(false);
  const [closeSidebar, setcloseSidebar] = useState(false);
  const [closeTaskbar, setcloseTaskbar] = useState(false);
  const [AddmoreCards, setaddmoreCards] = useState(false);

  const handleClick = () => {
    setshowSidebar(!showSidebar);
  };

  const hanldeCloseSidebar = () => {
    setcloseSidebar(!closeSidebar);
  };

  const hanldeCloseTaskbar = () => {
    setcloseTaskbar(!closeTaskbar);
  };

  const handleAddCards = () => {
    setaddmoreCards(!AddmoreCards);
  };

  return (
    <Responsivecontext.Provider
      value={{
        showSidebar,
        handleClick,
        hanldeCloseSidebar,
        closeSidebar,
        hanldeCloseTaskbar,
        closeTaskbar,
        handleAddCards,
        AddmoreCards,
        setaddmoreCards,
      }}
    >
      {children}
    </Responsivecontext.Provider>
  );
};

export { Responsivecontext };
