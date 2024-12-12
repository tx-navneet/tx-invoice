import React, { useContext } from 'react';
import TaskListActions from '../../components/TaskListEditMenu/TaskListMenu';
import CardListActions from '../../components/TaskListEditMenu/CardListActions';
import { Responsivecontext } from '../../../../context/HeaderContext';
import Popup from '../../components/Models/AddmoreCardModel';

const MainContent = () => {
  const { AddmoreCards, handleAddCards } = useContext(Responsivecontext);
  return (
    <>
      <div
        id="kb_scroll"
        className="tasklist-scroll position-relative ps ps--active-x"
      >
        <div id="tasklist_wrap" className="tasklist-wrap">
          <div className="card card-simple card-border tasklist">
            <div className="card-header card-header-action">
              <div className="tasklist-handle">
                <h6 className="text-uppercase fw-bold d-flex align-items-center mb-0">
                  <span className="tasklist-name">All Modules</span>
                  <span className="badge badge-pill badge-soft-violet ms-2">
                    19
                  </span>
                </h6>
                <TaskListActions />
              </div>
              <button
                className="btn btn-white btn-block btn-add-newtask"
                data-bs-toggle="modal"
                data-bs-target="#add_new_card"
              >
                <span>
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
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div data-simplebar="init" className="card-body">
              <div className="simplebar-wrapper" style={{ margin: '-20px' }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: '0px', bottom: '0px' }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: 'auto', overflow: 'hidden scroll' }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: '20px' }}
                      >
                        <div id="i1" className="tasklist-cards-wrap">
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Application Pages</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Dean"
                                >
                                  <img
                                    src="/img/avatar13.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                                <div
                                  className="avatar avatar-xs avatar-soft-danger avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Tom"
                                >
                                  <span className="initial-wrap">B</span>
                                </div>
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Danial"
                                >
                                  <img
                                    src="/img/avatar2.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
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
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  22 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Authentication</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>12/18</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  22 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Menu Modules</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Content</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Dean"
                                >
                                  <img
                                    src="/img/avatar13.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Winston"
                                >
                                  <img
                                    src="/img/avatar10.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>0/3</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  24 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Utilities</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Forms</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>18/18</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  28 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Tables</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>1/9</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>5</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  30 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Charts</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Maps</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Final Package</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Danial"
                                >
                                  <img
                                    src="/img/avatar2.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>40/127</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  15 Oct, 20
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: '348px', height: '1176px' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: 'hidden' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: '0px', display: 'none' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: 'visible' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: '25px',
                    transform: 'translate3d(0px, 0px, 0px)',
                    display: 'block',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="card card-simple card-border tasklist">
            <div className="card-header card-header-action">
              <div className="tasklist-handle">
                <h6 className="text-uppercase fw-bold d-flex align-items-center mb-0">
                  <span className="tasklist-name">In progress</span>
                  <span className="badge badge-pill badge-soft-violet ms-2">
                    6
                  </span>
                </h6>
                <TaskListActions />
              </div>
              <button
                className="btn btn-white btn-block btn-add-newtask"
                data-bs-toggle="modal"
                data-bs-target="#add_new_card"
              >
                <span>
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
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div data-simplebar="init" className="card-body">
              <div className="simplebar-wrapper" style={{ margin: '-20px' }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: '0px', bottom: '0px' }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: 'auto', overflow: 'hidden scroll' }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: '20px' }}
                      >
                        <div id="i2" className="tasklist-cards-wrap">
                          <div className="card card-border card-wth-progress card-simple tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-warning w-45"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Profile Pages</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Katharine"
                                >
                                  <img
                                    src="/img/avatar8.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
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
                                <span className="task-deadline">
                                  18 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-wth-progress card-simple tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-primary w-85"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Advance Tables</h6>
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
                                <CardListActions />
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
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  22 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-wth-progress card-simple tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-primary w-60"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">CSS Compilation</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-soft-success avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Huma"
                                >
                                  <span className="initial-wrap">
                                    <span>A</span>
                                  </span>
                                </div>
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Danial"
                                >
                                  <img
                                    src="/img/avatar2.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                              </div>
                              <div className="mt-2">
                                <span className="badge badge-soft-primary my-1">
                                  Priority
                                </span>
                                <span className="badge badge-soft-danger my-1">
                                  Angular
                                </span>
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
                                <span className="task-deadline">
                                  18 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-wth-progress card-simple tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-primary w-20"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Lists</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>18/18</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  28 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-wth-progress card-simple tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-danger w-10"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Dashboards</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>18/18</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  28 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-wth-progress card-simple tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-primary w-70"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Detail Pages</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Danial"
                                >
                                  <img
                                    src="/img/avatar2.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>18/18</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  28 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: '348px', height: '977px' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: 'hidden' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: '0px', display: 'none' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: 'hidden' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: '25px',
                    transform: 'translate3d(0px, 0px, 0px)',
                    display: 'block',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="card card-simple card-border tasklist">
            <div className="card-header card-header-action">
              <div className="tasklist-handle">
                <h6 className="text-uppercase fw-bold d-flex align-items-center mb-0">
                  <span className="tasklist-name">Completed</span>
                  <span className="badge badge-pill badge-soft-violet ms-2">
                    4
                  </span>
                </h6>
                <TaskListActions />
              </div>
              <button
                className="btn btn-white btn-block btn-add-newtask"
                data-bs-toggle="modal"
                data-bs-target="#add_new_card"
              >
                <span>
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
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div data-simplebar="init" className="card-body">
              <div className="simplebar-wrapper" style={{ margin: '-20px' }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: '0px', bottom: '0px' }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: 'auto', overflow: 'hidden scroll' }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: '20px' }}
                      >
                        <div id="i3" className="tasklist-cards-wrap">
                          <div className="card card-border card-simple card-wth-progress tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-success w-100"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Forms</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <p>
                                Form validation works only online. Check by
                                activating local server.
                              </p>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>18/18</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  28 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple card-wth-progress tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-success w-100"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Tables</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>1/9</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>5</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  30 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple card-wth-progress tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-success w-100"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>

                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Application Pages</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Danial"
                                >
                                  <img
                                    src="/img/avatar9.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Dean"
                                >
                                  <img
                                    src="/img/avatar3.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Huma"
                                >
                                  <img
                                    src="/img/avatar7.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                                <div
                                  className="avatar avatar-soft-info avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Huma"
                                >
                                  <span className="initial-wrap">
                                    <span>C</span>
                                  </span>
                                </div>
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Charlie"
                                >
                                  <img
                                    src="/img/avatar13.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
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
                                <span className="task-deadline">
                                  18 Sep, 22
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple card-wth-progress tasklist-card">
                            <div className="progress progress-bar-xs">
                              <div
                                className="progress-bar bg-success w-100"
                                role="progressbar"
                                aria-valuenow="25"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Authentication</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>1/9</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>5</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  30 Sep, 20
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: '348px', height: '642px' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: 'hidden' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: '0px', display: 'none' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: 'visible' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: '25px',
                    transform: 'translate3d(0px, 0px, 0px)',
                    display: 'block',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="card card-simple card-border tasklist">
            <div className="card-header card-header-action">
              <div className="tasklist-handle">
                <h6 className="text-uppercase fw-bold d-flex align-items-center mb-0">
                  <span className="tasklist-name">Pending</span>
                  <span className="badge badge-pill badge-soft-violet ms-2">
                    7
                  </span>
                </h6>
                <TaskListActions />
              </div>
              <button
                className="btn btn-white btn-block btn-add-newtask"
                data-bs-toggle="modal"
                data-bs-target="#add_new_card"
              >
                <span>
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
                        className="feather feather-plus"
                      >
                        <line x1="12" y1="5" x2="12" y2="19"></line>
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                      </svg>
                    </span>
                  </span>
                </span>
              </button>
            </div>
            <div data-simplebar="init" className="card-body">
              <div className="simplebar-wrapper" style={{ margin: '-20px' }}>
                <div className="simplebar-height-auto-observer-wrapper">
                  <div className="simplebar-height-auto-observer"></div>
                </div>
                <div className="simplebar-mask">
                  <div
                    className="simplebar-offset"
                    style={{ right: '0px', bottom: '0px' }}
                  >
                    <div
                      className="simplebar-content-wrapper"
                      style={{ height: 'auto', overflow: 'hidden scroll' }}
                    >
                      <div
                        className="simplebar-content"
                        style={{ padding: '20px' }}
                      >
                        <div id="i4" className="tasklist-cards-wrap">
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Authentication</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div>
                                <span className="badge badge-soft-light my-1">
                                  Unassigned
                                </span>
                                <span className="badge badge-soft-danger my-1">
                                  Collaborator
                                </span>
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>12/18</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  22 Sep, 20
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Menu Modules</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Content</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="avatar-group avatar-group-overlapped">
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Dean"
                                >
                                  <img
                                    src="/img/avatar13.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                                <div
                                  className="avatar avatar-rounded"
                                  data-bs-toggle="tooltip"
                                  data-bs-placement="top"
                                  title=""
                                  data-bs-original-title="Winston"
                                >
                                  <img
                                    src="/img/avatar10.jpg"
                                    alt="user"
                                    className="avatar-img"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>0/3</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>24</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  24 Sep, 20
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Utilities</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Forms</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>18/18</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  28 Sep, 20
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Tables</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                            <div className="card-footer text-muted justify-content-between">
                              <div>
                                <span className="task-counter">
                                  <span>
                                    <i className="ri-checkbox-line"></i>
                                  </span>
                                  <span>1/9</span>
                                </span>
                                <span className="task-discuss">
                                  <span>
                                    <i className="ri-message-3-line"></i>
                                  </span>
                                  <span>5</span>
                                </span>
                              </div>
                              <div>
                                <span className="task-deadline">
                                  30 Sep, 20
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Charts</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                          <div className="card card-border card-simple tasklist-card">
                            <div className="card-header card-header-action">
                              <h6 className="fw-bold">Maps</h6>
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
                                <CardListActions />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  className="simplebar-placeholder"
                  style={{ width: '348px', height: '881px' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-horizontal"
                style={{ visibility: 'hidden' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{ width: '0px', display: 'none' }}
                ></div>
              </div>
              <div
                className="simplebar-track simplebar-vertical"
                style={{ visibility: 'visible' }}
              >
                <div
                  className="simplebar-scrollbar"
                  style={{
                    height: '25px',
                    transform: 'translate3d(0px, 0px, 0px)',
                    display: 'block',
                  }}
                ></div>
              </div>
            </div>
          </div>
          <div className="card card-simple card-border tasklist add-new-task">
            <button
              className="btn btn-soft-primary btn-add-newlist flex-shrink-0"
              onClick={handleAddCards}
            >
              Add New List
            </button>
          </div>
        </div>
        <div
          className="ps__rail-x"
          style={{ width: '1650px', left: '0px', bottom: '0px' }}
        >
          <div
            className="ps__thumb-x"
            tabIndex="0"
            style={{ left: '0px', width: '1431px' }}
          ></div>
        </div>
        <div className="ps__rail-y" style={{ top: '0px', right: '0px' }}>
          <div
            className="ps__thumb-y"
            tabIndex="0"
            style={{ top: '0px', height: '0px' }}
          ></div>
        </div>
      </div>
      {AddmoreCards && <Popup />}
    </>
  );
};

export default MainContent;
