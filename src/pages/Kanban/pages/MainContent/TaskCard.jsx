/* eslint-disable react/prop-types */
// src/TaskCard.js
import React from 'react';

const TaskCard = ({ title, progress, deadline }) => {
  return (
    <div className="card card-border card-wth-progress card-simple tasklist-card">
      <div className="progress progress-bar-xs">
        <div
          className="progress-bar bg-warning"
          style={{ width: `${progress}%` }}
          role="progressbar"
          aria-valuenow={progress}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
      <div className="card-header card-header-action">
        <h6 className="fw-bold">{title}</h6>
        <div className="card-action-wrap">
          <a
            className="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
            href="#"
            data-bs-toggle="dropdown"
          >
            <span className="icon">
              <span className="feather-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feather feather-more-vertical"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="12" cy="5" r="1"></circle>
                  <circle cx="12" cy="19" r="1"></circle>
                </svg>
              </span>
            </span>
          </a>
          {/* Add CardListActions component here if needed */}
        </div>
      </div>
      <div className="card-footer text-muted justify-content-between">
        <div>
          <span className="task-counter">
            <span>
              <i className="ri-checkbox-line"></i>
            </span>
            <span>4/8</span>
          </span>
        </div>
        <div>
          <span className="task-deadline">{deadline}</span>
        </div>
      </div>
    </div>
  );
};

export default TaskCard;