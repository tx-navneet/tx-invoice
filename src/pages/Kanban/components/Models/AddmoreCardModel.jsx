import React, { useContext, useState } from 'react';
import { Responsivecontext } from '../../../../context/HeaderContext';
import { MdClose } from 'react-icons/md';

const Popup = () => {
  const [name, setName] = useState('');
  const { setaddmoreCards,AddmoreCards } = useContext(Responsivecontext);

  const handleAdd = () => {
    console.log('Name added:', name);
    setName('');
    setaddmoreCards(!AddmoreCards);
  };

  const handleCancel = () => {
    setName('');
    setaddmoreCards(!AddmoreCards);
  };

  return (
    <div className="relative">
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-[1060]">
        <div className="bg-white rounded-lg shadow-lg p-4 w-64 relative transform transition-all duration-300 scale-95">
          {/* Close Button */}
          <button
            onClick={handleCancel}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 transition-colors"
          >
            <MdClose className="text-xl" />
          </button>

          <h2 className="text-lg font-semibold mb-3">Enter Your Name</h2>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md p-2 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <div className="flex justify-end gap-2">
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400 transition-all"
            >
              Cancel
            </button>
            <button
              onClick={handleAdd}
              className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-all"
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
