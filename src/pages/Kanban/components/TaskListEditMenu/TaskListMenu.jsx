import React from 'react';

const TaskListActions = () => {
  return (
    <div className="card-action-wrap">
      <a
        className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
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
              className="feather feather-more-horizontal"
            >
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
              <circle cx="5" cy="12" r="1"></circle>
            </svg>
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
  );
};

export default TaskListActions;
