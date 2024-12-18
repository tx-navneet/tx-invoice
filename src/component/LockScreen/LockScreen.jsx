import React from 'react';
import "../../assets/css/style.css"

const LockScreen = () => {
  return (
    <div className="hk-wrapper hk-pg-auth bg-primary-dark-3" data-footer="simple">
      {/* Main Content */}
      <div className="hk-pg-wrapper pt-0 pb-xl-0 pb-5">
        <div className="hk-pg-body pt-0 pb-xl-0">
          {/* Container */}
          <div className="container-xxl">
            {/* Row */}
            <div className="row">
              <div className="col-sm-10 position-relative mx-auto">
                <div className="auth-content py-8">
                  <form className="w-100">
                    <div className="row">
                      <div className="col-lg-4 col-md-6 mx-auto">
                        <div className="card card-flush bg-transparent">
                          <div className="card-body text-center">
                            <div className="avatar avatar-xl avatar-rounded position-relative mb-3">
                              <img src="/img/avatar12.jpg" alt="user" className="avatar-img" />
                              <div className="badge-icon badge-icon-xxs text-primary position-bottom-end-overflow-1">
                                <div className="badge-icon-wrap">
                                  <i className="ri-lock-fill"></i>
                                </div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 127 127">
                                  <g data-name="Ellipse 302" transform="translate(8 8)" strokeWidth="3">
                                    <circle cx="55.5" cy="55.5" r="55.5" stroke="currentColor"></circle>
                                    <circle cx="55.5" cy="55.5" r="59.5" fill="currentColor"></circle>
                                  </g>
                                </svg>
                              </div>
                            </div>
                            <h4 className="text-white">Jim Carry</h4>
                            <p className="p-sm mb-4 text-white opacity-55">admistrator@jampack.com</p>
                            <div className="row gx-3">
                              <div className="form-group col-lg-12">
                                <input className="form-control" placeholder="Enter Password" type="password" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            {/* /Row */}
          </div>
          {/* /Container */}
        </div>
        {/* /Page Body */}

        {/* Page Footer */}
        {/* <div className="hk-footer border-0 bg-transparent">
          <footer className="container-xxl footer">
            <div className="row">
              <div className="col-xl-8 text-center">
                <p className="footer-text pb-0">
                  <span className="copy-text text-white opacity-55">Jampack © 2022 All rights reserved.</span>
                  <a href="#" className="text-white opacity-55" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                  <span className="footer-link-sep text-white opacity-55">|</span>
                  <a href="#" className="text-white opacity-55" target="_blank" rel="noopener noreferrer">T&C</a>
                  <span className="footer-link-sep text-white opacity-55">|</span>
                  <a href="#" className="text-white opacity-55" target="_blank" rel="noopener noreferrer">System Status</a>
                </p>
              </div>
            </div>
          </footer>
        </div> */}
        {/* / Page Footer */}
      </div>
      {/* /Main Content */}
    </div>
  );
};

export default LockScreen;