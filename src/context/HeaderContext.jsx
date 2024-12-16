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

  // Add formData state to store task details
  const [formData, setFormData] = useState({
    name: '',
    startDate: '',
    endDate: '',
    description: '',
    priority: 'Medium', // Default priority
  });

  // Function to generate a unique task name
  const generateUniqueTaskName = () => {
    const timestamp = Date.now(); // Current timestamp
    const randomNum = Math.floor(Math.random() * 1000); // Random number between 0-999
    return `Task-${timestamp}-${randomNum}`; // Combine both for a unique name
  };

  // Handle modal visibility
  const handleShowModel = () => {
    setShowModal(true);
    setFormData({
      name: generateUniqueTaskName(), // Set a unique name when the modal opens
      startDate: '',
      endDate: '',
      description: '',
      priority: 'Medium',
    });
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // Handle form data changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle saving the task data
  const handleSave = () => {
    // You can add logic to save the task data
    console.log('Task Saved:', formData);
    handleCloseModal(); // Close the modal after saving
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
        handleCloseModal,
        formData,          // Provide formData
        handleChange,      // Provide handleChange to update form fields
        handleSave,        // Provide handleSave to save task
      }}
    >
      {children}
    </Responsivecontext.Provider>
  );
};

export { Responsivecontext };
