// HeaderContext.js
import React, { createContext, useState, useContext } from 'react';

export const Responsivecontext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    priority: 'Medium',
  });

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Handle saving the form data here
    handleCloseModal(); // Close the modal after saving
  };

  return (
    <Responsivecontext.Provider
      value={{
        showModal,
        handleOpenModal,
        handleCloseModal,
        formData,
        handleChange,
        handleSave,
      }}
    >
      {children}
    </Responsivecontext.Provider>
  );
};

export const useResponsive = () => useContext(Responsivecontext);
