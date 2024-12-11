/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { MdClose, MdDelete } from 'react-icons/md';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import { motion, AnimatePresence } from 'framer-motion';

const AddMoreBoardModal = ({ showModal, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    Name: '',
    Visibility: 'Public',
    Avatar: 'Choose Avatar - Text',
  });

  const [color, setColor] = useState('#3B82F6'); // Default to a nice blue

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    console.log('Saved Data:', formData);
    handleCloseModal();
  };

  const handleDiscard = () => {
    setFormData({
      Name: '',
      Visibility: 'Public',
      Avatar: 'Choose Avatar - Text',
    });
    handleCloseModal();
  };

  if (!showModal) return null;

  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[500] flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className="bg-white rounded-xl shadow-lg w-full max-w-md p-6 relative"
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors"
            >
              <MdClose className="text-2xl" />
            </button>

            {/* Modal Header */}
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Add New Board</h2>
              <p className="text-sm text-gray-500">
                Create a new board with custom settings
              </p>
            </div>

            {/* Form */}
            <div className="space-y-6">
              {/* Name Input */}
              <div>
                <label
                  htmlFor="Name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Board Name
                </label>
                <input
                  type="text"
                  id="Name"
                  name="Name"
                  value={formData.Name}
                  onChange={handleChange}
                  placeholder="Enter board name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>

              {/* Visibility Dropdown */}
              <div>
                <label
                  htmlFor="Visibility"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Visibility
                </label>
                <select
                  id="Visibility"
                  name="Visibility"
                  value={formData.Visibility}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition-all"
                >
                  <option value="Public">Public</option>
                  <option value="Private">Private</option>
                </select>
                <p className="text-xs text-gray-500 mt-1">
                  Public boards are visible to all team members
                </p>
              </div>

              {/* Avatar Dropdown */}
              <div>
                <label
                  htmlFor="Avatar"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Avatar
                </label>
                <select
                  name="Avatar"
                  id="Avatar"
                  value={formData.Avatar}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-white text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-blue-500 transition-all"
                >
                  <option value="Choose Avatar - Text">Choose Avatar - Text</option>
                  <option value="A">A</option>
                </select>
              </div>

              {/* Color Picker */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Board Color
                </label>
                <div className="flex items-center space-x-3">
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                    className="w-12 h-12 rounded-full border-2 border-gray-300 hover:border-blue-500 focus:outline-none transition-all"
                  />
                  <span className="text-sm text-gray-600" style={{ color }}>
                    {color}
                  </span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleDiscard}
                className="px-6 py-2 bg-red-50 text-red-600 rounded-md hover:bg-red-100 transition-colors flex items-center space-x-2"
              >
                <MdDelete />
                <span>Cancel</span>
              </button>
              <button
                onClick={handleSave}
                className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center space-x-2"
              >
                <IoCheckmarkDoneCircleSharp />
                <span>Create Board</span>
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AddMoreBoardModal;
