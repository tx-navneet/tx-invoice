import React from 'react';

const ResetPassword = () => {
  return (
    <div className="hk-wrapper hk-pg-auth" data-footer="simple">
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
                      <div className="col-lg-5 col-md-7 col-sm-10 mx-auto">
                        <div className="text-center mb-7">
                          <a className="navbar-brand me-0" href="index.html">
                            <img className="brand-img d-inline-block" src="/img/logo-light.png" alt="brand" />
                          </a>
                        </div>
                        <div className="card card-flush">
                          <div className="card-body text-center">
                            <h4>Reset your Password</h4>
                            <p className="mb-4">No worries we will mail you 6 digit code to your recovery email address to reset your password</p>
                            <div className="row gx-3">
                              <div className="form-group col-lg-12">
                                <div className="form-label-group">
                                  <label htmlFor="userName">Email</label>
                                  <a href="#" className="fs-7 fw-medium">Forgot Username?</a>
                                </div>
                                <input className="form-control" placeholder="Recovery email ID" type="email" />
                              </div>
                            </div>
                            <a href="#" className="btn btn-primary btn-uppercase btn-block">Send Code</a>
                            <p className="p-xs mt-2 text-center">Did not receive code? <a href="#"><u>Send again</u></a></p>
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
        <div className="hk-footer border-0">
          <footer className="container-xxl footer">
            <div className="row">
              <div className="col-xl-8 text-center">
                <p className="footer-text pb-0">
                  <span className="copy-text">Jampack © 2022 All rights reserved.</span>
                  <a href="#" target="_blank">Privacy Policy</a>
                  <span className="footer-link-sep">|</span>
                  <a href="#" target="_blank">T&C</a>
                  <span className="footer-link-sep">|</span>
                  <a href="#" target="_blank">System Status</a>
                </p>
              </div>
            </div>
          </footer>
        </div>
        {/* / Page Footer */}
      </div>
      {/* /Main Content */}
    </div>
  );
};

export default ResetPassword;