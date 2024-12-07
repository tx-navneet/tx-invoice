import { useState } from 'react';
import '../../assets/css/Model.css';
import { MdClose, MdDelete } from 'react-icons/md';
import { IoCheckmarkDoneCircleSharp } from 'react-icons/io5';
import React from 'react';

// eslint-disable-next-line react/prop-types
const AddClientModal = ({ showModal, handleCloseModal }) => {
  const [formData, setFormData] = useState({
    companyName: '',
    email: '',
    addressLineOne: '',
    addressLineTwo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = () => {
    console.log('Saved Data:', formData);
    handleCloseModal(); // Close modal after save
  };

  const handleDiscard = () => {
    setFormData({
      companyName: '',
      email: '',
      addressLineOne: '',
      addressLineTwo: '',
    });
    handleCloseModal();
  };

  if (!showModal) return null;

  return (
    <div className="popup-overlay">
      <div className="popup">
        <div className="popup-header">
          <h5>Add New Client</h5>
          <button
            onClick={handleDiscard}
            className="text-gray-600 hover:text-black transition duration-300"
          >
            <MdClose />
          </button>{' '}
        </div>
        <div className="popup-body">
          <form>
            <div className="mb-3">
              <label htmlFor="companyName" className="form-label">
                Company Name
              </label>
              <input
                type="text"
                className="form-control"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email ID
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addressLineOne" className="form-label">
                Address Line One
              </label>
              <input
                type="text"
                className="form-control"
                id="addressLineOne"
                name="addressLineOne"
                value={formData.addressLineOne}
                onChange={handleChange}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="addressLineTwo" className="form-label">
                Address Line Two
              </label>
              <input
                type="text"
                className="form-control"
                id="addressLineTwo"
                name="addressLineTwo"
                value={formData.addressLineTwo}
                onChange={handleChange}
              />
            </div>
          </form>
        </div>
        <div className="popup-footer d-flex gap-4">
          <button
            onClick={handleDiscard}
            className="px-4 py-2 rounded-md bg-red-800 text-white d-flex justify-between gap-2 items-center hover:bg-black hover:text-white transition duration-300 mr-2"
          >
            <MdDelete /> Discard
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-md bg-green-800 text-white d-flex justify-between gap-2 items-center hover:bg-black hover:text-white transition duration-300"
          >
            <IoCheckmarkDoneCircleSharp /> Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddClientModal;
