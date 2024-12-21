import React, { useState } from 'react';
import Header from '../../../../component/Navbar/Header';
import Navbar from '../../../../component/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import jsPDF from 'jspdf';
import SimpleBar from 'simplebar-react';
import html2canvas from 'html2canvas';

const InvoicePDF = () => {
  const navigate = useNavigate();

  const [invoiceData] = useState({
    invoiceNo: '0001',
    invoiceDate: '24/08/2020',
    dueDate: 'Due on receipt',
    customerNo: '321456',
    billedTo: {
      name: 'Supernova consultant',
      address: '4747, Pearl Street, Rainy day Drive, Washington DC 42341',
      email: 'jampack_01@hencework.com',
    },
    items: [
      {
        description: 'Redesigning of agencyclick.com',
        quantity: 8,
        price: 60.0,
        discount: 5,
        amount: 420.5,
      },
      {
        description: 'Re-branding',
        quantity: 1,
        price: 150.0,
        discount: 0,
        amount: 140.5,
      },
      {
        description: 'Social media marketing',
        quantity: 20,
        price: 30.0,
        discount: 5,
        amount: 540.5,
      },
    ],
    subtotal: 1101.0,
    itemDiscount: 10.0,
    extraDiscount: 0.0,
    total: 1101.0,
    note: 'Thank you for choosing Hencework for design services. If you need more assistance in future, here is your discount coupon for future jobs. Just call us and mention the coupon code: 10-springhnc.',
    terms: [
      'Please pay within 15 days from the date of invoice, overdue interest @ 14% will be charged on delayed payments.',
      'Please quote invoice number when remitting funds.',
    ],
  });

  const savePdf = () => {
    const doc = new jsPDF('p', 'mm', 'a4');
    const element = document.getElementById('invoice-content');

    // Use html2canvas to capture the content with optimized settings
    html2canvas(element, {
      scale: 1.6, // Reduce scale for smaller file size
      useCORS: true, // Handle CORS issues with images
    }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png', 0.5); // Reduce image quality
      const imgWidth = 210; // A4 page width in mm
      const pageHeight = 297; // A4 page height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      // Add the image to the PDF without borders for the table
      doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      // If the content is larger than one page, add more pages
      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // Save the generated PDF
      doc.save('invoice.pdf');
    });
  };

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
                      onClick={() => navigate('create-invoice')}
                      className="btn btn-primary flex-shrink-0 d-md-inline-block d-none"
                    >
                      Edit
                    </div>
                    <div className="v-separator d-md-inline-block d-none"></div>

                    {/* Save as PDF button */}
                    <button
                      onClick={savePdf}
                      className="btn btn-primary flex-shrink-0 d-md-inline-block d-none"
                    >
                      Save as PDF
                    </button>
                  </div>
                </header>
                <div className="">
                  <SimpleBar style={{ maxHeight: '80vh', overflowY: 'auto' }} >
                    <div className="container">
                      <div
                        id="invoice-content"
                        className="template-invoice-wrap mt-xxl-5 p-md-5 "
                      >
                        <h1 className="text-center mb-0">Invoice</h1>
                        <div className="row mt-4">
                          <div className="col-md-4 order-md-0 order-1">
                            <div className="address-wrap">
                              <h6>{invoiceData.billedTo.name}</h6>
                              <p>{invoiceData.billedTo.address}</p>
                              <p>{invoiceData.billedTo.email}</p>
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
                                <div className="mb-1">{invoiceData.invoiceNo}</div>
                                <div className="mb-1">{invoiceData.invoiceDate}</div>
                                <div className="mb-1">{invoiceData.dueDate}</div>
                                <div>{invoiceData.customerNo}</div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="separator separator-light"></div>
                        <div className="row">
                          <div className="col-md-3">
                            <h6 className="text-uppercase fs-7 mb-2">Billed To</h6>
                            <div className="Billto-wrap">
                              <h6>{invoiceData.billedTo.name}</h6>
                              <p>{invoiceData.billedTo.address}</p>
                              <p>{invoiceData.billedTo.email}</p>
                            </div>
                          </div>
                        </div>
                        <div className="table-wrap mt-6">
                          <div className="table-responsive">
                            <table className="table" style={{ borderCollapse: 'collapse', border: 'none' }}>
                              <thead className="thead-primary">
                                <tr>
                                  <th style={{ border: 'none' }}>Item</th>
                                  <th style={{ border: 'none' }} className="text-end">Quantity</th>
                                  <th style={{ border: 'none' }} className="text-end">Price</th>
                                  <th style={{ border: 'none' }} className="text-end">Discount</th>
                                  <th style={{ border: 'none' }} className="text-end">Amount</th>
                                </tr>
                              </thead>
                              <tbody>
                                {invoiceData.items.map((item, index) => (
                                  <tr key={index}>
                                    <td style={{ border: 'none' }} className="w-70"><h6>{item.description}</h6></td>
                                    <td style={{ border: 'none' }} className="text-end text-dark">{item.quantity}</td>
                                    <td style={{ border: 'none' }} className="w-15 text-end text-dark">{item.price.toFixed(2)}</td>
                                    <td style={{ border: 'none' }} className="text-end text-dark">{item.discount}%</td>
                                    <td style={{ border: 'none' }} className="w-20 text-end text-dark">{item.amount.toFixed(2)}</td>
                                  </tr>
                                ))}
                                <tr>
                                  <td colSpan="2" rowSpan="4" style={{ border: 'none' }}></td>
                                  <td colSpan="2" style={{ border: 'none' }}>Subtotal</td>
                                  <td style={{ border: 'none' }} className="text-end text-dark">{invoiceData.subtotal.toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <td colSpan="2" style={{ border: 'none' }}>Item Discount</td>
                                  <td style={{ border: 'none' }} className="text-end text-dark">{invoiceData.itemDiscount.toFixed(2)}</td>
                                </tr>
                                <tr>
                                  <td colSpan="2" style={{ border: 'none' }}>Extra Discount</td>
                                  <td style={{ border: 'none' }} className="text-end text-dark">{invoiceData.extraDiscount.toFixed(2)}</td>
                                </tr>
                                <tr style={{ border: 'none' }}>
                                  <td colSpan="2" style={{ border: 'none' }} className="text-dark">Total</td>
                                  <td style={{ border: 'none' }} className="text-end text-dark">{invoiceData.total.toFixed(2)}</td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                        <div className="row mt-3">
                          <div className="col-lg-5">
                            <h6>Note to client</h6>
                            <p>{invoiceData.note}</p>
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
                              {invoiceData.terms.map((term, index) => (
                                <li key={index}>{term}</li>
                              ))}
                            </ol>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SimpleBar>
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