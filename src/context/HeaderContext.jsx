/* eslint-disable react/prop-types */
import { createContext, useState } from 'react';
import React from 'react';

const Responsivecontext = createContext();

export const ResponsiveProvider = ({ children }) => {
  const [showSidebar, setshowSidebar] = useState(false);
  const [closeSidebar,setcloseSidebar]=useState(false)


  const handleClick = () => {
    setshowSidebar(!showSidebar);
  };
  const hanldeCloseSidebar = ()=>{
    setcloseSidebar(!closeSidebar)
  }

  return (
    <Responsivecontext.Provider value={{ showSidebar, handleClick,hanldeCloseSidebar,closeSidebar }}>
      {children}
    </Responsivecontext.Provider>
  );
};

export { Responsivecontext }; 
