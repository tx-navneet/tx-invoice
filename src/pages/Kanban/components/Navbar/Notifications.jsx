import React from "react";

const NotificationsDropdown = () => {
  

  return (
    <div className="dropdown dropdown-notifications ">
    <a
      href="#"
      className="btn btn-icon btn-rounded btn-flush-dark flush-soft-hover dropdown-toggle no-caret"
      data-bs-toggle="dropdown"
      data-dropdown-animation
      role="button"
      aria-haspopup="true"
      aria-expanded="false"
    >
      <span className="icon">
        <span className="position-relative">
          <span className="feather-icon">
            <i data-feather="bell"></i>
          </span>
          <span className="badge badge-success badge-indicator position-top-end-overflow-1"></span>
        </span>
      </span>
    </a>
    <div className="dropdown-menu dropdown-menu-end p-0">
      <h6 className="dropdown-header px-4 fs-6">
        Notifications
        <a
          href="#"
          className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
        >
          <span className="icon">
            <span className="feather-icon">
              <i data-feather="settings"></i>
            </span>
          </span>
        </a>
      </h6>
      <div data-simplebar className="dropdown-body p-2">
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="media-head">
              <div className="avatar avatar-rounded avatar-sm">
                <img
                  src="public/img/avatar2.jpg"
                  alt="user"
                  className="avatar-img"
                />
              </div>
            </div>
            <div className="media-body">
              <div>
                <div className="notifications-text">
                  Morgan Freeman accepted your invitation to join
                  the team
                </div>
                <div className="notifications-info">
                  <span className="badge badge-soft-success">
                    Collaboration
                  </span>
                  <div className="notifications-time">
                    Today, 10:14 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="media-head">
              <div className="avatar avatar-icon avatar-sm avatar-success avatar-rounded">
                <span className="initial-wrap">
                  <span className="feather-icon">
                    <i data-feather="inbox"></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="media-body">
              <div>
                <div className="notifications-text">
                  New message received from Alan Rickman
                </div>
                <div className="notifications-info">
                  <div className="notifications-time">
                    Today, 7:51 AM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="media-head">
              <div className="avatar avatar-icon avatar-sm avatar-pink avatar-rounded">
                <span className="initial-wrap">
                  <span className="feather-icon">
                    <i data-feather="clock"></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="media-body">
              <div>
                <div className="notifications-text">
                  You have a follow up with Jampack Head on
                  Friday, Dec 19 at 9:30 am
                </div>
                <div className="notifications-info">
                  <div className="notifications-time">
                    Yesterday, 9:25 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="media-head">
              <div className="avatar avatar-sm avatar-rounded">
                <img
                  src="public/img/avatar3.jpg"
                  alt="user"
                  className="avatar-img"
                />
              </div>
            </div>
            <div className="media-body">
              <div>
                <div className="notifications-text">
                  Application of Sarah Williams is waiting for
                  your approval
                </div>
                <div className="notifications-info">
                  <div className="notifications-time">
                    Today 10:14 PM
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="media-head">
              <div className="avatar avatar-sm avatar-rounded">
                <img
                  src="public/img/avatar10.jpg"
                  alt="user"
                  className="avatar-img"
                />
              </div>
            </div>
            <div className="media-body">
              <div>
                <div className="notifications-text">
                  Winston Churchil shared a document with you
                </div>
                <div className="notifications-info">
                  <span className="badge badge-soft-violet">
                    File Manager
                  </span>
                  <div className="notifications-time">
                    2 Oct, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
        <a href="#" className="dropdown-item">
          <div className="media">
            <div className="media-head">
              <div className="avatar avatar-icon avatar-sm avatar-danger avatar-rounded">
                <span className="initial-wrap">
                  <span className="feather-icon">
                    <i data-feather="calendar"></i>
                  </span>
                </span>
              </div>
            </div>
            <div className="media-body">
              <div>
                <div className="notifications-text">
                  Last 2 days left for the project to be completed
                </div>
                <div className="notifications-info">
                  <span className="badge badge-soft-orange">
                    Updates
                  </span>
                  <div className="notifications-time">
                    14 Sep, 2021
                  </div>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
      <div className="dropdown-footer">
        <a href="#">
          <u>View all notifications</u>
        </a>
      </div>
    </div>
  </div>
  );
};

export default NotificationsDropdown;
