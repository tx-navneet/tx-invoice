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

  // Dashboard inside card add new task state
  const [showModal, setShowModal] = useState(false);

  const handleShowModel = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

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
        handleShowModel,
        showModal,
        setShowModal,
        handleCloseModal
      }}
    >
      {children}
    </Responsivecontext.Provider>
  );
};

export { Responsivecontext };
