import { useState } from 'react';
import { MdClose } from 'react-icons/md';
import React from 'react';
const ShipToForm = () => {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    businessName: '',
    bankName: '',
    accNumber: '',
    branchIfsc: '',
    swiftCode: '',
    ibanNumber: '',
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
        <h6 className="font-bold ">Our Bank Details</h6>

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
                  placeholder="Bank Name"
                  type="text"
                  name="bankName"
                  value={formData.address}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <input
                  className="form-control"
                  placeholder="Account Number"
                  type="text"
                  name="accNumber"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <div className="col-lg-6 mb-3">
                <input
                  className="form-control"
                  placeholder="Bank Branch/IFSC Code"
                  type="text"
                  name="branchIfsc"
                  value={formData.branchIfsc}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 mb-3">
                <input
                  className="form-control"
                  placeholder="Swift Code"
                  type="text"
                  name="swiftCode"
                  value={formData.swiftCode}
                  onChange={handleChange}
                />
              </div>
              <div className="col-sm-12 mb-3">
                <input
                  className="form-control"
                  placeholder="IBAN"
                  type="text"
                  name="ibanNumber"
                  value={formData.ibanNumber}
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
