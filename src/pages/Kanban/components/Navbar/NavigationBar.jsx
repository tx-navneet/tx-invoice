import React, { useState } from 'react';

const NavigationBar = () => {
  const [showDescription, setShowDescription] = useState(false);

  const handleCheckboxChange = () => {
    setShowDescription(prevState => !prevState);
  };

  return (
    <div>
      <div>
        <div className="taskbar-toolbar">
          <div className="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
            <button
              className="btn btn-soft-primary flex-shrink-0 btn-add-newlist me-4"
              data-bs-toggle="modal"
              data-bs-target="#add_task_list"
            >
              Create New
            </button>
            <div className="form-check form-switch ms-auto">
              <input
                type="checkbox"
                className="form-check-input"
                id="customDes"
                checked={showDescription}
                onChange={handleCheckboxChange}
              />
              <label className="form-check-label" htmlFor="customDes">
                Show description
              </label>
            </div>
          </div>
          <form role="search" className="d-none d-lg-flex">
            <input
              type="text"
              className="form-control"
              placeholder="Search in conversation"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
