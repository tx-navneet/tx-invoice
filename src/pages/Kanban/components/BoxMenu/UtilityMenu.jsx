import React from 'react';

const UtilityMenu = () => {
  return (
    <>
      <div className="card-action-wrap">
        <a
          className="btn btn-xs btn-icon btn-flush-dark btn-rounded flush-soft-hover dropdown-toggle no-caret"
          href="#"
          data-bs-toggle="dropdown"
        >
          <span className="icon">
            <span className="feather-icon">
              <i data-feather="more-vertical"></i>
            </span>
          </span>
        </a>
        <div className="dropdown-menu dropdown-menu-end">
          <a
            className="dropdown-item"
            href="#"
            data-bs-toggle="modal"
            data-bs-target="#task_detail"
          >
            <span className="feather-icon dropdown-icon">
              <i data-feather="edit-2"></i>
            </span>
            <span>Edit</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="user"></i>
            </span>
            <span>Assign to</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="paperclip"></i>
            </span>
            <span>Attach files</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="tag"></i>
            </span>
            <span>Apply Labels</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="calendar"></i>
            </span>
            <span>Set Due Date</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="bookmark"></i>
            </span>
            <span>Follow Task</span>
          </a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="arrow-up"></i>
            </span>
            <span>Set as Top Priority</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="repeat"></i>
            </span>
            <span>Change Status</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="pocket"></i>
            </span>
            <span>Save as Template</span>
          </a>
          <a className="dropdown-item" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="archive"></i>
            </span>
            <span>Move to archive</span>
          </a>
          <a className="dropdown-item delete-task" href="#">
            <span className="feather-icon dropdown-icon">
              <i data-feather="trash-2"></i>
            </span>
            <span>Delete</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default UtilityMenu;
