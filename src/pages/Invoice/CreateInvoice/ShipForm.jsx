import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import React from 'react';
const ShipToForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    address: '',
    city: '',
    postalCode: '',
    state: '',
    country: '',
    gstin: '',
  });

  const toggleFormVisibility = () => {
    console.log('Toggling form visibility:', !isFormVisible);
    setIsFormVisible(!isFormVisible);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

 

  return (
    <div className="col-xxl-4 offset-xxl-5">
      <div className="d-flex justify-between items-center">
        <h6 className="font-bold ">Ship To</h6>

        {isFormVisible && (
          <span
            className="font-bold text-lg cursor-pointer"
            onClick={toggleFormVisibility}
          >
            {' '}
            <MdClose />
          </span>
        )}
      </div>
      <div className="repeater">
        {isFormVisible && (
          <div id="shipto_collapse">
            <div className="row gx-3">
              <div className="col-sm-12 mb-3">
                <input
                  className="form-control"
                  placeholder="Client business name"
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 mb-3">
                <input
                  className="form-control"
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <input
                  className="form-control"
                  placeholder="City"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <input
                  className="form-control"
                  placeholder="Postal Code"
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 mb-3">
                <input
                  className="form-control"
                  placeholder="State"
                  type="text"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 mb-3">
                <input
                  className="form-control"
                  placeholder="Country"
                  type="text"
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 mb-3">
                <input
                  className="form-control"
                  placeholder="GSTIN Enter GSTIN here(optional)"
                  type="text"
                  name="gstin"
                  value={formData.gstin}
                  onChange={handleChange}
                />
              </div>
            </div>
            {/* <div className="d-flex justify-content-end gap-3 mt-3">
              <button className="btn btn-danger" onClick={toggleFormVisibility}>
                Cancel
              </button>
              <button className="btn btn-success" onClick={handleSubmit}>
                Save
              </button>
            </div> */}
          </div>
        )}
        <a
          onClick={toggleFormVisibility}
          className="d-inline-flex align-items-center text-primary mt-2 cursor-pointer"
        >
          <i className="bi bi-plus-circle me-1"></i> Add shipping address
        </a>
      </div>
    </div>
  );
};

export default ShipToForm;
