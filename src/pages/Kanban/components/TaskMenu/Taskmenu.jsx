import React from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

const Taskmenu = () => {
  return (
    
    <div className="taskboard-info ">
      <SimpleBar className="nicescroll-bar">
        <button type="button" className="info-close btn-close mb-10">
          <span aria-hidden="true">&times;</span>
        </button>

        {/* Search Form */}
        <form role="search" className="mt-xl-0 mt-5">
          <input
            type="text"
            className="form-control"
            placeholder="Search in conversation"
          />
        </form>

        {/* Members Section */}
        <div className="collapse-simple mt-4">
          <div className="card">
            <div className="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#members"
                aria-expanded="true"
              >
                Members
              </a>
            </div>
            <div id="members" className="collapse show">
              <div className="card-body">
                <ul className="hk-list">
                  <li>
                    <div
                      className="avatar avatar-sm avatar-primary avatar-rounded"
                      data-bs-toggle="tooltip"
                      title="Hencework"
                    >
                      <span className="initial-wrap">H</span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="avatar avatar-sm avatar-rounded"
                      data-bs-toggle="tooltip"
                      title="Morgan"
                    >
                      <img
                        src="public/img/avatar2.jpg"
                        alt="user"
                        className="avatar-img"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className="avatar avatar-sm avatar-rounded"
                      data-bs-toggle="tooltip"
                      title="Charlie"
                    >
                      <img
                        src="public/img/avatar13.jpg"
                        alt="user"
                        className="avatar-img"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className="avatar avatar-sm avatar-rounded position-relative"
                      data-bs-toggle="tooltip"
                      title="Tom"
                    >
                      <img
                        src="public/img/avatar7.jpg"
                        alt="user"
                        className="avatar-img"
                      />
                      <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"></span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="avatar avatar-sm avatar-rounded"
                      data-bs-toggle="tooltip"
                      title="Katherine"
                    >
                      <img
                        src="public/img/avatar9.jpg"
                        alt="user"
                        className="avatar-img"
                      />
                    </div>
                  </li>
                  <li>
                    <div
                      className="avatar avatar-sm avatar-rounded position-relative"
                      data-bs-toggle="tooltip"
                      title="Danial"
                    >
                      <img
                        src="public/img/avatar10.jpg"
                        alt="user"
                        className="avatar-img"
                      />
                      <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"></span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="avatar avatar-sm avatar-rounded position-relative"
                      data-bs-toggle="tooltip"
                      title="Boss"
                    >
                      <img
                        src="public/img/avatar15.jpg"
                        alt="user"
                        className="avatar-img"
                      />
                      <span className="badge badge-success badge-indicator badge-indicator-lg position-bottom-end-overflow-1"></span>
                    </div>
                  </li>
                  <li>
                    <div
                      className="avatar avatar-sm avatar-soft-danger avatar-rounded"
                      data-bs-toggle="tooltip"
                      title="Winston"
                    >
                      <span className="initial-wrap">W</span>
                    </div>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="avatar avatar-sm avatar-icon avatar-soft-light avatar-rounded"
                      data-bs-toggle="modal"
                      data-bs-target="#invite_people"
                    >
                      <span
                        className="initial-wrap"
                        data-bs-toggle="tooltip"
                        title="Add New"
                      >
                        <span className="feather-icon">
                          <i data-feather="plus"></i>
                        </span>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Latest Activity Section */}
          <div className="card">
            <div className="card-header">
              <a
                role="button"
                data-bs-toggle="collapse"
                href="#activity"
                aria-expanded="true"
              >
                Latest Activity
              </a>
            </div>
            <div id="activity" className="collapse show">
              <div className="card-body">
                <ul className="activity-list list-group list-group-flush">
                  <li className="list-group-item">
                    <div className="media">
                      <div className="media-head">
                        <div className="avatar avatar-sm avatar-primary avatar-rounded">
                          <span className="initial-wrap">H</span>
                        </div>
                      </div>
                      <div className="media-body">
                        <p>
                          <span className="text-dark">Hencework</span> on Documentation link is working now -
                          <a href="#" className="link-url">
                            <u>https://hencework.com/theme/jampa</u>
                          </a>
                        </p>
                        <div className="last-activity-time">Oct 15, 2021, 12:34 PM</div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="media">
                      <div className="media-head">
                        <div className="avatar avatar-sm avatar-rounded">
                          <img src="public/img/avatar2.jpg" alt="user" className="avatar-img" />
                        </div>
                      </div>
                      <div className="media-body">
                        <p>
                          <span className="text-dark">Morgan Fregman</span> completed react conversion of
                          <a href="#" className="link-default">
                            <u>components</u>
                          </a>
                        </p>
                        <div className="last-activity-time">Sep 16, 2021, 4:54 PM</div>
                      </div>
                    </div>
                  </li>
                  {/* Add more activities here */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </SimpleBar>
    </div>
  );
};

export default Taskmenu;
