import React, { useEffect } from 'react';
// import '.';
import feather from 'feather-icons';

const Sidebar = () => {
  useEffect(() => {
    feather.replace();
  }, []);
  const hanldeOpanModel = () => {
    console.log('Log DOne');
  };
  return (
    <>
      <nav className="taskboardapp-sidebar">
        <div data-simplebar className="nicescroll-bar">
          <div className="menu-content-wrap">
            <button
              className="btn btn-primary btn-rounded btn-block mb-4"
              onClick={hanldeOpanModel}
            >
              Add New Board
            </button>
            <div className="menu-group">
              <ul className="nav nav-light navbar-nav flex-column">
                <li className="nav-item active">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="nav-icon-wrap">
                      <span className="feather-icon">
                        <i data-feather="layout"></i>
                      </span>
                    </span>
                    <span className="nav-link-text">All Boards</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="nav-icon-wrap">
                      <span className="feather-icon">
                        <i data-feather="star"></i>
                      </span>
                    </span>
                    <span className="nav-link-text">Stared Boards</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="nav-icon-wrap">
                      <span className="feather-icon">
                        <i data-feather="lock"></i>
                      </span>
                    </span>
                    <span className="nav-link-text">Private Boards</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="nav-icon-wrap">
                      <span className="feather-icon">
                        <i data-feather="user-check"></i>
                      </span>
                    </span>
                    <span className="nav-link-text">Public Boards</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="javascript:void(0);">
                    <span className="nav-icon-wrap">
                      <span className="feather-icon">
                        <i data-feather="trash-2"></i>
                      </span>
                    </span>
                    <span className="nav-link-text">Deleted</span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="separator separator-light"></div>
            <div className="d-flex align-items-center justify-content-between mb-2">
              <div className="title-sm text-primary mb-0">Favourite Boards</div>
              <a
                href="#"
                className="btn btn-xs btn-icon btn-rounded btn-light"
                data-bs-toggle="modal"
                data-bs-target="#add_fav_board"
              >
                <span
                  className="icon"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Add Board"
                >
                  <span className="feather-icon">
                    <i data-feather="plus"></i>
                  </span>
                </span>
              </a>
            </div>
            <div className="menu-group">
              <ul className="nav nav-light navbar-nav flex-column">
                <li className="nav-item">
                  <div>
                    <div className="media d-flex align-items-center">
                      <div className="media-head me-2">
                        <div className="avatar avatar-xs avatar-primary avatar-rounded">
                          <span className="initial-wrap">J</span>
                        </div>
                      </div>
                      <div className="media-body">
                        <div>
                          <div className="name">Jampack</div>
                        </div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <button className="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover">
                        <span className="icon">
                          <span className="feather-icon">
                            <i data-feather="lock"></i>
                          </span>
                        </span>
                      </button>
                      <button className="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover">
                        <span className="icon">
                          <span className="feather-icon">
                            <i data-feather="more-vertical"></i>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <div>
                    <div className="media d-flex align-items-center">
                      <div className="media-head me-2">
                        <div className="avatar avatar-xs avatar-pink avatar-rounded">
                          <span className="initial-wrap">H</span>
                        </div>
                      </div>
                      <div className="media-body">
                        <div>
                          <div className="name">Hencework</div>
                        </div>
                      </div>
                    </div>
                    <div className="ms-auto">
                      <button className="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover">
                        <span className="icon">
                          <span className="feather-icon">
                            <i data-feather="globe"></i>
                          </span>
                        </span>
                      </button>
                      <button className="btn btn-sm btn-icon btn-rounded btn-flush-light flush-soft-hover">
                        <span className="icon">
                          <span className="feather-icon">
                            <i data-feather="more-vertical"></i>
                          </span>
                        </span>
                      </button>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="taskboardapp-fixednav">
          <div className="hk-toolbar">
            <ul className="nav nav-light">
              <li className="nav-item nav-link">
                <a
                  className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Settings"
                  href="#"
                >
                  <span className="icon">
                    <span className="feather-icon">
                      <i data-feather="settings"></i>
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item nav-link">
                <a
                  href="#"
                  className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Archive"
                >
                  <span className="icon">
                    <span className="feather-icon">
                      <i data-feather="archive"></i>
                    </span>
                  </span>
                </a>
              </li>
              <li className="nav-item nav-link">
                <a
                  href="#"
                  className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover"
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                  title=""
                  data-bs-original-title="Help"
                >
                  <span className="icon">
                    <span className="feather-icon">
                      <i data-feather="book"></i>
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;
