import React from 'react';
import Header from '../../../../component/Navbar/Header';
import Navbar from '../../../../component/Navbar/Navbar';
import { Link, useNavigate } from 'react-router';
const InvoicePDF = () => {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <Header />
      <div
        className="hk-wrapper"
        data-layout="horizontal"
        data-layout-style="default"
        data-menu="light"
        data-footer="simple"
      >
        <div className="hk-pg-body py-0">
          <div className="invoiceapp-wrap">
            <div className="invoiceapp-content">
              <div className="invoiceapp-detail-wrap">
                <header className="invoice-header">
                  <div className="d-flex align-items-center">
                    <Link
                      className="btn btn-icon btn-flush-dark btn-rounded flush-soft-hover"
                      to="create-invoice"
                    >
                      <span className="icon">
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
                          className="feather feather-arrow-left"
                        >
                          <line x1="19" y1="12" x2="5" y2="12"></line>
                          <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                      </span>
                    </Link>
                    <div className="v-separator d-sm-inline-block d-none"></div>
                    <a
                      className="invoiceapp-title link-dark ms-1 ms-sm-0"
                      href="invoice-preview.php"
                    >
                      <h1>Template Preview</h1>
                    </a>
                  </div>
                  <div className="invoice-options-wrap">
                    <div
                      onClick={() => navigate('craete-invoice')}
                      className="btn btn-primary flex-shrink-0 d-md-inline-block d-none"
                    >
                      Edit
                    </div>
                    <div className="v-separator d-md-inline-block d-none"></div>
                    <a
                      href="create-invoice.php"
                      className="btn btn-primary flex-shrink-0 d-md-inline-block d-none"
                    >
                      Print
                    </a>
                    <div className="v-separator d-md-inline-block d-none"></div>
                    <a
                      href="create-invoice.php"
                      className="btn btn-primary flex-shrink-0 d-md-inline-block d-none"
                    >
                      Send
                    </a>
                  </div>
                </header>
                <div className="invoice-body">
                  <div data-simplebar className="nicescroll-bar">
                    <div className="container">
                      <div className="template-invoice-wrap mt-xxl-5 p-md-5 ">
                        <h1 className="text-center mb-0">Invoice</h1>
                        <div className="row mt-4">
                          <div className="col-md-4 order-md-0 order-1">
                            <div className="address-wrap">
                              <h6>Hencework</h6>
                              <p>4747, Pearl Street</p>
                              <p>Rainy day Drive</p>
                              <p>Washington DC 42341</p>
                              <p>jampack_01@hencework.com</p>
                            </div>
                          </div>
                          <div className="col-md-5 offset-md-3 mb-4 mb-md-0">
                            <div className="d-flex justify-content-md-end">
                              <div className="text-md-end me-3">
                                <div className="mb-1">Invoice No*</div>
                                <div className="mb-1">Invoice Date*</div>
                                <div className="mb-1">Due Date*</div>
                                <div>Customer No</div>
                              </div>
                              <div className="text-dark">
                                <div className="mb-1">0001</div>
                                <div className="mb-1">24/08/2020</div>
                                <div className="mb-1">Due on receipt</div>
                                <div>321456</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="separator separator-light"></div>
                        <div className="row">
                          <div className="col-md-3">
                            <h6 className="text-uppercase fs-7 mb-2">
                              Billed To
                            </h6>
                            <div className="Billto-wrap">
                              <h6>Supernova consultant</h6>
                              <p>4747, Pearl Street</p>
                              <p>Rainy day Drive</p>
                              <p>Washington DC 42341</p>
                              <p>jampack_01@hencework.com</p>
                            </div>
                          </div>
                        </div>
                        <div className="table-wrap mt-6">
                          <div className="table-responsive">
                            <table className="table table-bordered">
                              <thead className="thead-primary">
                                <tr>
                                  <th>Item</th>
                                  <th className="text-end">Quantity</th>
                                  <th className="text-end">Price</th>
                                  <th className="text-end">Discount</th>
                                  <th className="text-end">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td className="w-70">
                                    <h6>Redesiging of agencyclick.com</h6>
                                    <p>
                                      This is my project description. if the
                                      line do not filt like the sentence is to
                                      big the area will start getting bigger
                                    </p>
                                  </td>
                                  <td className="text-end text-dark">8</td>
                                  <td className="w-15 text-end text-dark">
                                    60.00
                                  </td>
                                  <td className="text-end text-dark">5%</td>
                                  <td className="w-20 text-end text-dark">
                                    $420.5
                                  </td>
                                </tr>
                                <tr>
                                  <td className="w-70">
                                    <h6>Re-branding</h6>
                                  </td>
                                  <td className="text-end text-dark">1</td>
                                  <td className="w-15 text-end text-dark">
                                    150.00
                                  </td>
                                  <td className="text-end text-dark">0%</td>
                                  <td className="w-20 text-end text-dark">
                                    $140.5
                                  </td>
                                </tr>
                                <tr>
                                  <td className="w-70">
                                    <h6>Social media marketing</h6>
                                  </td>
                                  <td className="text-end text-dark">20</td>
                                  <td className="w-15 text-end text-dark">
                                    30.00
                                  </td>
                                  <td className="text-end text-dark">5%</td>
                                  <td className="w-20 text-end text-dark">
                                    $540.5
                                  </td>
                                </tr>
                                <tr>
                                  <td
                                    colSpan="2"
                                    rowSpan="4"
                                    className="border-0"
                                  ></td>
                                  <td colSpan="2">Subtotal</td>
                                  <td className="text-end text-dark">
                                    $1101.0
                                  </td>
                                </tr>
                                <tr>
                                  <td colSpan="2">Item Discount</td>
                                  <td className="text-end text-dark">$10.0</td>
                                </tr>
                                <tr>
                                  <td colSpan="2">Extra Discount</td>
                                  <td className="text-end text-dark">$0</td>
                                </tr>
                                <tr className="border-0">
                                  <td colSpan="2" className="text-dark border">
                                    Total
                                  </td>
                                  <td className="text-end text-dark border">
                                    $1101.0
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-5">
                            <h6>Note to client</h6>
                            <p>
                              thank you for choosing Hencework for design
                              services. If you need more assistance in future
                              here is your discount coupon for future jobs. Just
                              call us and mention the coupon code:10-springhnc
                            </p>
                          </div>
                          <div className="col-lg-7 text-lg-end mt-lg-0 mt-3">
                            <h5 className="mt-lg-7">Katherine Zeta Jones</h5>
                            <p>Co-founder, Hencework</p>
                          </div>
                        </div>
                        <div className="separator separator-light mt-7"></div>
                        <div className="row">
                          <div className="col-md-12">
                            <h6>Terms & Conditions</h6>
                            <ol className="ps-3">
                              <li>
                                Please pay within 15 days from the date of
                                invoice, overdue interest @ 14% will be charged
                                on delayed payments.
                              </li>
                              <li>
                                Please quote invoice number when remitting
                                funds.
                              </li>
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvoicePDF;
