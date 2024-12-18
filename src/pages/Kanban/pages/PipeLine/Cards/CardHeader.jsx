/* eslint-disable react/prop-types */
import React from 'react';

import { RxDotsVertical } from 'react-icons/rx';

const LeadCardHeader = ({ title, leadCount, onAddCard ,price}) => {
    const handleShowCardModel =()=>{
        console.log("done");
        
    }
  return (
    <div className="card-header card-header-action">
      <div className="spipeline-handle">
        <h6 className="text-uppercase fw-bold mb-0">{title}</h6>
        <div className="card-action-wrap">
          <a
            className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
            href="#"
            data-bs-toggle="dropdown"
          >
            <span className="icon">
              <span className="feather-icon">
                <RxDotsVertical />
              </span>
            </span>
          </a>
          <div role="menu" className="dropdown-menu dropdown-menu-end">
            <a
              className="dropdown-item edit-tasklist"
              href="#"
              data-bs-toggle="modal"
              data-bs-target="#edit_task_list"
            >
              Edit
            </a>
            <a className="dropdown-item delete-tasklist" href="#">
              Delete
            </a>
            <a className="dropdown-item clear-tasklist" href="#">
              Clear All
            </a>
          </div>
        </div>
      </div>
      <div>
        <span>
          <span className="overall-estimation pr-3">{price}</span>
          <span className="spipeline-dot-sep ">●</span>
          <span className="lead-count">{leadCount}</span>
          <span className='text-sm text-gray-600 pl-1'>Leads</span>
        </span> 
      </div>
      <button
        className="btn btn-light btn-block text-primary btn-add-newtask"
        onClick={onAddCard}
        data-bs-toggle="modal"
        data-bs-target="#add_new_deal"
      >
        <span>
          <span className="icon">
            <span className="feather-icon">
              <i data-feather="plus"></i>
            </span>
          </span>
          <button className="btn-text" onClick={handleShowCardModel}>Add Card</button>
        </span>
      </button>
    </div>
  );
};

export default LeadCardHeader;
