import React from 'react';
import '../../../assets/css/style.css'; // Assuming you have the CSS file in the same directory

const Login = () => {
  return (
    <div className="hk-wrapper hk-pg-auth" data-footer="simple">
      {/* Main Content */}
      <div className="hk-pg-wrapper py-0">
        <div className="hk-pg-body py-0">
          {/* Container */}
          <div className="container-fluid">
            {/* Row */}
            <div className="row auth-split">
              <div className="col-xl-5 col-lg-6 col-md-7 position-relative mx-auto">
                <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                  <div className="text-center mb-7">
                    <a className="navbar-brand me-0" href="index.html">
                      <img className="brand-img d-inline-block" src="/img/logo-light.png" alt="brand" />
                    </a>
                  </div>
                  <form className="w-100">
                    <div className="row">
                      <div className="col-xl-7 col-sm-10 mx-auto">
                        <div className="text-center mb-4">
                          <h4>Sign in to your account</h4>
                          <p>There are many variations of passages of Lorem Ipsum available, in some form, by injected humour</p>
                        </div>
                        <div className="row gx-3">
                          <div className="form-group col-lg-12">
                            <div className="form-label-group">
                              <label>User Name</label>
                            </div>
                            <input className="form-control" placeholder="Enter username or email ID" type="text" />
                          </div>
                          <div className="form-group col-lg-12">
                            <div className="form-label-group">
                              <label>Password</label>
                              <a href="#" className="fs-7 fw-medium">Forgot Password?</a>
                            </div>
                            <div className="input-group password-check">
                              <span className="input-affix-wrapper affix-wth-text">
                                <input className="form-control" placeholder="Enter your password" type="password" />
                                <a href="#" className="input-suffix text-primary text-uppercase fs-8 fw-medium">
                                  <span>Show</span>
                                  <span className="d-none">Hide</span>
                                </a>
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex justify-content-center">
                          <div className="form-check form-check-sm mb-3">
                            <input type="checkbox" className="form-check-input" id="logged_in" defaultChecked />
                            <label className="form-check-label text-muted fs-7" htmlFor="logged_in">Keep me logged in</label>
                          </div>
                        </div>
                        <a href="#" className="btn btn-primary btn-uppercase btn-block">Login</a>
                        <p className="p-xs mt-2 text-center">New to Jampack? <a href="#"><u>Create new account</u></a></p>
                        <a href="#" className="d-block extr-link text-center mt-4">
                          <span className="feather-icon"><i data-feather="external-link"></i></span>
                          <u className="text-muted">Send feedback to our help forum</u>
                        </a>
                      </div>
                    </div>
                  </form>
                </div>
                {/* Page Footer */}
                <div className="hk-footer border-0">
                  <footer className="container-xxl footer">
                    <div className="row">
                      <div className="col-xl-8 text-center">
                        <p className="footer-text pb-0">
                          <span className="copy-text">Jampack © 2022 All rights reserved.</span>
                          <a href="#" target="_blank" rel="noopener noreferrer">Privacy Policy</a>
                          <span className="footer-link-sep">|</span>
                          <a href="#" target="_blank" rel="noopener noreferrer">T&C</a>
                          <span className="footer-link-sep">|</span>
                          <a href="#" target="_blank" rel="noopener noreferrer">System Status</a>
                        </p>
                      </div>
                    </div>
                  </footer>
                </div>
                {/* / Page Footer */}
              </div>
              <div className="col-xl-7 col-lg-6 col-md- 5 col-sm-10 d-md-block d-none position-relative bg-primary-light-5">
                <div className="auth-content flex-column text-center py-8">
                  <div className="row">
                    <div className="col-xxl-7 col-xl-8 col-lg-11 mx-auto">
                      <h2 className="mb-4">Meet all new Pro Jampack 2.0</h2>
                      <p>There are many variations of passages of Lorem Ipsum available, passages of Lorem Ipsum available, in some form, by injected.</p>
                      <button className="btn btn-flush-primary btn-uppercase mt-2">Take Tour</button>
                    </div>
                  </div>
                  <img src="/img/macaroni-logged-out.png" className="img-fluid w-sm-50 mt-7" alt="login" />
                </div>
                <p className="p-xs credit-text opacity-55">All illustrations are powered by <a href="https://icons8.com/ouch/"  className="text-light"><u>Icons8</u></a></p>
              </div>
            </div>
            {/* /Row */}
          </div>
          {/* /Container */}
        </div>
        {/* /Page Body */}
      </div>
      {/* /Main Content */}
    </div>
  );
};

export default Login;