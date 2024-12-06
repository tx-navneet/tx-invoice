import { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../../../component/Footer/Footer';
// import imageOne from "../../../assets/img/signup-bg.jpg";
import '../../../assets/css/style.css';
// import { Img } from 'react-image';
// import {}

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="hk-wrapper hk-pg-auth" data-footer="simple">
        <div className="hk-pg-wrapper py-0">
          <div className="hk-pg-body py-0">
            <div className="container-fluid">
              <div className="row auth-split">
                <div className="col-xl-5 col-lg-6 col-md-5 hidden md:block bg-primary-dark-3 bg-opacity-85 relative">
                  {/* <Img
                    src="../../../assets/img/signup-bg.jpg"
                    loader={<p>Loading...</p>}
                    alt="side Image "
                  /> */}

                  <img
                    className="bg-img w-full h-full object-cover"
                    src={'public/img/signup-bg.jpg'}
                    alt="bg-img"
                  />
                  <div className="auth-content py-8">
                    <div className="row">
                      <div className="col-xxl-8 mx-auto">
                        <div className="text-center">
                          <h3 className="text-white mb-2">
                            High quality Bootstrap template for your next web
                            project.
                          </h3>
                          <p className="text-white">
                            Start your <u>14 Days FREE</u> trial.
                          </p>
                        </div>
                        <ul className="list-icon text-white mt-4">
                          <li className="mb-1">
                            <p>
                              <i className="ri-check-fill"></i>
                              <span>
                                There are many variations of passages of Lorem
                                Ipsum available, in some form, by injected
                                humour
                              </span>
                            </p>
                          </li>
                          <li className="mb-1">
                            <p>
                              <i className="ri-check-fill"></i>
                              <span>
                                There are many variations of passages of Lorem
                                Ipsum available, in some form, by injected
                                humour
                              </span>
                            </p>
                          </li>
                        </ul>
                        <div className="row gx-3 mt-7">
                          <div className="col-lg-6">
                            <div className="card card-shadow">
                              <img
                                className="card-img-top"
                                src={'public/img/slide1.jpg'}
                                alt="Card"
                              />
                              <div className="card-body">
                                <h5 className="card-title text-uppercase">
                                  Help Centre
                                </h5>
                                <p className="card-text">
                                  This is a wider card with supporting text.
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-6">
                            <div className="card card-shadow">
                              <img
                                className="card-img-top"
                                src={'public/img/slide2.jpg'}
                                alt="Card"
                              />
                              <div className="card-body">
                                <h5 className="card-title text-uppercase">
                                  Research Centre
                                </h5>
                                <p className="card-text">
                                  This is a wider card with supporting text.
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <p className="p-xs text-white credit-text opacity-55">
                    All illustrations are powered by{' '}
                    <a
                      href="https://icons8.com/ouch/"
                      target="_blank"
                      className="link-white"
                    >
                      <u>OUCH</u>
                    </a>
                  </p>
                </div>
                <div className="col-xl-7 col-lg-6 col-md-7 col-sm-10 relative mx-auto">
                  <div className="auth-content flex-column pt-8 pb-md-8 pb-13">
                    <div className="text-center mb-7">
                      <Link className="navbar-brand me-0" to="/">
                        <img
                          className="brand-img d-inline-block"
                          src={'public/img/logo-light.png'}
                          alt="brand"
                        />
                      </Link>
                    </div>
                    <form className="w-100">
                      <div className="row">
                        <div className="col-xxl-5 col-xl-7 col-lg-10 mx-auto">
                          <h4 className="text-center mb-4">
                            Sign Up to Jampack
                          </h4>
                          <button className="btn btn-outline-dark btn-rounded btn-block mb-3">
                            <span>
                              <span className="icon">
                                <i className="fab fa-google"></i>
                              </span>
                              <span>Sign Up with Gmail</span>
                            </span>
                          </button>
                          <button className="btn btn-social btn-social-facebook btn-rounded btn-block btn-dark">
                            <span>
                              <span className="icon">
                                <i className="fab fa-facebook"></i>
                              </span>
                              <span>Sign Up with Facebook</span>
                            </span>
                          </button>
                          <div className="title-sm title-wth-divider divider-center my-4">
                            <span>Or</span>
                          </div>
                          <div className="row gx-3">
                            <div className="form-group col-lg-6">
                              <label className="form-label">Name</label>
                              <input
                                className="form-control"
                                placeholder="Enter your name"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-lg-6">
                              <label className="form-label">Username</label>
                              <input
                                className="form-control"
                                placeholder="Enter username"
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-lg-12">
                              <label className="form-label">Email</label>
                              <input
                                className="form-control"
                                placeholder="Enter your email id"
                                type="text"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                              />
                            </div>
                            <div className="form-group col-lg-12">
                              <label className="form-label">Password</label>
                              <div className="input-group password-check">
                                <span className="input-affix-wrapper affix-wth-text">
                                  <input
                                    className="form-control"
                                    placeholder="6+ characters"
                                    type="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                  />
                                  <a
                                    href="#"
                                    className="input-suffix text-primary text-uppercase fs-8 fw-medium"
                                  >
                                    <span>Show</span>
                                    <span className="hidden">Hide</span>
                                  </a>
                                </span>
                              </div>
                            </div>
                          </div>

                          <div className="form-check form-check-sm mb-3">
                            <input
                              type="checkbox"
                              className="form-check-input"
                              id="logged_in"
                              defaultChecked
                            />
                            <label
                              className="form-check-label text-muted fs-8"
                              htmlFor="logged_in"
                            >
                              By creating an account you specify that you have
                              read and agree with our{' '}
                              <Link to="/terms">Terms of use</Link> and{' '}
                              <Link to="/privacy">Privacy policy</Link>. We may
                              keep you informed about the latest updates through
                              our default{' '}
                              <Link to="/notifications">
                                notification settings
                              </Link>
                            </label>
                          </div>
                          <Link
                            to="/dashboard"
                            className="btn btn-primary btn-rounded btn-uppercase btn-block"
                          >
                            Create account
                          </Link>
                          <p className="p-xs mt-2 text-center">
                            Already a member ?{' '}
                            <Link to="/login">
                              <u>Sign In</u>
                            </Link>
                          </p>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signup;
