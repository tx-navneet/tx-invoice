import React, { useContext, useState } from 'react';
import AccountMenu from '../../../component/Avtar/LoginAvatar';
import { Responsivecontext } from '../../../context/HeaderContext';

const KanbanNavbar = () => {
  const { handleClick } = useContext(Responsivecontext);
  const [showUser, setshowUser] = useState(false);

  const handleToggle = () => {
    setshowUser(!showUser);
  };

  return (
    <>
      <div className="p-4 ml-2 border-b-[1px] border-gray-300">
        <div className="flex justify-between items-center w-full sm:flex-col flex-row">
          <div className="boxOne lg:block hidden">
            <span className="text-black text-2xl font-semibold">
              TX INVOICE
            </span>
          </div>

          <div className="boxTwo lg:hidden">
            <button onClick={handleClick} className="text-black text-3xl">
              &#9776;
            </button>
          </div>

          <div className="boxTwo flex items-center">
            <div className="w-[40px] h-[40px]" onClick={handleToggle}>
              <img
                src="/img/avatar12.jpg"
                alt="User Avatar"
                className="rounded-full w-full h-full cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      {showUser && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-4 rounded-lg shadow-lg w-72">
            <AccountMenu />
          </div>
        </div>
      )}
    </>
  );
};

export default KanbanNavbar;
