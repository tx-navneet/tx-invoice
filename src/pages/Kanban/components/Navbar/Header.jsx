import React, { useContext } from 'react';
import { Responsivecontext } from '../../../../context/HeaderContext';

const Header = () => {
  const { hanldeCloseSidebar, closeTaskbar,hanldeCloseTaskbar } = useContext(Responsivecontext);
  return (
    <>
      <header className="taskboard-header">
        <div className="d-flex align-items-center flex-1">
          <div className="d-flex">
            <a className="taskboardapp-title link-dark" href="#">
              <h1>
                Jampack
                <span className="task-star marked">
                  <span className="feather-icon">
                    <i data-feather="star"></i>
                  </span>
                </span>
              </h1>
            </a>
            <div className="ms-3">
              <div className="input-group">
                <span className="input-affix-wrapper">
                  <span className="input-prefix">
                    <i className="ri-lock-line"></i>
                  </span>
                  <select className="form-select">
                    <option selected value="1">
                      Private Board
                    </option>
                    <option value="2">Public Board</option>
                  </select>
                </span>
              </div>
            </div>
          </div>
        </div>
        <select className="form-select d-xxl-none flex-1 mx-3">
          <option selected value="1">
            Task Board
          </option>
          <option value="2">Conversation</option>
          <option value="3">To Do List</option>
          <option value="4">Files</option>
          <option value="5">Links</option>
        </select>
        <ul className="nav nav-pills nav-pills-rounded active-theme nav-light px-2 flex-shrink-0 d-xxl-flex d-none">
          <li className="nav-item">
            <a className="nav-link active" href="javascript:void(0);">
              <span className="nav-link-text">Task Board</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <span className="nav-link-text">Conversation</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <span className="nav-link-text">To Do List</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <span className="nav-link-text">Files</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="javascript:void(0);">
              <span className="nav-link-text">Links</span>
            </a>
          </li>
        </ul>
        <div className="taskboard-options-wrap flex-1">
          <div className="d-flex ms-auto">
            <div className="avatar-group avatar-group-overlapped d-xl-flex d-none me-3">
              <div
                className="avatar avatar-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Katharine"
              >
                <img
                  src="public/img/avatar8.jpg"
                  alt="user"
                  className="avatar-img"
                />
              </div>
              <div
                className="avatar avatar-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Dean"
              >
                <img
                  src="public/img/avatar13.jpg"
                  alt="user"
                  className="avatar-img"
                />
              </div>
              <div
                className="avatar avatar-xs avatar-soft-danger avatar-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tom"
              >
                <span className="initial-wrap">T</span>
              </div>
              <div
                className="avatar avatar-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Morgan"
              >
                <img
                  src="public/img/avatar2.jpg"
                  alt="user"
                  className="avatar-img"
                />
              </div>
              <div
                className="avatar avatar-icon avatar-primary avatar-rounded"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Tooltip text"
              >
                <span className="initial-wrap">
                  <span className="feather-icon">
                    <i data-feather="plus"></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="v-separator d-xl-flex d-none"></div>
            <a
              className={`btn btn-icon btn-flush-dark btn-rounded flush-soft-hover taskboardapp-info-toggle ms-xl-0 ${closeTaskbar ? 'active' : ''}`}
              href="#"
              onClick={hanldeCloseTaskbar}
            >
              <span
                className="icon"
                data-bs-toggle="tooltip"
                data-bs-placement="top"
                title="Info"
              >
                <span className="feather-icon">
                  <i data-feather="info"></i>
                </span>
              </span>
            </a>
            <a
              className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover hk-navbar-togglable d-sm-inline-block d-none"
              href="#"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Collapse"
            >
              <span className="icon">
                <span className="feather-icon">
                  <i data-feather="chevron-up"></i>
                </span>
                <span className="feather-icon d-none">
                  <i data-feather="chevron-down"></i>
                </span>
              </span>
            </a>
          </div>
        </div>
        <div
          className="hk-sidebar-togglable"
          onClick={hanldeCloseSidebar}
        ></div>
      </header>
    </>
  );
};

export default Header;
